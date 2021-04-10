using AutoMapper;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels.Builders.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace QuestionnaireApp.WebApi.ViewModels.Builders
{
    public class ResponseViewModelBuilder : IResponseViewModelBuilder
    {
        private readonly IMapper mapper;

        public ResponseViewModelBuilder(IMapper mapper)
        {
            this.mapper = mapper;
        }

        public IEnumerable<ResponseViewModel> BuildResponseViewModels(IQueryable<Response> responses)
        {
            return responses.Select(response => BuildResponseViewModel(response));
        }

        public ResponseViewModel BuildResponseViewModel(Response response)
        {
            var sectionNames = response.Answers.Select(a => a.SectionName).Distinct();
            var responseSections = new List<ResponseSectionViewModel>();

            foreach (var sectionName in response.Answers.Select(a => a.SectionName).Distinct())
            {
                var orderedAnswers = response.Answers
                    .Where(a => a.SectionName == sectionName)
                    .OrderBy(a => a.Question.Ordinal);

                var responseSection = new ResponseSectionViewModel
                {
                    SectionName = sectionName,
                    SectionOrdinal = response.Answers.First(a => a.SectionName == sectionName).SectionOrdinal,
                    Answers = mapper.Map<List<AnswerViewModel>>(orderedAnswers)
                };
                responseSections.Add(responseSection);
            }

            var orderedResponseSections = responseSections.OrderBy(s => s.SectionOrdinal);

            var responseViewModel = new ResponseViewModel
            {
                Id = response.Id,
                CompletedByUser = mapper.Map<UserViewModel>(response.CompletedByUser),
                Sections = orderedResponseSections.ToList(),
                DateModified = response.DateModified
            };

            return responseViewModel;
        }
    }
}