using QuestionnaireApp.Domain;
using System.Collections.Generic;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetAllEntitiesQuery
    {
        ICollection<T> Execute<T>() where T : Entity;
    }
}