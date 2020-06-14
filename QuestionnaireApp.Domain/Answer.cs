namespace QuestionnaireApp.Domain
{
    public class Answer : Entity
    {
        public string Text { get; set; }
        public virtual Question Question { get; set; }
        public virtual Response Response { get; set; }
    }
}