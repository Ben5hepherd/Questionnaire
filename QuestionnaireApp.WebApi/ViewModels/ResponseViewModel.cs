using System;
using System.Collections.Generic;

namespace QuestionnaireApp.WebApi.ViewModels
{
    public class ResponseViewModel : EntityViewModel
    {
        public UserViewModel CompletedByUser { get; set; }
        public List<ResponseSectionViewModel> Sections { get; set; }
        public DateTime DateModified { get; set; }
    }
}