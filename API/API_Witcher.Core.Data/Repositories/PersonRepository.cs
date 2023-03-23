using API_Witcher.Core.Data.Repositories.Interfases;
using API_Witcher.Core.Models.Models;
using Microsoft.EntityFrameworkCore;

namespace API_Witcher.Core.Data.Repositories
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ApplicationDbContext _context;
        public PersonRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IQueryable<Person> Persons => _context.Persons;

        public async Task AddPersonAsync(Person person)
        {
            _context.Persons.Add(person);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<Person> GetAllPersons()
        {
            return _context.Persons;
        }

        public async Task<Person?> GetPersonByIdAsync(int id)
        {
            var person = await _context.Persons.FirstOrDefaultAsync(x => x.Id == id);
            return person;
        }

        public async Task<Person?> GetPersonByNameAsync(string name)
        {
            // TODO: Добавить поиск по подстроке и возможность вернуть несколько вариантов
            var person = await _context.Persons.FirstOrDefaultAsync(x => x.Name.Equals(name));
            return person;
        }
    }
}
