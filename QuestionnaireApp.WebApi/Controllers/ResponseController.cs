using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.ResponseRequests;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponseController : ControllerBase
    {
        private readonly IMediator mediator;

        public ResponseController(IMediator mediator) => this.mediator = mediator;

        [HttpGet("{questionnaireId}")]
        [Authorize]
        public List<ResponseViewModel> Get(int questionnaireId)
        {
            /* -- Ultimately use HttpContext.User to verify user is an admin, by an IsAdmin property on User table --*/
            return mediator.Send(new GetResponsesByQuestionnaireIdRequest { QuestionnaireId = questionnaireId }).Result;
        }

        [HttpPost]
        [Authorize]
        public int Post(AddResponseRequestModel requestModel)
        {
            return mediator.Send(new AddResponseRequest { RequestModel = requestModel }).Result;
        }
    }
}