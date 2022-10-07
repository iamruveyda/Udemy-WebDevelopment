using Microsoft.AspNetCore.Mvc;
using shopapp.business.Abstract;
using shopapp.webui.Models;

namespace shopapp.webui.Controllers
{
    // localhost:5001/home
    public class HomeController : Controller
    {
        private IProductService _productService;
        public HomeController(IProductService productService)
        {
            this._productService = productService;
        }


        /*----------------------------------------------------------------*/
        /*Index.cshtml*/

        public IActionResult Index()
        {
            var productViewModel = new ProductListViewModel()
            {
                Products = _productService.GetHomePageProducts()
            };

            return View(productViewModel);
        }


        /*----------------------------------------------------------------*/
        /*About.cshtml*/


        public IActionResult About()
        {
            return View();
        }


    }
}