using FluentValidation;
using MediatR;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.QuestionnaireRequests
{
    public class AddQuestionnaireRequest : IRequest<int>
    {
        public AddQuestionnaireModel Model { get; set; }

        public class AddQuestionnaireRequestHandler : IRequestHandler<AddQuestionnaireRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;
            private readonly IGetEntityByIdQuery GetEntityByIdQuery;

            public AddQuestionnaireRequestHandler(IAddEntityCommand addEntityCommand, IGetEntityByIdQuery getEntityByIdQuery)
            {
                AddEntityCommand = addEntityCommand;
                GetEntityByIdQuery = getEntityByIdQuery;
            }

            public Task<int> Handle(AddQuestionnaireRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;
                var createdByUser = GetEntityByIdQuery.Execute<User>(model.CreatedByUserId);

                var questionnaire = new Questionnaire
                {
                    Name = model.Name,
                    CreatedDate = DateTime.Now,
                    CreatedByUser = createdByUser
                };

                return Task.FromResult(AddEntityCommand.Execute(questionnaire));
            }
        }
    }

    public class AddQuestionnaireRequestValidator : AbstractValidator<AddQuestionnaireRequest>
    {
        private readonly IGetEntityByIdQuery GetEntityByIdQuery;

        public AddQuestionnaireRequestValidator(IGetEntityByIdQuery getEntityByIdQuery)
        {
            GetEntityByIdQuery = getEntityByIdQuery;
        }

        public AddQuestionnaireRequestValidator()
        {
            RuleFor(x => x.Model.Name).NotEmpty();
            RuleFor(x => x.Model.CreatedByUserId).NotEmpty();
            RuleFor(x => x.Model.CreatedByUserId).Must(CorrespondToAnExistingUser);
        }

        private bool CorrespondToAnExistingUser(int userId)
        {
            return GetEntityByIdQuery.Execute<User>(userId) != null;
        }
    }
}
