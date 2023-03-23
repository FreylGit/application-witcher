namespace API_Witcher.Core.Models.Models
{
    public class PersonPage
    {
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PersonCount { get; set; }
        public string NextPage { get; set; }
        public string PreviousPage { get; set; }
        public IEnumerable<Person> Persons { get; set;}
    }
}
