using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.WebApi.Requests.AnswerRequests;

namespace QuestionnaireApp.WebApi.Requests.SectionRequests
{
    public class AddSectionRequest : IRequest<int>
    {
        public AddSectionModel Model { get; set; }

        public class AddSectionRequestHandler : IRequestHandler<AddSectionRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;

            public AddSectionRequestHandler(IAddEntityCommand addEntityCommand, IGetEntityByIdQuery getEntityByIdQuery)
            {
                AddEntityCommand = addEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
            }

            public Task<int> Handle(AddSectionRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;
                var questionnaire = GetEntityByIdQuery.Execute<Questionnaire>(model.QuestionnaireId);

                var section = new Section
                {
                    Name = model.Name,
                    Ordinal = model.Ordinal,
                    Questionnaire = questionnaire
                };

                return Task.FromResult(AddEntityCommand.Execute(section));
            }
        }
    }

    public class AddSectionRequestValidator : AbstractValidator<AddSectionRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public AddSectionRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public AddSectionRequestValidator()
        {
            RuleFor(x => x.Model.Name).NotEmpty();
            RuleFor(x => x.Model.Ordinal).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).Must(questionnaireId =>
                ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
        }
    }
}
