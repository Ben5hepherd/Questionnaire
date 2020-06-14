using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetQuestionnaireByIdQuery : IGetQuestionnaireByIdQuery
    {
        private readonly DataContext dataContext;

        public GetQuestionnaireByIdQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public Questionnaire Execute(int id)
        {
            return dataContext.Questionnaires
                .Include(q => q.Sections)
                .ThenInclude(s => s.Questions)
                .Single(q => q.Id == id);
        }
    }
}