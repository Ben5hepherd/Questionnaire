using AutoMapper;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.QuestionnaireRequests
{
    public class GetAllQuestionnairesRequest : IRequest<List<QuestionnaireListViewModel>>
    {
        public class GetAllQuestionnairesRequestHandler : IRequestHandler<GetAllQuestionnairesRequest, List<QuestionnaireListViewModel>>
        {
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;
            private readonly IMapper Mapper;

            public GetAllQuestionnairesRequestHandler(IGetAllEntitiesQuery getAllEntitiesQuery, IMapper mapper)
            {
                GetAllEntitiesQuery = getAllEntitiesQuery;
                Mapper = mapper;
            }

            public Task<List<QuestionnaireListViewModel>> Handle(GetAllQuestionnairesRequest request, CancellationToken cancellationToken)
            {
                var questionnaires = GetAllEntitiesQuery.Execute<Questionnaire>();
                var questionnaireViewModels = Mapper.Map<List<QuestionnaireListViewModel>>(questionnaires);
                return Task.FromResult(questionnaireViewModels);
            }
        }
    }
}