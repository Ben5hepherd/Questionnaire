using System;
using Xunit;
using Moq;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.Requests.QuestionnaireRequests;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using static QuestionnaireApp.WebApi.Requests.QuestionnaireRequests.AddQuestionnaireRequest;
using System.Threading;
using QuestionnaireApp.WebApi.TimeProviders;

namespace QuestionnaireApp.Tests.UnitTests.WebApi.Requests.QuestionnaireRequests
{
    public class AddQuestionnaireRequestTest : TestsBase
    {
        const int UserId = 1;
        const string Name = "Test Questionnaire 1";
        readonly DateTime Now = new DateTime(2020, 1, 1);

        [Fact]
        public void AddQuestionnaire()
        {
            var addEntityCommandMock = new Mock<IAddEntityCommand>();

            var getEntityByIdQueryMock = new Mock<IGetEntityByIdQuery>();
            var user = new User() { Id = 1, Email = "user email", EncryptedPassword = "123", IsAdmin = false, Name = "user name" };
            getEntityByIdQueryMock.Setup(x => x.Execute<User>(UserId)).Returns(user);

            var timeProviderMock = new Mock<ITimeProvider>();
            timeProviderMock.Setup(x => x.GetDateTimeNow()).Returns(Now);

            AddQuestionnaireRequest request = new AddQuestionnaireRequest();
            request.Model = new AddQuestionnaireModel() { CreatedByUserId = UserId, Name = Name };

            AddQuestionnaireRequestHandler handler = new AddQuestionnaireRequestHandler(addEntityCommandMock.Object, getEntityByIdQueryMock.Object, timeProviderMock.Object);

            CancellationTokenSource cts = new CancellationTokenSource();
            handler.Handle(request, cts.Token);
        
            addEntityCommandMock.Verify(x => x.Execute(It.Is<Questionnaire>(q => q.Name == Name && q.CreatedByUser == user && q.CreatedDate == Now)), Times.Once);
            getEntityByIdQueryMock.Verify(x => x.Execute<User>(UserId), Times.Once);
        }
    }
}
