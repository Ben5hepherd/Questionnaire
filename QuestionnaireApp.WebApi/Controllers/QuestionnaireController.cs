using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuestionnaireApp.WebApi.Requests.QuestionnaireRequests;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionnaireController : ControllerBase
    {
        private readonly IMediator mediator;

        public QuestionnaireController(IMediator mediator) => this.mediator = mediator;

        [HttpGet]
        public async Task<ICollection<QuestionnaireListViewModel>> Get()
        {
            //Made async to test spinner functionality on the front-end
            return await mediator.Send(new GetAllQuestionnairesRequest());
        }

        [HttpGet("{questionnaireId}")]
        public QuestionnaireViewModel Get(int questionnaireId)
        {
            return mediator.Send(new GetQuestionnaireByIdRequest { QuestionnaireId = questionnaireId }).Result;
        }

        [HttpPost]
        public int Post(AddQuestionnaireModel model)
        {
            return mediator.Send(new AddQuestionnaireRequest { Model = model }).Result;
        }
    }
}