using QuestionnaireApp.CommandQuery.Commands;
using QuestionnaireApp.Domain;
using System;
using System.Linq;
using Xunit;

namespace QuestionnaireApp.Tests.UnitTests.CommandQuery.Commands
{
    public class DeleteEntityCommandTest : TestsBase
    {
        [Fact]
        public void DeleteQuestionnaire()
        {
            var questionnaireCreator = new User() { Name = "User 1" };
            context.Users.Add(questionnaireCreator);
            context.SaveChanges();

            var questionnaire = new Questionnaire
            {
                Name = "Questionnaire Name",
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-2)
            };
            context.Questionnaires.Add(questionnaire);
            context.SaveChanges();

            Assert.Equal(1, context.Questionnaires.Count());

            var deleteQuestionnaireCommand = new DeleteEntityCommand(context);
            deleteQuestionnaireCommand.Execute<Questionnaire>(questionnaire);

            Assert.Equal(0, context.Questionnaires.Count());
        }
    }
}