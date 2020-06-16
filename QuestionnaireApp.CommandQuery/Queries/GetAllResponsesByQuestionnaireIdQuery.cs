using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetAllResponsesByQuestionnaireIdQuery : IGetAllResponsesByQuestionnaireIdQuery
    {
        private readonly DataContext dataContext;

        public GetAllResponsesByQuestionnaireIdQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public IQueryable<Response> Execute(int questionnaireId)
        {
            return dataContext.Responses
                .Where(r => r.Questionnaire.Id == questionnaireId)
                .Include(r => r.Answers)
                .ThenInclude(a => a.Question);
        }
    }
}