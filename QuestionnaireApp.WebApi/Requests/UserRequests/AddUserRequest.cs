using MediatR;
using System.Threading;
using System.Threading.Tasks;
using QuestionnaireApp.Domain;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using System.Security.Cryptography;
using System;
using FluentValidation;

namespace QuestionnaireApp.WebApi.Requests.UserRequests
{
    public class AddUserRequest : IRequest<int>
    {
        public AddUserModel Model { get; set; }

        public class AddUserRequestHandler : IRequestHandler<AddUserRequest, int>
        {
            private readonly IAddEntityCommand AddEntityCommand;

            public AddUserRequestHandler(IAddEntityCommand addEntityCommand)
            {
                AddEntityCommand = addEntityCommand;
            }

            public Task<int> Handle(AddUserRequest request, CancellationToken cancellationToken)
            {
                var model = request.Model;

                var user = new User
                {
                    Name = model.Name,
                    Email = model.Email,
                    EncryptedPassword = EncryptPassword(model.Password)
                };

                return Task.FromResult(AddEntityCommand.Execute(user));
            }

            private string EncryptPassword(string password)
            {
                var salt = new byte[16];
                using (var provider = new RNGCryptoServiceProvider())
                {
                    provider.GetBytes(salt);
                }
                return HashPassword(password, salt);
            }

            private string HashPassword(string password, byte[] salt)
            {
                byte[] hash;

                using(var deriveBytes = new Rfc2898DeriveBytes(password, salt, 1000))
                {
                    hash = deriveBytes.GetBytes(20);
                }

                var hashBytes = new byte[36];
                Array.Copy(salt, 0, hashBytes, 0, 16);
                Array.Copy(hash, 0, hashBytes, 16, 20);

                return Convert.ToBase64String(hashBytes);
            }
        }
    }
    public class AddUserRequestValidator : AbstractValidator<AddUserRequest>
    {
        public AddUserRequestValidator()
        {
            RuleFor(x => x.Model.Name).NotEmpty();
            RuleFor(x => x.Model.Email).NotEmpty();
            RuleFor(x => x.Model.Password).NotEmpty();
        }
    }
}
