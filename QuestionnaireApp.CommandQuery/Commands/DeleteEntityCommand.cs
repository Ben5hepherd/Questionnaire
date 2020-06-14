using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;

namespace QuestionnaireApp.CommandQuery.Commands
{
    public class DeleteEntityCommand : IDeleteEntityCommand
    {
        private readonly DataContext dataContext;

        public DeleteEntityCommand(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public void Execute<TEntity>(TEntity entity) where TEntity : Entity
        {
            dataContext.Set<TEntity>().Remove(entity);
            dataContext.SaveChanges();
        }
    }
}