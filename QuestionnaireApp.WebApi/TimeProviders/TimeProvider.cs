using System;

namespace QuestionnaireApp.WebApi.TimeProviders
{
    public class TimeProvider : ITimeProvider
    {
        public DateTime GetDateTimeNow()
        {
            return DateTime.Now;
        }
    }
}
