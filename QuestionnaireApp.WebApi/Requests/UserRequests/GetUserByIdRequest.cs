using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.Domain;
using AutoMapper;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Requests.UserRequests
{
    public class GetUserByIdRequest : IRequest<UserViewModel>
    {
        public int UserId { get; set; }

        public class GetUserByIdRequestHandler : IRequestHandler<GetUserByIdRequest, UserViewModel>
        {
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;
            private readonly IMapper Mapper;

            public GetUserByIdRequestHandler(IGetEntityByIdQuery getEntityByIdQuery, IMapper mapper)
            {
                GetEntityByIdQuery = getEntityByIdQuery;
                Mapper = mapper;
            }

            public Task<UserViewModel> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
            {
                var users = GetEntityByIdQuery.Execute<User>(request.UserId);
                var userViewModel = Mapper.Map<UserViewModel>(users);
                return Task.FromResult(userViewModel);
            }
        }
    }
}
