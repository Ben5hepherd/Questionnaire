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
            optionsBuilder.UseSqlServer("Server=DESKTOP-9IURL9P\\SQLEXPRESS; Database=Questionnaire; Trusted_Connection=True;");
        }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Questionnaire> Questionnaires { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Response> Responses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>().ToTable("Answers").Property(f => f.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Question>().ToTable("Questions").Property(f => f.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Questionnaire>().ToTable("Questionnaires").Property(f => f.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Section>().ToTable("Sections").Property(f => f.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<User>().ToTable("Users").Property(f => f.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Response>().ToTable("Response").Property(f => f.Id).ValueGeneratedOnAdd();
        }
    }
}