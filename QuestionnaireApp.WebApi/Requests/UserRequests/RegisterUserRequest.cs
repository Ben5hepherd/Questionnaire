using MediatR;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using FluentValidation;

namespace QuestionnaireApp.WebApi.Requests.UserRequests
{
    public class RegisterUserRequest : IRequest<int>
    {
        public RegisterUserModel Model { get; set; }

        public class RegisterUserRequestHandler : IRequestHandler<RegisterUserRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;

            public RegisterUserRequestHandler(IAddEntityCommand addEntityCommand)
            {
                AddEntityCommand = addEntityCommand;
            }

            public Task<int> Handle(RegisterUserRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;

                var user = new User
                {
                    Name = model.Name,
                    Email = model.Email,
                    EncryptedPassword = PasswordEncrypter.EncryptPassword(model.Password)
                };

                return Task.FromResult(AddEntityCommand.Execute(user));
            }
        }
    }
    public class RegisterUserRequestValidator : AbstractValidator<RegisterUserRequest>
    {
        public RegisterUserRequestValidator()
        {
            RuleFor(x => x.Model.Name).NotEmpty();
            RuleFor(x => x.Model.Email).NotEmpty();
            RuleFor(x => x.Model.Password).NotEmpty();
        }
    }
}
