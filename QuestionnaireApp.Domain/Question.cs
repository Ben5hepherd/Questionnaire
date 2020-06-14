namespace QuestionnaireApp.Domain
{
    public class Question : Entity
    {
        public string Text { get; set; }
        public int Ordinal { get; set; }
        public virtual Section Section { get; set; }
        public virtual Questionnaire Questionnaire { get; set; }
        public int QuestionnaireId { get; set; }
    }
}