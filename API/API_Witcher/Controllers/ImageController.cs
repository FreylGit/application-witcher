using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

namespace API_Witcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpGet]
        public object GetImage(string name)
        {
            string file_path = "../API_Witcher/Static/Img/"+name;
            Byte[] b = System.IO.File.ReadAllBytes(file_path);           
            return File(b, "image/jpeg");
        }
    }
}
