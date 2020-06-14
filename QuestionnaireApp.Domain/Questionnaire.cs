using System;
using System.Collections.Generic;

namespace QuestionnaireApp.Domain
{
    public class Questionnaire : Entity
    {
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual User CreatedByUser { get; set; }
        public virtual IEnumerable<Section> Sections { get; set; }
    }
}