using MediatR;
using QuestionnaireApp.CommandQuery.Queries.Interfaces;
using QuestionnaireApp.WebApi.ViewModels;
using QuestionnaireApp.WebApi.ViewModels.Builders.Interfaces;
using System.Threading;
using System.Threading.Tasks;

namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetResponseByIdRequest : IRequest<ResponseViewModel>
    {
        public int ResponseId { get; set; }

        public class GetResponseByIdRequestHandler : IRequestHandler<GetResponseByIdRequest, ResponseViewModel>
        {
            private readonly IGetResponseByIdQuery getResponseByIdQuery;
            private readonly IResponseViewModelBuilder responseViewModelBuilder;

            public GetResponseByIdRequestHandler(IGetResponseByIdQuery getResponseByIdQuery, IResponseViewModelBuilder responseViewModelBuilder)
            {
                this.getResponseByIdQuery = getResponseByIdQuery;
                this.responseViewModelBuilder = responseViewModelBuilder;
            }

            public Task<ResponseViewModel> Handle(GetResponseByIdRequest request, CancellationToken cancellationToken)
            {
                var response = getResponseByIdQuery.Execute(request.ResponseId);
                var responseViewModel = responseViewModelBuilder.BuildResponseViewModel(response);
                return Task.FromResult(responseViewModel);
            }
        }
    }
}