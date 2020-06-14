using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.QuestionRequests;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IMediator mediator;

        public QuestionController(IMediator mediator) => this.mediator = mediator;

        [HttpPost]
        public int Post(AddQuestionModel model)
        {
            return mediator.Send(new AddQuestionRequest() { Model = model }).Result;
        }
    }
}