using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using shopapp.business.Abstract;
using shopapp.entity;
using shopapp.webui.Extensions;
using shopapp.webui.Identity;
using shopapp.webui.Models;

namespace shopapp.webui.Controllers
{
    [Authorize(Roles = "admin")] // Belirli kullanıcılara veya belirli rollerdeki kullanıcılara erişimi sınırlandırmak
    public class AdminController : Controller
    {
        private IProductService _productService;
        private ICategoryService _categoryService;

        /* RoleManager<IdentityRole: Kalıcılık deposundaki rolleri yönetmek için API'ler sağlar.*/

        /*UserManager sınıfı, örneğin yeni kullanıcıları kaydetme, kimlik bilgilerini doğrulama ve kullanıcı bilgilerini yükleme gibi kullanıcıları yönetmek için kullanılır */


        /*IdentityRole, projede tanımlanan IdentityUsers'ın kullanıcı rolleri (kullanım etki alanları olan) hakkında bilgi içeren ASP.NET Core MVC sınıfıdır.*/
        private RoleManager<IdentityRole> _roleManager;
        private UserManager<User> _userManager;

        public AdminController(
            IProductService productService,
            ICategoryService categoryService,
            RoleManager<IdentityRole> roleManager,
            UserManager<User> userManager
        )
        {
            _productService = productService;
            _categoryService = categoryService;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        /*----------------------------------------------------------------*/


        /*UserEdit.cshtml*/

        public async Task<IActionResult> UserEdit(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                var selectedRoles = await _userManager.GetRolesAsync(user);
                var roles = _roleManager.Roles.Select(i => i.Name);

                ViewBag.Roles = roles;
                return View(
                    new UserDetailsModel()
                    {
                        UserId = user.Id,
                        UserName = user.UserName,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email,
                        EmailConfirmed = user.EmailConfirmed,
                        SelectedRoles = selectedRoles
                    }
                );
            }
            return Redirect("~/admin/user/list");
        }

        [HttpPost]
        public async Task<IActionResult> UserEdit(UserDetailsModel model, string[] selectedRoles)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.UserId);
                if (user != null)
                {
                    user.FirstName = model.FirstName;
                    user.LastName = model.LastName;
                    user.UserName = model.UserName;
                    user.Email = model.Email;
                    user.EmailConfirmed = model.EmailConfirmed;

                    var result = await _userManager.UpdateAsync(user);

                    if (result.Succeeded)
                    {
                        var userRoles = await _userManager.GetRolesAsync(user);
                        selectedRoles = selectedRoles ?? new string[] {  };
                        await _userManager.AddToRolesAsync(
                            user,
                            selectedRoles.Except(userRoles).ToArray<string>()
                        );
                        await _userManager.RemoveFromRolesAsync(
                            user,
                            userRoles.Except(selectedRoles).ToArray<string>()
                        );

                        return Redirect("/admin/user/list");
                    }
                }
                return Redirect("/admin/user/list");
            }

            return View(model);
        }

        /*----------------------------------------------------------------*/

        /*UserList.cshtml*/


        public IActionResult UserList()
        {
            return View(_userManager.Users);
        }

        /*----------------------------------------------------------------*/

        /*RoleEdit.cshtml*/


        public async Task<IActionResult> RoleEdit(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);

            var members = new List<User>();
            var nonmembers = new List<User>();

            foreach (var user in _userManager.Users)
            {
                var list = await _userManager.IsInRoleAsync(user, role.Name) ? members : nonmembers;
                list.Add(user);
            }
            var model = new RoleDetails()
            {
                Role = role,
                Members = members,
                NonMembers = nonmembers
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> RoleEdit(RoleEditModel model)
        {
            if (ModelState.IsValid)
            {
                foreach (var userId in model.IdsToAdd ?? new string[] {  })
                {
                    var user = await _userManager.FindByIdAsync(userId);
                    if (user != null)
                    {
                        var result = await _userManager.AddToRoleAsync(user, model.RoleName);
                        if (!result.Succeeded)
                        {
                            foreach (var error in result.Errors)
                            {
                                ModelState.AddModelError("", error.Description);
                            }
                        }
                    }
                }

                foreach (var userId in model.IdsToDelete ?? new string[] {  })
                {
                    var user = await _userManager.FindByIdAsync(userId);
                    if (user != null)
                    {
                        var result = await _userManager.RemoveFromRoleAsync(user, model.RoleName);
                        if (!result.Succeeded)
                        {
                            foreach (var error in result.Errors)
                            {
                                ModelState.AddModelError("", error.Description);
                            }
                        }
                    }
                }
            }
            return Redirect("/admin/role/" + model.RoleId);
        }

        /*----------------------------------------------------------------*/

        /*RoleList.cshtml*/

        public IActionResult RoleList()
        {
            return View(_roleManager.Roles);
        }

        /*----------------------------------------------------------------*/

        /*RoleCreate.cshtml*/


        public IActionResult RoleCreate()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> RoleCreate(RoleModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _roleManager.CreateAsync(new IdentityRole(model.Name));
                if (result.Succeeded)
                {
                    return RedirectToAction("RoleList");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }
            return View(model);
        }

        //RedirectToAction: uygulamada belirli bir eyleme/denetleyiciye yönlendirme URL'si oluşturur.

        /*----------------------------------------------------------------*/

        /*ProductList.cshtml*/


        public IActionResult ProductList()
        {
            return View(new ProductListViewModel() { Products = _productService.GetAll() });
        }

        /*----------------------------------------------------------------*/

        /*CategoryList.cshtml*/

        public IActionResult CategoryList()
        {
            return View(new CategoryListViewModel() { Categories = _categoryService.GetAll() });
        }

        /*----------------------------------------------------------------*/

        /*ProductCreate.cshtml*/

        public IActionResult ProductCreate()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ProductCreate(ProductModel model)
        {
            if (ModelState.IsValid)
            {
                var entity = new Product()
                {
                    Name = model.Name,
                    Url = model.Url,
                    Price = model.Price,
                    Description = model.Description,
                    ImageUrl = model.ImageUrl
                };

                if (_productService.Create(entity))
                {
                    TempData.Put(
                        "message",
                        new AlertMessage()
                        {
                            Title = "KAYIT",
                            Message = "Kayıt eklendi.",
                            AlertType = "success"
                        }
                    );
                    return RedirectToAction("ProductList");
                }
                TempData.Put(
                    "message",
                    new AlertMessage()
                    {
                        Title = "hata",
                        Message = _productService.ErrorMessage,
                        AlertType = "danger"
                    }
                );

                return View(model);
            }
            return View(model);
        }

        /*----------------------------------------------------------------*/

        /*CategoryCreate.cshtml*/


        public IActionResult CategoryCreate()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CategoryCreate(CategoryModel model)
        {
            if (ModelState.IsValid)
            {
                var entity = new Category() { Name = model.Name, Url = model.Url };

                _categoryService.Create(entity);

                TempData.Put(
                    "message",
                    new AlertMessage()
                    {
                        Title = "KAYIT",
                        Message = $"{entity.Name} isimli kategori eklendi.",
                        AlertType = "success"
                    }
                );

                return RedirectToAction("CategoryList");
            }
            return View(model);
        }

        /*----------------------------------------------------------------*/

        /*ProductEdit.cshtml*/


        public IActionResult ProductEdit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var entity = _productService.GetByIdWithCategories((int)id);

            if (entity == null)
            {
                return NotFound();
            }

            var model = new ProductModel()
            {
                ProductId = entity.ProductId,
                Name = entity.Name,
                Url = entity.Url,
                Price = entity.Price,
                ImageUrl = entity.ImageUrl,
                Description = entity.Description,
                IsApproved = entity.IsApproved,
                IsHome = entity.IsHome,
                SelectedCategories = entity.ProductCategories.Select(i => i.Category).ToList()
            };

            ViewBag.Categories = _categoryService.GetAll();

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> ProductEdit(
            ProductModel model,
            int[] categoryIds,
            IFormFile file
        )
        {
            if (ModelState.IsValid)
            {
                var entity = _productService.GetById(model.ProductId);
                if (entity == null)
                {
                    return NotFound();
                }
                entity.Name = model.Name;
                entity.Price = model.Price;
                entity.Url = model.Url;
                entity.Description = model.Description;
                entity.IsHome = model.IsHome;
                entity.IsApproved = model.IsApproved;

                if (file != null)
                {
                    var extention = Path.GetExtension(file.FileName);
                    var randomName = string.Format($"{Guid.NewGuid()}{extention}");
                    entity.ImageUrl = randomName;
                    var path = Path.Combine(
                        Directory.GetCurrentDirectory(),
                        "wwwroot\\img",
                        randomName
                    );

                    //FileStream: Hem eşzamanlı hem de eşzamansız okuma ve yazma işlemlerini destekler
                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                }

                if (_productService.Update(entity, categoryIds))
                {
                    TempData.Put(
                        "message",
                        new AlertMessage()
                        {
                            Title = "KAYIT",
                            Message = "Kayıt Güncellendi",
                            AlertType = "success"
                        }
                    );
                    return RedirectToAction("ProductList");
                }
                TempData.Put(
                    "message",
                    new AlertMessage()
                    {
                        Title = "HATA",
                        Message = _productService.ErrorMessage,
                        AlertType = "danger"
                    }
                );
            }
            ViewBag.Categories = _categoryService.GetAll();
            return View(model);
        }

        /*----------------------------------------------------------------*/

        /*CategoryEdit.cshtml*/


        public IActionResult CategoryEdit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var entity = _categoryService.GetByIdWithProducts((int)id);

            if (entity == null)
            {
                return NotFound();
            }

            var model = new CategoryModel()
            {
                CategoryId = entity.CategoryId,
                Name = entity.Name,
                Url = entity.Url,
                Products = entity.ProductCategories.Select(p => p.Product).ToList()
            };
            return View(model);
        }

        [HttpPost]
        public IActionResult CategoryEdit(CategoryModel model)
        {
            if (ModelState.IsValid)
            {
                var entity = _categoryService.GetById(model.CategoryId);
                if (entity == null)
                {
                    return NotFound();
                }
                entity.Name = model.Name;
                entity.Url = model.Url;

                _categoryService.Update(entity);

                var msg = new AlertMessage()
                {
                    Message = $"{entity.Name} isimli category güncellendi.",
                    AlertType = "success"
                };

                /*JsonConvert.SerializeObject
                  Belirtilen nesneyi bir tür, biçimlendirme ve JsonSerializerSettings kullanarak bir JSON dizesine serileştirir .*/

                TempData["message"] = JsonConvert.SerializeObject(msg);

                return RedirectToAction("CategoryList");
            }
            return View(model);
        }

        /*----------------------------------------------------------------*/


        /*ProductList Delete Button*/

        public IActionResult DeleteProduct(int productId)
        {
            var entity = _productService.GetById(productId);

            if (entity != null)
            {
                _productService.Delete(entity);
            }

            var msg = new AlertMessage()
            {
                Message = $"{entity.Name} isimli ürün silindi.",
                AlertType = "danger"
            };

            TempData["message"] = JsonConvert.SerializeObject(msg);

            return RedirectToAction("ProductList");
        }

        /*----------------------------------------------------------------*/

        /*CategoryList Delete Button*/


        public IActionResult DeleteCategory(int categoryId)
        {
            var entity = _categoryService.GetById(categoryId);

            if (entity != null)
            {
                _categoryService.Delete(entity);
            }

            var msg = new AlertMessage()
            {
                Message = $"{entity.Name} isimli kategori silindi.",
                AlertType = "danger"
            };

            TempData["message"] = JsonConvert.SerializeObject(msg);

            return RedirectToAction("CategoryList");
        }

        /*----------------------------------------------------------------*/

        /*UserList Delete Button*/


        // public IActionResult DeleteUser(string userId)
        // {
        //     var entity = _userManager.FindByIdAsync(userId);

        //     if (entity != null)
        //     {
        //         _userManager.DeleteAsync(entity);
        //     }

        //     var msg = new AlertMessage()
        //     {
        //         Message = $"{entity.Name} isimli kullanıcı silindi.",
        //         AlertType = "danger"
        //     };

        //     TempData["message"] = JsonConvert.SerializeObject(msg);

        //     return RedirectToAction("UserList");
        // }

        /*----------------------------------------------------------------*/


        // [HttpPost]
        // public async Task<IActionResult> DeleteUser(UserDetailsModel model, string userId)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         var user = await _userManager.FindByIdAsync(userId);

        //         if (user != null)
        //         {
        //             ViewBag.Message = $"User with Id= {userId} cannot be found";

        //             return View("NotFound");
        //         }

        //         var result = await _userManager.DeleteAsync(user);

        //         if (result.Succeeded)
        //         {
        //             return RedirectToAction("UserList");
        //         }

        //         return View("UserList");
        //     }
        //     return View(model);
        // }

           /*----------------------------------------------------------------*/


        [HttpPost]
        public IActionResult DeleteFromCategory(int productId, int categoryId)
        {
            _categoryService.DeleteFromCategory(productId, categoryId);
            return Redirect("/admin/categories/" + categoryId);
        }
    }
}
