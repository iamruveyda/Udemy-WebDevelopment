using System.Web.Mvc;

namespace _00_HelloWorld.Controllers {
    public class ProductController : Controller {

        // GET: Product


        public ViewResult Index() {
            return View();
        }

        // Product/List
        public ViewResult List() {
            return View();
        }

        public ViewResult Detail() {
            return View();
        }


        /*
                // Product Controller

                public string Index()
                {
                    return "Product Index";
                }

                public string List()
                {
                    return "Product List";
                }

                public string Detail()
                {
                    return "Product Detail";
                }

        */


    }
}