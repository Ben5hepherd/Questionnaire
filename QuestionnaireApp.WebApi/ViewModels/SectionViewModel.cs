using System.Collections.Generic;

namespace QuestionnaireApp.WebApi.ViewModels
{
    public class SectionViewModel : EntityViewModel
    {
        public string Name { get; set; }
        public int Ordinal { get; set; }
        public List<QuestionViewModel> Questions { get; set; }
    }
}