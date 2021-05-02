using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Threading;
using QuestionnaireApp.WebApi.Requests.QuestionRequests;
using static QuestionnaireApp.WebApi.Requests.SectionRequests.AddSectionRequest;
using QuestionnaireApp.WebApi.Requests.SectionRequests;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.SectionRequests
{
    public class AddSectionRequestTest : TestsBase
    {
        const string Name = "Test Name";
        const int Ordinal = 1;
        const int QuestionnaireId = 2;

        [Fact]
        public void AddSection()
        {
            var addEntityCommand = new Mock<IAddEntityCommand>();
            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();

            var questionnaire = new Questionnaire { Id = QuestionnaireId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Questionnaire>(QuestionnaireId)).Returns(questionnaire);

            var request = new AddSectionRequest();
            request.Model = new AddSectionModel() { Name = Name, Ordinal = Ordinal, QuestionnaireId = QuestionnaireId };

            var handler = new AddSectionRequestHandler(addEntityCommand.Object, getEntityByIdQueryMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getEntityByIdQueryMock.Verify(x => x.Execute<Questionnaire>(QuestionnaireId), Times.Once);
            addEntityCommand.Verify(x => x.Execute(It.Is<Section>(s => s.Name == Name && s.Ordinal == Ordinal && s.Questionnaire == questionnaire)), Times.Once);
        }
    }
}
