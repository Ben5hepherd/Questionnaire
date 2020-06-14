using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;

namespace QuestionnaireApp.WebApi.Requests.AnswerRequests
{
    public class EditAnswerRequest : IRequest<int>
    {
        public EditAnswerModel Model { get; set; }

        public class EditAnswerRequestHandler : IRequestHandler<EditAnswerRequest, int>
        {
            private readonly IUpdateEntityCommand UpdateEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;

            public EditAnswerRequestHandler(IUpdateEntityCommand updateEntityCommand, IGetEntityByIdQuery getEntityByIdQuery)
            {
                UpdateEntityCommand = updateEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
            }

            public Task<int> Handle(EditAnswerRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;
                var answer = GetEntityByIdQuery.Execute<Answer>(model.AnswerId);

                answer.Text = model.UpdatedText;
                UpdateEntityCommand.Execute(answer);

                return Task.FromResult(answer.Id);
            }
        }
    }

    public class EditAnswerRequestValidator : AbstractValidator<EditAnswerRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public EditAnswerRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public EditAnswerRequestValidator()
        {
            RuleFor(x => x.Model.UpdatedText).NotEmpty();
            RuleFor(x => x.Model.AnswerId).NotEmpty();
            RuleFor(x => x.Model.AnswerId).Must(answerId =>
                ValidatorExtensions.IsEntityExistent<Answer>(answerId));
        }
    }
}
