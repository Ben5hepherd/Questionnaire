using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.Domain;

namespace QuestionnaireApp.Orm
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("");
        }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Questionnaire> Questionnaires { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Response> Responses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>().ToTable("Answers");
            modelBuilder.Entity<Question>().ToTable("Questions");
            modelBuilder.Entity<Questionnaire>().ToTable("Questionnaires");
            modelBuilder.Entity<Section>().ToTable("Sections");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Response>().ToTable("Response");
        }
    }
}