using Project.Models;
using System.Linq;
using System.Web.Mvc;

namespace Project.Controllers {
    public class HomeController : Controller {

        // GET: Home
        public ActionResult Index() {

            ProductCategoryModel model = new ProductCategoryModel();

            model.NumberOfProduct = DatabaseModel.Liste.Where(i => i.IsItOnSale == true).Count();

            model.Products = DatabaseModel.Liste.Where(i => i.IsItOnSale == true).ToList();

            return View(model);
        }

        public ActionResult Details(int id) {

            var urun = DatabaseModel.Liste.Where(i => i.ProductId == id).FirstOrDefault();

            return View(urun);
        }

        [HttpGet]
        public ActionResult AddProduct() {
            return View();
        }

        [HttpPost]
        public ActionResult AddProduct(ProductModel entity) {

            DatabaseModel.AddElement(entity);

            return View("ProductList" , DatabaseModel.Liste);
        }

        public ActionResult Contact() {
            return View();
        }

        public ActionResult About() {
            return View();
        }
    }
}