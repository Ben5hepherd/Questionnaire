namespace QuestionnaireApp.WebApi.ViewModels
{
    public class AnswerViewModel : EntityViewModel
    {
        public string QuestionText { get; set; }
        public int QuestionOrdinal { get; set; }
        public string AnswerText { get; set; }
    }
}