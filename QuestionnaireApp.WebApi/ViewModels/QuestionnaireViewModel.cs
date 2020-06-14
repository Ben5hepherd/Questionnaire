using System.Collections.Generic;

namespace QuestionnaireApp.WebApi.ViewModels
{
    public class QuestionnaireViewModel : EntityViewModel
    {
        public string Name { get; set; }
        public string CreatedDate { get; set; }
        public UserViewModel CreatedByUser { get; set; }
        public List<SectionViewModel> Sections { get; set; }
    }
}