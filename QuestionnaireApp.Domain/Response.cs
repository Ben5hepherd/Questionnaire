using System.Collections.Generic;

namespace QuestionnaireApp.Domain
{
    public class Response : Entity
    {
        public virtual User CompletedByUser { get; set; }
        public virtual Questionnaire Questionnaire { get; set; }
        public virtual IEnumerable<Answer> Answers { get; set; }
    }
}