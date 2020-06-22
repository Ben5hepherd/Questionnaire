using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using QuestionnaireApp.CommandQuery.Commands;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Orm;
using QuestionnaireApp.WebApi.Requests;
using QuestionnaireApp.WebApi.ViewModels.Builders;
using QuestionnaireApp.WebApi.ViewModels.Builders.Interfaces;
using System.Text;

namespace QuestionnaireApp.WebApi
{
    public class Startup
    {
        public IConfiguration configuration { get; }

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                {
                    builder.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                    .AllowCredentials();
                });
            });

            var mappingConfig = new MapperConfiguration(mc => mc.AddProfile(new MappingProfile()));
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            var jwtIssuer = configuration["Jwt:Issuer"];
            var jwtKey = Encoding.UTF8.GetBytes(configuration["Jwt:Key"]);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = false,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = jwtIssuer,
                        ValidAudience = jwtIssuer,
                        IssuerSigningKey = new SymmetricSecurityKey(jwtKey)
                    };
                });

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddFluentValidation();
            services.AddDbContext<DataContext>();

            services.AddScoped<IGetAllEntitiesQuery, GetAllEntitiesQuery>();
            services.AddScoped<IGetEntityByIdQuery, GetEntityByIdQuery>();
            services.AddScoped<IGetQuestionnaireByIdQuery, GetQuestionnaireByIdQuery>();
            services.AddScoped<IGetResponseByIdQuery, GetResponseByIdQuery>();
            services.AddScoped<IGetUserByEmailAddressQuery, GetUserByEmailAddressQuery>();
            services.AddScoped<IGetAllResponsesByQuestionnaireIdQuery, GetAllResponsesByQuestionnaireIdQuery>();

            services.AddScoped<IAddEntityCommand, AddEntityCommand>();
            services.AddScoped<IUpdateEntityCommand, UpdateEntityCommand>();
            services.AddScoped<IDeleteEntityCommand, DeleteEntityCommand>();

            services.AddScoped<IValidatorExtensions, ValidatorExtensions>();

            services.AddScoped<IResponseViewModelBuilder, ResponseViewModelBuilder>();

            services.AddMediatR(typeof(Startup));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            services.AddValidatorsFromAssembly(typeof(Startup).Assembly);

            services.AddHttpContextAccessor();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseCors("CorsPolicy");
            app.UseAuthentication();
            app.UseMvc();

            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
