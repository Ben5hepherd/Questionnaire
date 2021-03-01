using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QuestionnaireApp.WebApi.Requests.UserRequests;
using QuestionnaireApp.WebApi.ViewModels;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

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

        [HttpGet("LoggedInUser")]
        [Authorize]
        public UserViewModel LoggedInUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var sidClaim = identity?.Claims.SingleOrDefault(c => c.Type == JwtRegisteredClaimNames.Sid);
            return mediator.Send(new GetUserByIdRequest() { UserId = int.Parse(sidClaim.Value) }).Result;
        }

        [HttpPost]
        public int Post(RegisterUserModel model)
        {
            return mediator.Send(new RegisterUserRequest() { Model = model }).Result;
        }
    }
}