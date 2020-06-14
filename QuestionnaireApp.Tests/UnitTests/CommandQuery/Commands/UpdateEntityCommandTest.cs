using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.CommandQuery.Commands;
using QuestionnaireApp.Domain;
using System;
using System.Linq;
using Xunit;

namespace QuestionnaireApp.Tests.UnitTests.CommandQuery.Commands
{
    public class UpdateEntityCommandTest : TestsBase
    {
        [Fact]
        public void UpdateQuestionnaire()
        {
            var questionnaireCreator = new User() { Name = "User 1" };
            context.Users.Add(questionnaireCreator);
            context.SaveChanges();

            var originalQuestionnaire = new Questionnaire
            {
                Name = "Test Name 1",
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-2)
            };
            context.Questionnaires.Add(originalQuestionnaire);
            context.SaveChanges();

            var updatedQuestionnaireName = "Updated Questionnaire Name";
            var updatedQuestionnaire = new Questionnaire
            {
                Id = 1,
                Name = updatedQuestionnaireName,
                CreatedByUser = questionnaireCreator,
                CreatedDate = DateTime.Now.AddDays(-2)
            };

            //Don't like this =========
            context.Entry(context.Questionnaires.Single()).State = EntityState.Detached;
            //=========================
            var updateEntityCommand = new UpdateEntityCommand(context);
            updateEntityCommand.Execute(updatedQuestionnaire);

            var savedQuestionnaire = context.Questionnaires.Single();
            Assert.Equal(updatedQuestionnaireName, savedQuestionnaire.Name);
        }
    }
}