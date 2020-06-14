using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QuestionnaireApp.CommandQuery.Commands;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Orm;
using QuestionnaireApp.WebApi.Requests;

namespace QuestionnaireApp.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            var mappingConfig = new MapperConfiguration(mc => mc.AddProfile(new MappingProfile()));
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddFluentValidation();
            services.AddDbContext<DataContext>();

            services.AddScoped<IGetAllEntitiesQuery, GetAllEntitiesQuery>();
            services.AddScoped<IGetEntityByIdQuery, GetEntityByIdQuery>();
            services.AddScoped<IGetQuestionnaireByIdQuery, GetQuestionnaireByIdQuery>();

            services.AddScoped<IAddEntityCommand, AddEntityCommand>();
            services.AddScoped<IUpdateEntityCommand, UpdateEntityCommand>();
            services.AddScoped<IDeleteEntityCommand, DeleteEntityCommand>();

            services.AddScoped<IValidatorExtensions, ValidatorExtensions>();

            services.AddMediatR(typeof(Startup));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            services.AddValidatorsFromAssembly(typeof(Startup).Assembly);
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

            app.UseHttpsRedirection();
            app.UseCors(options => options.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());
            app.UseMvc();
        }
    }
}
