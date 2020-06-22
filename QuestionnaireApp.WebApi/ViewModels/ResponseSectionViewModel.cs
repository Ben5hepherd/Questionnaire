using System.Collections.Generic;

namespace QuestionnaireApp.WebApi.ViewModels
{
    public class ResponseSectionViewModel
    {
        public int SectionOrdinal { get; set; }
        public string SectionName { get; set; }
        public List<AnswerViewModel> Answers { get; set; }
    }
}