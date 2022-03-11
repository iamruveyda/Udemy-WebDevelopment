using Project.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Project.Controllers {
    public class CategoryController : Controller {
        //GET: CategoryModel


        public ActionResult Index() {
            return View();
        }


        [ChildActionOnly]
        public PartialViewResult CategoryModel() {
            List<CategoryModel> categories = new List<CategoryModel>()
            {
                new CategoryModel() { Id = 1,CategoryName = "Mobile Phone" },
                new CategoryModel() { Id = 1,CategoryName = "Tablet" },
                new CategoryModel() { Id = 1,CategoryName = "Laptop" }
            };
            return PartialView("CategoryMenu" , categories);
        }
    }

}