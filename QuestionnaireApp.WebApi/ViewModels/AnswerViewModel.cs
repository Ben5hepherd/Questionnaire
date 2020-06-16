namespace QuestionnaireApp.WebApi.ViewModels
{
    public class AnswerViewModel : EntityViewModel
    {
        public string Text { get; set; }
        public QuestionViewModel Question { get; set; }
    }
}