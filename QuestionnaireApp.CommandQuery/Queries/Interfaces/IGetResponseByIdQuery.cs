using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetResponseByIdQuery
    {
        Response Execute(int id);
    }
}