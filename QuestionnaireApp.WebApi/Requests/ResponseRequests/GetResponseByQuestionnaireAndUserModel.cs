namespace QuestionnaireApp.WebApi.Requests.ResponseRequests
{
    public class GetResponseByQuestionnaireAndUserModel
    {
        public int QuestionnaireId { get; set; }
        public int UserId { get; set; }
    }
}