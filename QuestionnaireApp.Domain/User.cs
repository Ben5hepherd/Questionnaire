namespace QuestionnaireApp.Domain
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string EncryptedPassword { get; set; }
    }
}