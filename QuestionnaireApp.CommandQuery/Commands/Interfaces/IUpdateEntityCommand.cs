using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Commands.Interfaces
{
    public interface IUpdateEntityCommand
    {
        void Execute<TEntity>(TEntity entity) where TEntity : Entity;
    }
}