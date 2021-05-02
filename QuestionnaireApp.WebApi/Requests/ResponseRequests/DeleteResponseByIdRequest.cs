using MediatR;
using QuestionnaireApp.CommandQuery.Commands.Interfaces;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.Domain;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class DeleteResponseByIdRequest : IRequest
    {
        public int ResponseId { get; set; }

        public class DeleteResponseByIdRequestHandler : IRequestHandler<DeleteResponseByIdRequest>
        {
            private readonly IGetEntityByIdQuery getEntityByIdQuery;
            private readonly IDeleteEntityCommand deleteEntityCommand;

            public DeleteResponseByIdRequestHandler(IDeleteEntityCommand deleteEntityCommand, IGetEntityByIdQuery getEntityByIdQuery)
            {
                this.deleteEntityCommand = deleteEntityCommand;
                this.getEntityByIdQuery = getEntityByIdQuery;
            }

            public Task<Unit> Handle(DeleteResponseByIdRequest request, CancellationToken cancellationToken)
            {
                var response = getEntityByIdQuery.Execute<Response>(request.ResponseId);
                deleteEntityCommand.Execute(response);
                return Task.FromResult(Unit.Value);
            }
        }
    }
}