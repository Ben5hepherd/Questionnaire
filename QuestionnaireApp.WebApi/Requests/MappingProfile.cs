using AutoMapper;
using QuestionnaireApp.Domain;
using QuestionnaireApp.WebApi.ViewModels;

namespace QuestionnaireApp.WebApi.Requests
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserViewModel>();
            CreateMap<Questionnaire, QuestionnaireListViewModel>()
                .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => (src.CreatedDate).ToLongDateString()));
            CreateMap<Questionnaire, QuestionnaireViewModel>();
            CreateMap<Section, SectionViewModel>();
            CreateMap<Question, QuestionViewModel>();
            CreateMap<Response, ResponseViewModel>();
            CreateMap<Answer, AnswerViewModel>();
        }
    }
}
