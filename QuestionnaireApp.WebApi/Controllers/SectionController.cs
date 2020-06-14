using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.SectionRequests;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectionController : ControllerBase
    {
        private readonly IMediator mediator;

        public SectionController(IMediator mediator) => this.mediator = mediator;

        [HttpPost]
        public int Post(AddSectionModel model)
        {
            return mediator.Send(new AddSectionRequest() { Model = model }).Result;
        }
    }
}