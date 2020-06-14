using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Commands.Interfaces
{
    public interface IDeleteEntityCommand
    {
        void Execute<TEntity>(TEntity entity) where TEntity : Entity;
    }
}