using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Commands.Interfaces
{
    public interface IAddEntityCommand
    {
        int Execute<TEntity>(TEntity entity) where TEntity : Entity;
    }
}