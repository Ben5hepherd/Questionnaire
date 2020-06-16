using QuestionnaireApp.Domain;
using System.Linq;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetAllResponsesByQuestionnaireIdQuery
    {
        IQueryable<Response> Execute(int questionnaireId);
    }
}