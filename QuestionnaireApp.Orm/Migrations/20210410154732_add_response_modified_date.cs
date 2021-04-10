using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuestionnaireApp.Orm.Migrations
{
    public partial class add_response_modified_date : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateModified",
                table: "Response",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<int>(
                name: "ResponseId",
                table: "Answers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers",
                column: "ResponseId",
                principalTable: "Response",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "DateModified",
                table: "Response");

            migrationBuilder.AlterColumn<int>(
                name: "ResponseId",
                table: "Answers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Response_ResponseId",
                table: "Answers",
                column: "ResponseId",
                principalTable: "Response",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
