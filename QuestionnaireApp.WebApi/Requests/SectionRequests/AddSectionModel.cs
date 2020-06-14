namespace QuestionnaireApp.WebApi.Requests.SectionRequests
{
    public class AddSectionModel
    {
        public string Name { get; set; }
        public int Ordinal { get; set; }
        public int QuestionnaireId { get; set; }
    }
}