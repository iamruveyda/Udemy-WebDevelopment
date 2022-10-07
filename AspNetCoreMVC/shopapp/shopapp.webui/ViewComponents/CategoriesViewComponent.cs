using Microsoft.AspNetCore.Mvc;
using shopapp.business.Abstract;

namespace shopapp.webui.ViewComponents
{
    public class CategoriesViewComponent : ViewComponent
    {
        private ICategoryService _categoryService;
        public CategoriesViewComponent(ICategoryService categoryService)
        {
            this._categoryService = categoryService;
        }
        
        //Invoke(): Denetimin temel alınan pencere tanıtıcısına sahip olan iş parçacığında belirtilen temsilciyi yürütür

        //IViewComponentResult: Bir ViewComponent'in sonuç türü .

        public IViewComponentResult Invoke()
        {
            if (RouteData.Values["category"] != null)
                ViewBag.SelectedCategory = RouteData?.Values["category"];

            return View(_categoryService.GetAll());
        }
    }
}

/*

Bir görünüm bileşeni:

Tam bir yanıt yerine bir yığın oluşturur.
Bir denetleyici ve görünüm arasında bulunan aynı endişeleri ayırma ve test edilebilirlik avantajlarını içerir.
Parametrelere ve iş mantığına sahip olabilir.
Genellikle bir düzen sayfasından çağrılır.

https://docs.microsoft.com/en-us/aspnet/core/mvc/views/view-components?view=aspnetcore-6.0

*/