using QuestionnaireApp.Domain;

namespace QuestionnaireApp.CommandQuery.Queries.Interfaces
{
    public interface IGetQuestionnaireByIdQuery
    {
        Questionnaire Execute(int id);
    }
}