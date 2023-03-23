using API_Witcher.Core.Models.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_Witcher.Core.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options) 
        {

        }
        public DbSet<Person> Persons { get; set; }
       /* public ApplicationDbContext()
        { 
            Persons = new List<Person>() { 
                new Person {Id=1,Name="Gerald",Description="School withe volk",ImagePath="/" },
                new Person {Id=2,Name="Vesemir",Description="School withe volk",ImagePath="/" },
                new Person {Id=2,Name="Lambert",Description="School withe volk",ImagePath="/" },
                new Person {Id=2,Name="Eskel",Description="School withe volk",ImagePath="/" },
                new Person {Id=2,Name="Tciri",Description="School withe volk",ImagePath="/" },
            }.AsQueryable();
        }*/
    }
}
