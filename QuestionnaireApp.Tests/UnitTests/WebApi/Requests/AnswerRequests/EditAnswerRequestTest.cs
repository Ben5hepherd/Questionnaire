using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.Requests.AnswerRequests;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using static QuestionnaireApp.WebApi.Requests.AnswerRequests.EditAnswerRequest;
using System.Threading;
using QuestionnaireApp.WebApi.TimeProviders;
using System;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.AnswerRequests
{
    public class EditAnswerRequestTest : TestsBase
    {
        const int AnswerId = 1;
        const int ResponseId = 5;
        const string UpdatedText = "Test Updated Text";
        readonly DateTime Now = new DateTime(2020, 1, 1);

        [Fact]
        public void EditAnswer()
        {
            var updateEntityCommand = new Mock<IUpdateEntityCommand>();

            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();
            var answer = new Answer { Id = AnswerId, Text = "Original Text", ResponseId = ResponseId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Answer>(AnswerId)).Returns(answer);
            var response = new Response { Id = ResponseId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Response>(ResponseId)).Returns(response);

            EditAnswerRequest request = new EditAnswerRequest();
            request.Model = new EditAnswerModel() { AnswerId = AnswerId, UpdatedText = UpdatedText };

            var timeProviderMock = new Mock<ITimeProvider>();
            timeProviderMock.Setup(x => x.GetDateTimeNow()).Returns(Now);

            EditAnswerRequestHandler handler = new EditAnswerRequestHandler(updateEntityCommand.Object, getEntityByIdQueryMock.Object, timeProviderMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getEntityByIdQueryMock.Verify(x => x.Execute<Answer>(AnswerId), Times.Once);
            getEntityByIdQueryMock.Verify(x => x.Execute<Response>(ResponseId), Times.Once);

            updateEntityCommand.Verify(x => x.Execute(It.Is<Answer>(a => a.Id == AnswerId && a.Text == UpdatedText)), Times.Once);
            updateEntityCommand.Verify(x => x.Execute(It.Is<Response>(a => a.Id == ResponseId && a.DateModified == Now)), Times.Once);
        }
    }
}
