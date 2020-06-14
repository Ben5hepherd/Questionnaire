using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.Domain;
using AutoMapper;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Requests.UserRequests
{
    public class GetAllUsersRequest : IRequest<List<UserViewModel>>
    {
        public class GetAllUsersRequestHandler : IRequestHandler<GetAllUsersRequest, List<UserViewModel>>
        {
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;
            private readonly IMapper Mapper;

            public GetAllUsersRequestHandler(IGetAllEntitiesQuery getAllEntitiesQuery, IMapper mapper)
            {
                GetAllEntitiesQuery = getAllEntitiesQuery;
                Mapper = mapper;
            }

            public Task<List<UserViewModel>> Handle(GetAllUsersRequest request, CancellationToken cancellationToken)
            {
                var users = GetAllEntitiesQuery.Execute<User>();
                var userViewModels = Mapper.Map<List<UserViewModel>>(users);
                return Task.FromResult(userViewModels);
            }
        }
    }
}
