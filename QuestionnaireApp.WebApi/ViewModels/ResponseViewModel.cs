using System.Collections.Generic;

namespace QuestionnaireApp.WebApi.ViewModels
{
    public class ResponseViewModel : EntityViewModel
    {
        public UserViewModel CompletedByUser { get; set; }
        public List<AnswerViewModel> Answers { get; set; }
    }
}