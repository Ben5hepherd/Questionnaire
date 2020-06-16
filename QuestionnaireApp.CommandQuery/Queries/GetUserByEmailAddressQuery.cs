using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.Orm;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries
{
    public class GetUserByEmailAddressQuery : IGetUserByEmailAddressQuery
    {
        private readonly DataContext dataContext;

        public GetUserByEmailAddressQuery(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public User Execute(string emailAddress)
        {
            return dataContext.Users.SingleOrDefault(u => u.Email == emailAddress);
        }
    }
}