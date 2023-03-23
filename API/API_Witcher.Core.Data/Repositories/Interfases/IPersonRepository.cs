using API_Witcher.Core.Models.Models;

namespace API_Witcher.Core.Data.Repositories.Interfases
{
    public interface IPersonRepository
    {
        public IQueryable<Person> Persons { get; }
        public Task<Person?> GetPersonByIdAsync(int id);
        public Task<Person?> GetPersonByNameAsync(string name);
        public IEnumerable<Person> GetAllPersons();
        public Task AddPersonAsync(Person person);

    }
}
