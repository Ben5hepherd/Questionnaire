using Microsoft.EntityFrameworkCore;

namespace QuestionnaireApp.Orm
{
    public class TestDataContext : DataContext
    {
        public TestDataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
    }
}