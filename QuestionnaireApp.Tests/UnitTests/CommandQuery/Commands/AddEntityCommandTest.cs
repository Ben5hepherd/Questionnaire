using QuestionnaireApp.CommandQuery.Commands;
using QuestionnaireApp.Domain;
using System;
using System.Linq;
using Xunit;

namespace QuestionnaireApp.Tests.UnitTests.CommandQuery.Commands
{
    public class AddEntityCommandTest : TestsBase
    {
        [Fact]
        public void AddQuestionnaire()
        {
            var questionnaireName = "Test Name 1";

            var questionnaireCreator = new User() { Name = "User 1" };
            context.Users.Add(questionnaireCreator);
            context.SaveChanges();

            var addQuestionnaireCommand = new AddEntityCommand(context);

            var questionnaire = new Questionnaire
            {
                Name = questionnaireName,
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-2)
            };

            addQuestionnaireCommand.Execute(questionnaire);

            Assert.Equal(1, context.Questionnaires.Count());
            Assert.Equal(1, context.Users.Count());
        }
    }
}