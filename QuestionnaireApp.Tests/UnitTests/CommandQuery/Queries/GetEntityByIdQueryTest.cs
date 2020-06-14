using QuestionnaireApp.CommandQuery.Queries;
using QuestionnaireApp.Domain;
using System;
using Xunit;

namespace QuestionnaireApp.Tests.UnitTests.CommandQuery.Queries
{
    public class GetEntityByIdQueryTest : TestsBase
    {
        [Fact]
        public void GetQuestionnaireById()
        {
            var questionnaireCreator = new User() { Name = "User 1" };
            context.Users.Add(questionnaireCreator);
            context.SaveChanges();

            var questionnaire1 = new Questionnaire
            {
                Name = "Test 1",
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-2)
            };

            var questionnaire2 = new Questionnaire
            {
                Name = "Test 2",
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-5)
            };

            context.Questionnaires.Add(questionnaire1);
            context.Questionnaires.Add(questionnaire2);
            context.SaveChanges();

            var getEntityByIdQuery = new GetEntityByIdQuery(context);
            var returnedQuestionnaire = getEntityByIdQuery.Execute<Questionnaire>(questionnaire1.Id);

            Assert.Equal(questionnaire1.Name, returnedQuestionnaire.Name);
        }
    }
}