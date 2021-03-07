using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Threading;
using QuestionnaireApp.WebApi.Requests.QuestionRequests;
using static QuestionnaireApp.WebApi.Requests.QuestionRequests.AddQuestionRequest;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.QuestionRequests
{
    public class AddQuestionRequestTest : TestsBase
    {
        const string Text = "Test Add Question Text";
        const int Ordinal = 1;
        const int SectionId = 2;
        const int QuestionnaireId = 3;

        [Fact]
        public void AddQuestion()
        {
            var addEntityCommand = new Mock<IAddEntityCommand>();
            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();

            var questionnaire = new Questionnaire { Id = QuestionnaireId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Questionnaire>(QuestionnaireId)).Returns(questionnaire);

            var section = new Section { Id = SectionId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Section>(SectionId)).Returns(section);

            var request = new AddQuestionRequest();
            request.Model = new AddQuestionModel() { Text = Text, Ordinal = Ordinal, SectionId = SectionId, QuestionnaireId = QuestionnaireId };

            var handler = new AddQuestionRequestHandler(addEntityCommand.Object, getEntityByIdQueryMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getEntityByIdQueryMock.Verify(x => x.Execute<Questionnaire>(QuestionnaireId), Times.Once);
            addEntityCommand.Verify(x => x.Execute(It.Is<Question>(q => q.Text == Text && q.Ordinal == Ordinal && q.Section == section && q.Questionnaire == questionnaire)), Times.Once);
        }
    }
}
