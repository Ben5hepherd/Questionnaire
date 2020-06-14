using AutoMapper;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetAllResponsesRequest : IRequest<List<ResponseViewModel>>
    {
        public class GetAllResponsesRequestHandler : IRequestHandler<GetAllResponsesRequest, List<ResponseViewModel>>
        {
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;
            private readonly IMapper Mapper;

            public GetAllResponsesRequestHandler(IGetAllEntitiesQuery getAllEntitiesQuery, IMapper mapper)
            {
                GetAllEntitiesQuery = getAllEntitiesQuery;
                Mapper = mapper;
            }

            public Task<List<ResponseViewModel>> Handle(GetAllResponsesRequest request, CancellationToken cancellationToken)
            {
                var responses = GetAllEntitiesQuery.Execute<Response>();
                var responseViewModels = Mapper.Map<List<ResponseViewModel>>(responses);
                return Task.FromResult(responseViewModels);
            }
        }
    }
}