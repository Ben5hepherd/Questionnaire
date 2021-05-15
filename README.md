# Questionnaire

The purpose of this web app is to give users the ability to build and complete questionnaires, it includes account creation and login functionality. I used C#, EF Core with SQL Server data storage, Angular with TypeScript and SCSS. I strived to make my code as generic and reusable as possible, conforming to clean code principles. I have some unit tests on both the front-end and back-end using Jasmine and XUnit respectively, although I am currently working on increasing the current level of coverage.

**QuestionnaireApp.CommandQuery**: Commands and queries and their associated interfaces

**QuestionnaireApp.Domain**: All domain classes

**QuestionnaireApp.Orm**: DataContext files with Entity Framework Core, database migrations

**QuestionnaireApp.Tests**: XUnit tests covering all areas of the back-end code

**QuestionnaireApp.WebApi**: Controllers, Mediatr requests and associated models, configuration setup

**questionnaire-app**: Angular project with services that call the API methods in QuestionnaireApp.WebApi
