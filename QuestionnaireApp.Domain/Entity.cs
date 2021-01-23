using System.ComponentModel.DataAnnotations.Schema;

namespace QuestionnaireApp.Domain
{
    public class Entity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
    }
}