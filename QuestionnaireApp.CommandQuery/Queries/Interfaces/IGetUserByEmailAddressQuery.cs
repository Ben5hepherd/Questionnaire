using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetUserByEmailAddressQuery
    {
        User Execute(string emailAddress);
    }
}