using Microsoft.EntityFrameworkCore.Migrations;

namespace QuestionnaireApp.Orm.Migrations
{
    public partial class initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_Response_Users_CompletedByUserId",
                table: "Response");

            migrationBuilder.DropForeignKey(
                name: "FK_Response_Questionnaires_QuestionnaireId",
                table: "Response");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Response",
                table: "Response");

            migrationBuilder.RenameTable(
                name: "Response",
                newName: "Responses");

            migrationBuilder.RenameIndex(
                name: "IX_Response_QuestionnaireId",
                table: "Responses",
                newName: "IX_Responses_QuestionnaireId");

            migrationBuilder.RenameIndex(
                name: "IX_Response_CompletedByUserId",
                table: "Responses",
                newName: "IX_Responses_CompletedByUserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Responses",
                table: "Responses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Responses_ResponseId",
                table: "Answers",
                column: "ResponseId",
                principalTable: "Responses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Responses_Users_CompletedByUserId",
                table: "Responses",
                column: "CompletedByUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Responses_Questionnaires_QuestionnaireId",
                table: "Responses",
                column: "QuestionnaireId",
                principalTable: "Questionnaires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Responses_ResponseId",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_Responses_Users_CompletedByUserId",
                table: "Responses");

            migrationBuilder.DropForeignKey(
                name: "FK_Responses_Questionnaires_QuestionnaireId",
                table: "Responses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Responses",
                table: "Responses");

            migrationBuilder.RenameTable(
                name: "Responses",
                newName: "Response");

            migrationBuilder.RenameIndex(
                name: "IX_Responses_QuestionnaireId",
                table: "Response",
                newName: "IX_Response_QuestionnaireId");

            migrationBuilder.RenameIndex(
                name: "IX_Responses_CompletedByUserId",
                table: "Response",
                newName: "IX_Response_CompletedByUserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Response",
                table: "Response",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers",
                column: "ResponseId",
                principalTable: "Response",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Response_Users_CompletedByUserId",
                table: "Response",
                column: "CompletedByUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Response_Questionnaires_QuestionnaireId",
                table: "Response",
                column: "QuestionnaireId",
                principalTable: "Questionnaires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
