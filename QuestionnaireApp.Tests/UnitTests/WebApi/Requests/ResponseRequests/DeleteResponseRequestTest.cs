using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using System.Threading;
using static QuestionnaireApp.WebApi.Requests.ResponseRequests.DeleteResponseByIdRequest;
using QuestionnaireApp.WebApi.Requests.ResponseRequests;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.AnswerRequests
{
    public class DeleteResponseRequestTest : TestsBase
    {
        const int ResponseId = 5;

        [Fact]
        public void DeleteResponse()
        {
            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();
            var deleteEntityCommandMock = new Mock<IDeleteEntityCommand>();

            var response = new Response { Id = ResponseId };
            getEntityByIdQueryMock.Setup(x => x.Execute<Response>(ResponseId)).Returns(response);

            var request = new DeleteResponseByIdRequest();
            request.ResponseId = ResponseId;
            var handler = new DeleteResponseByIdRequestHandler(deleteEntityCommandMock.Object, getEntityByIdQueryMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);

            getEntityByIdQueryMock.Verify(x => x.Execute<Response>(ResponseId), Times.Once);
            deleteEntityCommandMock.Verify(x => x.Execute(It.Is<Response>(r => r.Id == ResponseId)), Times.Once);
        }
    }
}
