using API_Witcher.Core.Data.Repositories.Interfases;
using API_Witcher.Core.Models.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Witcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonRepository _personRepositry;
        private int _personCountToPage = 10;

        public PersonController(IPersonRepository personRepository)
        {
            _personRepositry = personRepository;
        }

        [HttpGet]
        public async Task<object> GetPerson(int? id, string? name, string? list, int? page)
        {
            if (id != null)
            {
                var data = await _personRepositry.GetPersonByIdAsync(id.Value);
                return data;
            }
            if (name != null)
            {
                var data = await _personRepositry.GetPersonByNameAsync(name);
                return data;
            }
            if (list != null)
            {
                var data = _personRepositry.GetAllPersons();
                return data;
            }
            if (page != null && page > 0)
            {
                var total = (int)Math.Ceiling(_personRepositry.Persons.Count() / (_personCountToPage * 1.0));
                int nextPage = 0;
                int pervPage = 0;
                if (page.Value != total)
                {
                    nextPage = page.Value + 1;
                }
                if (page.Value != 1)
                {
                    pervPage = page.Value - 1;
                }
                var data = new PersonPage()
                {
                    CurrentPage = page.Value,
                    TotalPages = total,
                    Persons = _personRepositry.Persons.Skip((page.Value - 1) * _personCountToPage).Take(_personCountToPage),
                    PersonCount = _personRepositry.Persons.Skip((page.Value - 1) * _personCountToPage).Take(_personCountToPage).Count(),
                    NextPage = Constants.ApplicationUrl + Constants.API + Constants.Persons + Constants.Page + nextPage,
                    PreviousPage = Constants.ApplicationUrl + Constants.API + Constants.Persons + Constants.Page + pervPage,
                };
                return data;
            }

            return null;
        }



    }

}
