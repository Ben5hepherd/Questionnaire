using AutoMapper;
using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetResponsesByQuestionnaireIdRequest : IRequest<List<ResponseViewModel>>
    {
        public int QuestionnaireId { get; set; }

        public class GetResponsesByQuestionnaireIdRequestHandler : IRequestHandler<GetResponsesByQuestionnaireIdRequest, List<ResponseViewModel>>
        {
            private readonly IGetAllResponsesByQuestionnaireIdQuery getAllResponsesByQuestionnaireIdQuery;
            private readonly IMapper mapper;

            public GetResponsesByQuestionnaireIdRequestHandler(
                IGetAllResponsesByQuestionnaireIdQuery getAllResponsesByQuestionnaireIdQuery,
                IMapper mapper)
            {
                this.getAllResponsesByQuestionnaireIdQuery = getAllResponsesByQuestionnaireIdQuery;
                this.mapper = mapper;
            }

            public Task<List<ResponseViewModel>> Handle(GetResponsesByQuestionnaireIdRequest request, CancellationToken cancellationToken)
            {
                var responses = getAllResponsesByQuestionnaireIdQuery.Execute(request.QuestionnaireId);
                var responseViewModels = mapper.Map<List<ResponseViewModel>>(responses);
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