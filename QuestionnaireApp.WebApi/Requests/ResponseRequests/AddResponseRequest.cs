using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class AddResponseRequest : IRequest<int>
    {
        public AddResponseRequestModel RequestModel { get; set; }

        public class AddResponseRequestHandler : IRequestHandler<AddResponseRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;
            private readonly IHttpContextAccessor HttpContextAccessor;

            public AddResponseRequestHandler(
                IAddEntityCommand addEntityCommand,
                IGetEntityByIdQuery getEntityByIdQuery,
                IGetAllEntitiesQuery getAllEntitiesQuery,
                IHttpContextAccessor httpContextAccessor)
            {
                AddEntityCommand = addEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
                GetAllEntitiesQuery = getAllEntitiesQuery;
                HttpContextAccessor = httpContextAccessor;
            }

            public Task<int> Handle(AddResponseRequest request, CancellationToken cancellationToken)
            {
                var currentUserSid = HttpContextAccessor.HttpContext.User.Claims.Single(c => c.Type == JwtRegisteredClaimNames.Sid).Value;
                var model = new AddResponseModel
                {
                    QuestionnaireId = request.RequestModel.QuestionnaireId,
                    CompletedByUserId = int.Parse(currentUserSid)
                };

                var user = GetEntityByIdQuery.Execute<User>(model.CompletedByUserId);
                var questionnaire = GetEntityByIdQuery.Execute<Questionnaire>(model.QuestionnaireId);

                var response = new Response { CompletedByUser = user, Questionnaire = questionnaire };
                AddEntityCommand.Execute(response);

                CreateAnswers(ref response, questionnaire.Id);

                return Task.FromResult(response.Id);
            }

            private void CreateAnswers(ref Response response, int questionnaireId)
            {
                var questions = GetAllEntitiesQuery.Execute<Question>().Where(q => q.QuestionnaireId == questionnaireId);

                foreach (var question in questions)
                {
                    var answer = new Answer { Text = "", Question = question, Response = response };
                    AddEntityCommand.Execute(answer);
                }
            }
        }
    }

    public class AddResponseRequestValidator : AbstractValidator<AddResponseRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public AddResponseRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public AddResponseRequestValidator()
        {
            RuleFor(x => x.RequestModel.QuestionnaireId).NotEmpty();
            RuleFor(x => x.RequestModel.QuestionnaireId).Must(questionnaireId => ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
        }
    }
}