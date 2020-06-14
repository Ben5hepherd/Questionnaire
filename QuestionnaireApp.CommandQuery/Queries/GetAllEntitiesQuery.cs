using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Collections.Generic;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetAllEntitiesQuery : IGetAllEntitiesQuery
    {
        private readonly DataContext dataContext;

        public GetAllEntitiesQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public ICollection<T> Execute<T>() where T : Entity
        {
            return dataContext.Set<T>().ToList();
        }
    }
}