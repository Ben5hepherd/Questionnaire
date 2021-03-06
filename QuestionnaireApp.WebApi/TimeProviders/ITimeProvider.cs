using System;

namespace QuestionnaireApp.WebApi.TimeProviders
{
    public interface ITimeProvider
    {
        DateTime GetDateTimeNow();
    }
}
