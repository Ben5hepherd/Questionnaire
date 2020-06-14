using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;

namespace QuestionnaireApp.CommandQuery.Commands
{
    public class AddEntityCommand : IAddEntityCommand
    {
        private readonly DataContext dataContext;

        public AddEntityCommand(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public int Execute<TEntity>(TEntity entity) where TEntity : Entity
        {
            dataContext.Set<TEntity>().Add(entity);
            dataContext.SaveChanges();
            return entity.Id;
        }
    }
}