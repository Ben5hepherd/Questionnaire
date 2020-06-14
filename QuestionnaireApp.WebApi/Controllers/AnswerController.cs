using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.AnswerRequests;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IMediator mediator;

        public AnswerController(IMediator mediator) => this.mediator = mediator;

        [HttpPut]
        public int Put(EditAnswerModel model)
        {
            return mediator.Send(new EditAnswerRequest() { Model = model }).Result;
        }
    }
}