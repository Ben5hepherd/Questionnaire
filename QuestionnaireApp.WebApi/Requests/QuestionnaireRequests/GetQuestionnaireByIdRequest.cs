using AutoMapper;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.WebApi.ViewModels;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.QuestionnaireRequests
{
    public class GetQuestionnaireByIdRequest : IRequest<QuestionnaireViewModel>
    {
        public int QuestionnaireId { get; set; }

        public class GetQuestionnaireByIdRequestHandler : IRequestHandler<GetQuestionnaireByIdRequest, QuestionnaireViewModel>
        {
            private readonly IGetQuestionnaireByIdQuery getQuestionnaireByIdQuery;
            private readonly IMapper mapper;

            public GetQuestionnaireByIdRequestHandler(IGetQuestionnaireByIdQuery getQuestionnaireByIdQuery, IMapper mapper)
            {
                this.getQuestionnaireByIdQuery = getQuestionnaireByIdQuery;
                this.mapper = mapper;
            }

            public Task<QuestionnaireViewModel> Handle(GetQuestionnaireByIdRequest request, CancellationToken cancellationToken)
            {
                var questionnaire = getQuestionnaireByIdQuery.Execute(request.QuestionnaireId);
                var questionnaireViewModel = mapper.Map<QuestionnaireViewModel>(questionnaire);
                return Task.FromResult(questionnaireViewModel);
            }
        }
    }
}