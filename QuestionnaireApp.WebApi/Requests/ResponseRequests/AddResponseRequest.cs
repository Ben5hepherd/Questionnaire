using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class AddResponseRequest : IRequest<int>
    {
        public AddResponseModel Model { get; set; }

        public class AddResponseRequestHandler : IRequestHandler<AddResponseRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;

            public AddResponseRequestHandler(
                IAddEntityCommand addEntityCommand,
                IGetEntityByIdQuery getEntityByIdQuery,
                IGetAllEntitiesQuery getAllEntitiesQuery)
            {
                AddEntityCommand = addEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
                GetAllEntitiesQuery = getAllEntitiesQuery;
            }

            public Task<int> Handle(AddResponseRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;
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
            RuleFor(x => x.Model.CompletedByUserId).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).NotEmpty();
            RuleFor(x => x.Model.CompletedByUserId).Must(userId => ValidatorExtensions.IsEntityExistent<User>(userId));
            RuleFor(x => x.Model.QuestionnaireId).Must(questionnaireId => ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
        }
    }
}