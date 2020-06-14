namespace QuestionnaireApp.WebApi.Requests.QuestionRequests
{
    public class AddQuestionModel
    {
        public string Text { get; set; }
        public int Ordinal { get; set; }
        public int QuestionnaireId { get; set; }
        public int SectionId { get; set; }
    }
}