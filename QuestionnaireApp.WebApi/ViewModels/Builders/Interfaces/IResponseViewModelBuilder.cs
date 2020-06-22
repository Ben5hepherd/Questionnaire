using QuestionnaireApp.Domain;
using System.Collections.Generic;
using System.Linq;

namespace QuestionnaireApp.WebApi.ViewModels.Builders.Interfaces
{
    public interface IResponseViewModelBuilder
    {
        IEnumerable<ResponseViewModel> BuildResponseViewModels(IQueryable<Response> responses);
        ResponseViewModel BuildResponseViewModel(Response response);
    }
}