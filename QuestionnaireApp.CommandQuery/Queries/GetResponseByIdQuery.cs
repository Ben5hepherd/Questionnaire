using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetResponseByIdQuery : IGetResponseByIdQuery
    {
        private readonly DataContext dataContext;

        public GetResponseByIdQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public Response Execute(int id)
        {
            return dataContext.Responses
                .Include(r => r.CompletedByUser)
                .Include(r => r.Answers)
                    .ThenInclude(a => a.Question)
                    .ThenInclude(q => q.Section)
                .Single(q => q.Id == id);
        }
    }
}