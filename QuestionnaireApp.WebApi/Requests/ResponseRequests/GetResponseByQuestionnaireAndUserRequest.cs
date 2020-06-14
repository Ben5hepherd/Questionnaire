using AutoMapper;
using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetResponseByQuestionnaireAndUserRequest : IRequest<ResponseViewModel>
    {
        public GetResponseByQuestionnaireAndUserModel Model { get; set; }

        public class GetResponseByQuestionnaireAndUserRequestHandler : IRequestHandler<GetResponseByQuestionnaireAndUserRequest, ResponseViewModel>
        {
            private readonly IGetAllEntitiesQuery GetAllEntitiesQuery;
            private readonly IMapper Mapper;

            public GetResponseByQuestionnaireAndUserRequestHandler(IGetAllEntitiesQuery getAllEntitiesQuery, IMapper mapper)
            {
                GetAllEntitiesQuery = getAllEntitiesQuery;
                Mapper = mapper;
            }

            public Task<ResponseViewModel> Handle(GetResponseByQuestionnaireAndUserRequest request, CancellationToken cancellationToken)
            {
                var responses = GetAllEntitiesQuery.Execute<Response>();
                var response = responses.Where(r =>
                    r.CompletedByUser.Id == request.Model.UserId &&
                    r.Questionnaire.Id == request.Model.QuestionnaireId);
                var responseViewModel = Mapper.Map<ResponseViewModel>(responses);
                return Task.FromResult(responseViewModel);
            }
        }
    }

    public class GetResponseByQuestionnaireAndUserRequestValidator : AbstractValidator<GetResponseByQuestionnaireAndUserRequest>
    {
        private readonly IValidatorExtensions ValidatorExtensions;

        public GetResponseByQuestionnaireAndUserRequestValidator(IValidatorExtensions validatorExtensions)
        {
            ValidatorExtensions = validatorExtensions;
        }

        public GetResponseByQuestionnaireAndUserRequestValidator()
        {
            RuleFor(x => x.Model.UserId).NotEmpty();
            RuleFor(x => x.Model.QuestionnaireId).NotEmpty();
            RuleFor(x => x.Model.UserId).Must(userId => ValidatorExtensions.IsEntityExistent<User>(userId));
            RuleFor(x => x.Model.QuestionnaireId).Must(questionnaireId => ValidatorExtensions.IsEntityExistent<Questionnaire>(questionnaireId));
        }
    }
}