using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Threading.Tasks;

namespace QuestionnaireApp.CommandQuery.Commands
{
    public class UpdateEntityCommand : IUpdateEntityCommand
    {
        private readonly DataContext dataContext;

        public UpdateEntityCommand(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public void Execute<TEntity>(TEntity entity) where TEntity : Entity
        {
            dataContext.Set<TEntity>().Update(entity);
            dataContext.SaveChanges();
        }
    }
}