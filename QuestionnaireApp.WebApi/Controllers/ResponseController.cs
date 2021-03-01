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

        [HttpGet("{responseId}")]
        public ResponseViewModel Get(int responseId)
        {
            return mediator.Send(new GetResponseByIdRequest { ResponseId = responseId }).Result;
        }

        [HttpPost]
        [Authorize]
        public int Post(AddResponseRequestModel requestModel)
        {
            return mediator.Send(new AddResponseRequest { RequestModel = requestModel }).Result;
        }

        [HttpGet("GetResponsesByQuestionnaireId/{questionnaireId}")]
        [Authorize(Roles = "Admin")]
        public IEnumerable<ResponseViewModel> GetResponsesByQuestionnaireId(int questionnaireId)
        {
            return mediator.Send(new GetResponsesByQuestionnaireIdRequest { QuestionnaireId = questionnaireId }).Result;
        }
    }
}