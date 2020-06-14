using System.Collections.Generic;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.UserRequests;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator mediator;

        public UserController(IMediator mediator) => this.mediator = mediator;

        [HttpGet]
        public ICollection<UserViewModel> Get()
        {
            return mediator.Send(new GetAllUsersRequest()).Result;
        }

        [HttpPost]
        public int Post(AddUserModel model)
        {
            return mediator.Send(new AddUserRequest() { Model = model }).Result;
        }
    }
}