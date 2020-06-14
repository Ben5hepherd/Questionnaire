using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Collections.Generic;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetEntityByIdQuery : IGetEntityByIdQuery
    {
        private readonly DataContext dataContext;

        public GetEntityByIdQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public T Execute<T>(int id) where T : Entity
        {
            return dataContext.Set<T>().Single(x => x.Id == id);
        }
    }
}