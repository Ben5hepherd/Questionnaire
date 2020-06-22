using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using QuestionnaireApp.WebApi.ViewModels.Builders.Interfaces;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetResponsesByQuestionnaireIdRequest : IRequest<IEnumerable<ResponseViewModel>>
    {
        public int QuestionnaireId { get; set; }

        public class GetResponsesByQuestionnaireIdRequestHandler : IRequestHandler<GetResponsesByQuestionnaireIdRequest, IEnumerable<ResponseViewModel>>
        {
            private readonly IGetAllResponsesByQuestionnaireIdQuery getAllResponsesByQuestionnaireIdQuery;
            private readonly IResponseViewModelBuilder responseViewModelBuilder;

            public GetResponsesByQuestionnaireIdRequestHandler(IGetAllResponsesByQuestionnaireIdQuery getAllResponsesByQuestionnaireIdQuery, IResponseViewModelBuilder responseViewModelBuilder)
            {
                this.getAllResponsesByQuestionnaireIdQuery = getAllResponsesByQuestionnaireIdQuery;
                this.responseViewModelBuilder = responseViewModelBuilder;
            }

            public Task<IEnumerable<ResponseViewModel>> Handle(GetResponsesByQuestionnaireIdRequest request, CancellationToken cancellationToken)
            {
                var responses = getAllResponsesByQuestionnaireIdQuery.Execute(request.QuestionnaireId);
                var responseViewModels = responseViewModelBuilder.BuildResponseViewModels(responses);
                return Task.FromResult(responseViewModels);
            }
        }
    }

    public class GetResponsesByQuestionnaireIdRequestValidator : AbstractValidator<GetResponsesByQuestionnaireIdRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public GetResponsesByQuestionnaireIdRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public GetResponsesByQuestionnaireIdRequestValidator()
        {
            RuleFor(x => x.QuestionnaireId).NotEmpty();
            RuleFor(x => x.QuestionnaireId).Must(questionnaireId => ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
        }
    }
}