using System.Collections.Generic;
using MediatR;
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

        [HttpGet]
        public ICollection<ResponseViewModel> Get()
        {
            return mediator.Send(new GetAllResponsesRequest()).Result;
        }

        [HttpGet]
        public ResponseViewModel Get(GetResponseByQuestionnaireAndUserModel model)
        {
            return mediator.Send(new GetResponseByQuestionnaireAndUserRequest { Model = model }).Result;
        }

        [HttpPost]
        public int Post(AddResponseModel model)
        {
            return mediator.Send(new AddResponseRequest { Model = model }).Result;
        }
    }
}