using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetEntityByIdQuery
    {
        T Execute<T>(int id) where T : Entity;
    }
}