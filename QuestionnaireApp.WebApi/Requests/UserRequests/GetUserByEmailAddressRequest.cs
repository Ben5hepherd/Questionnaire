using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Requests.UserRequests
{
    public class GetUserByEmailAddressRequest : IRequest<UserViewModel>
    {
        public string EmailAddress { get; set; }
        public class GetUserByEmailAddressRequestHandler : IRequestHandler<GetUserByEmailAddressRequest, UserViewModel>
        {
            private readonly IGetUserByEmailAddressQuery getUserByEmailAddressQuery;
            private readonly IMapper mapper;

            public GetUserByEmailAddressRequestHandler(IGetUserByEmailAddressQuery getUserByEmailAddressQuery, IMapper mapper)
            {
                this.getUserByEmailAddressQuery = getUserByEmailAddressQuery;
                this.mapper = mapper;
            }

            public Task<UserViewModel> Handle(GetUserByEmailAddressRequest request, CancellationToken cancellationToken)
            {
                var user = getUserByEmailAddressQuery.Execute(request.EmailAddress);
                var userViewModel = mapper.Map<UserViewModel>(user);
                return Task.FromResult(userViewModel);
            }
        }
    }
}
