using System.Collections.Generic;
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
        public ICollection<QuestionnaireListViewModel> Get()
        {
            return mediator.Send(new GetAllQuestionnairesRequest()).Result;
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