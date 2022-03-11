using System.Web.Mvc;

namespace _00_HelloWorld.Controllers {
    public class HomeController : Controller {
        // GET: Home


        public ViewResult Index() {
            return View();
        }

        public ViewResult Contact() {
            return View();
        }

        public ViewResult About() {
            return View();
        }



        /*

       // Home Controller

               public string Index()
               {
                   return "Home Index";
               }

               public string Contact()
               {
                   return "Home Contact";
               }

               public string About()
               {
                   return "Home About";
               }

        */

    }
}