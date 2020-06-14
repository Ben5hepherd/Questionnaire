using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.QuestionRequests
{
    public class AddQuestionRequest : IRequest<int>
    {
        public AddQuestionModel Model { get; set; }

        public class AddQuestionRequestHandler : IRequestHandler<AddQuestionRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;

            public AddQuestionRequestHandler(IAddEntityCommand addEntityCommand, IGetEntityByIdQuery getEntityByIdQuery)
            {
                AddEntityCommand = addEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
            }

            public Task<int> Handle(AddQuestionRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;
                var questionnaire = GetEntityByIdQuery.Execute<Questionnaire>(model.QuestionnaireId);
                var section = GetEntityByIdQuery.Execute<Section>(model.SectionId);

                var question = new Question
                {
                    Text = model.Text,
                    Ordinal = model.Ordinal,
                    Questionnaire = questionnaire,
                    Section = section
                };

                return Task.FromResult(AddEntityCommand.Execute(question));
            }
        }
    }

    public class AddQuestionRequestValidator : AbstractValidator<AddQuestionRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public AddQuestionRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public AddQuestionRequestValidator()
        {
            RuleFor(x => x.Model.Text).NotEmpty();
            RuleFor(x => x.Model.Ordinal).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).Must(questionnaireId =>
                ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
            RuleFor(x => x.Model.SectionId).NotEmpty();
            RuleFor(x => x.Model.SectionId).Must(sectionId =>
                ValidatorExtensions.IsEntityExistent<Section>(sectionId));
        }
    }
}