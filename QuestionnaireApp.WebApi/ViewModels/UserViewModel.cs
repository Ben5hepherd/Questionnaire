﻿namespace QuestionnaireApp.WebApi.ViewModels
{
    public class UserViewModel : EntityViewModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string EncryptedPassword { get; set; }
        public bool IsAdmin { get; set; }
    }
}