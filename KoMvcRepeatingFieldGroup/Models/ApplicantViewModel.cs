namespace KoMvcRepeatingFieldGroup.Models
{
    using System.Collections.Generic;

    public class ApplicantViewModel
    {
        public ApplicantViewModel()
        {
            this.Positions = new List<Position>() { new Position() };
        }

        public string Firstname { get; set; }

        public string Surname { get; set; }

        public List<Position> Positions { get; set; }
    }
}