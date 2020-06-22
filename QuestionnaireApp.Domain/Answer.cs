using System.ComponentModel.DataAnnotations.Schema;

namespace QuestionnaireApp.Domain
{
    public class Answer : Entity
    {
        public string Text { get; set; }
        public virtual Question Question { get; set; }
        public virtual Response Response { get; set; }
        
        [NotMapped]
        public virtual string SectionName => Question.Section.Name;
        [NotMapped]
        public virtual int SectionOrdinal => Question.Section.Ordinal;
    }
}