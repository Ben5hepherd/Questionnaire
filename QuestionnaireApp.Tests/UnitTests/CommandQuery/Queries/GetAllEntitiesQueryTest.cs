using QuestionnaireApp.CommandQuery.Queries;
using QuestionnaireApp.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace QuestionnaireApp.Tests.UnitTests.CommandQuery.Queries
{
    public class GetAllEntitiesQueryTest : TestsBase
    {
        [Fact]
        public void GetAllQuestionnaires()
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

            var getAllEntitiesQuery = new GetAllEntitiesQuery(context);
            var questionnaires = getAllEntitiesQuery.Execute<Questionnaire>();
            Assert.Equal(2, questionnaires.Count());
        }
    }
}