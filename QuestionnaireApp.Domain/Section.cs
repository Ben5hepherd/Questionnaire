using System.Collections.Generic;

namespace QuestionnaireApp.Domain
{
    public class Section : Entity
    {
        public string Name { get; set; }
        public int Ordinal { get; set; }
        public virtual Questionnaire Questionnaire { get; set; }
        public virtual  IEnumerable<Question> Questions { get; set; }
    }
}