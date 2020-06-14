using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;

namespace QuestionnaireApp.WebApi.Requests
{
    public class ValidatorExtensions : IValidatorExtensions
    {
        private readonly IGetEntityByIdQuery GetEntityByIdQuery;

        public ValidatorExtensions(IGetEntityByIdQuery getEntityByIdQuery)
        {
            GetEntityByIdQuery = getEntityByIdQuery;
        }

        public bool IsEntityExistent<T>(int entityId) where T : Entity
        {
            return GetEntityByIdQuery.Execute<T>(entityId) != null;
        }
    }
}