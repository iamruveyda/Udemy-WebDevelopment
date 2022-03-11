using System.Web.Mvc;

namespace _02_BanzhowTemplate.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        public ActionResult Services() {
            return View();
        }

        public ActionResult Contact() {
            return View();
        }


        public ActionResult Faq() {
            return View();
        }

    }
}