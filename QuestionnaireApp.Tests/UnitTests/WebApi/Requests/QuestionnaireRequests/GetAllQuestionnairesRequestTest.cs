using Xunit;
using Moq;
using QuestionnaireApp.WebApi.Requests.QuestionnaireRequests;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using static QuestionnaireApp.WebApi.Requests.QuestionnaireRequests.GetAllQuestionnairesRequest;
using System.Threading;
using AutoMapper;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using System.Collections.Generic;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.QuestionnaireRequests
{
    public class GetAllQuestionnairesRequestTest : TestsBase
    {
        [Fact]
        public void GetAllQuestionnaires()
        {
            var getAllEntitiesQueryMock = new Mock<IGetAllEntitiesQuery>();
            var mapperMock = new Mock<IMapper>();

            var request = new GetAllQuestionnairesRequest();
            var handler = new GetAllQuestionnairesRequestHandler(getAllEntitiesQueryMock.Object, mapperMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getAllEntitiesQueryMock.Verify(x => x.Execute<Questionnaire>(), Times.Once);
            mapperMock.Verify(x => x.Map<List<QuestionnaireListViewModel>>(It.IsAny<ICollection<Questionnaire>>()), Times.Once);
        }
    }
}
