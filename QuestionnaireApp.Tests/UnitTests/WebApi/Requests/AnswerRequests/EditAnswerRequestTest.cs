using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.Requests.AnswerRequests;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using static QuestionnaireApp.WebApi.Requests.AnswerRequests.EditAnswerRequest;
using System.Threading;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.AnswerRequests
{
    public class EditAnswerRequestTest : TestsBase
    {
        const int AnswerId = 1;
        const string UpdatedText = "Test Updated Text";

        [Fact]
        public void EditAnswer()
        {
            var updateEntityCommand = new Mock<IUpdateEntityCommand>();

            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();
            var answer = new Answer { Id = 1, Text = "Original Text" };
            getEntityByIdQueryMock.Setup(x => x.Execute<Answer>(AnswerId)).Returns(answer);

            EditAnswerRequest request = new EditAnswerRequest();
            request.Model = new EditAnswerModel() { AnswerId = AnswerId, UpdatedText = UpdatedText };

            EditAnswerRequestHandler handler = new EditAnswerRequestHandler(updateEntityCommand.Object, getEntityByIdQueryMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getEntityByIdQueryMock.Verify(x => x.Execute<Answer>(AnswerId), Times.Once);
            updateEntityCommand.Verify(x => x.Execute(It.Is<Answer>(a => a.Id == AnswerId && a.Text == UpdatedText)), Times.Once);
        }
    }
}
