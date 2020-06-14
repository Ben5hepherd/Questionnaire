using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using QuestionnaireApp.Orm;
using System;

namespace QuestionnaireApp.Tests.UnitTests
{
    public abstract class TestsBase : IDisposable
    {
        public TestDataContext context;
        private readonly SqliteConnection connection;

        protected TestsBase()
        {
            connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            var options = new DbContextOptionsBuilder<DataContext>()
                .UseSqlite(connection)
                .Options;

            context = new TestDataContext(options);
            context.Database.EnsureCreated();
        }

        public void Dispose()
        {
            connection.Close();
        }
    }
}