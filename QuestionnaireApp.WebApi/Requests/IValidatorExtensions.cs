using QuestionnaireApp.Domain;

namespace QuestionnaireApp.WebApi.Requests
{
    public interface IValidatorExtensions
    {
        bool IsEntityExistent<T>(int entityId) where T : Entity;
    }
}