using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using shopapp.business.Abstract;
using shopapp.webui.EmailServices;
using shopapp.webui.Extensions;
using shopapp.webui.Identity;
using shopapp.webui.Models;

namespace shopapp.webui.Controllers
{
    [AutoValidateAntiforgeryToken] //Tüm güvenli olmayan HTTP yöntemleri için sahteciliğe karşı belirteçlerin doğrulanmasına neden olan bir öznitelik.
    public class AccountController : Controller
    {
        /*
        UserManager:
        yönetici ayrıcalıklarına sahip olanların kullanıcı hesaplarını ve ilgili ayrıcalıkları tanımlamasını ve 
        gerektiğinde bunları değiştirmesini sağlayan bir işletim sistemi yardımcı programıdır 
        */
        private UserManager<User> _userManager;

        /*SignInManager<User>: Harici/Uygulama tanımlama bilgileri, parola doğrulama ve 2FA ile ilgilenen bir yardımcı sınıftır .*/
      
        private SignInManager<User> _signInManager;
        private IEmailSender _emailSender;
        private ICartService _cartService;
        public AccountController(ICartService cartService, UserManager<User> userManager, SignInManager<User> signInManager, IEmailSender emailSender)
        {
            _cartService = cartService;
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
        }


        /*----------------------------------------------------------------*/

        /*Login.cshtml*/

        /*IActionResult: sunucunun isteğe nasıl yanıt vermesi gerektiğini belirtir */
       
        public IActionResult Login(string ReturnUrl = null)
        {
            return View(new LoginModel()
            {
                ReturnUrl = ReturnUrl
            });
        }

        [HttpPost]
        [ValidateAntiForgeryToken] //özniteliğinin temel amacı, siteler arası istek sahteciliği saldırılarını önlemektir.
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }


            //FindByEmailAsync: belirtilen e-posta adresinin normalleştirilmiş değeriyle ilişkili kullanıcıyı alır.

            // var user = await _userManager.FindByNameAsync(model.UserName);
            var user = await _userManager.FindByEmailAsync(model.Email);


            //AddModelError: Belirtilen hata iletisini, belirtilen anahtarla ilişkili model durumu sözlüğü için hata koleksiyonuna ekler .
            if (user == null)
            {
                ModelState.AddModelError("", "Kayıtlı hesap bulunmamaktadır.");
                return View(model);
            }

            //IsEmailConfirmedAsync: Asenkron işlemin sonuçlarını içeren görev nesnesi, belirtilen e-posta adresinin user onaylanıp onaylanmadığını gösteren bir bayrak.

            if (!await _userManager.IsEmailConfirmedAsync(user))
            {
                ModelState.AddModelError("", "Lütfen E-Posta hesabınıza gelen bağlantı adresi ile üyeliğinizi onaylayınız.");
                return View(model);
            }

            //PasswordSignInAsync: Belirtilen userName ve password birleşimini zaman uyumsuz bir işlem olarak oturum açmaya çalışır .
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, true, false);

            if (result.Succeeded)
            {
                return Redirect(model.ReturnUrl ?? "~/");
            }

            ModelState.AddModelError("", "Girilen E-Posta veya parola yanlış. Tekrar deneyiniz.");
            return View(model);
        }



        /*----------------------------------------------------------------*/

        /*Register.cshtml*/

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = new User()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                UserName = model.UserName,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                // generate token
                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var url = Url.Action("ConfirmEmail", "Account", new
                {
                    userId = user.Id,
                    token = code
                });

                //url **Terminalden Kopyalayıp onayla*

                Console.WriteLine("Hesap Onaylama Bağlantı Adresi: \n");
                Console.WriteLine(url);


                // email
                // await _emailSender.SendEmailAsync(model.Email, "Hesabınızı onaylayınız.", $"Lütfen email hesabınızı onaylamak için linke <a href='https://localhost:5001{url}'>tıklayınız.</a>");
                return RedirectToAction("Login", "Account");
            }

            ModelState.AddModelError("", "Bilinmeyen hata oldu, lütfen tekrar deneyiniz.");
            return View(model);
        }


        /*----------------------------------------------------------------*/

        /*ConfirmEmail.cshtml*/

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            TempData.Put("message", new AlertMessage()
            {
                Title = "Oturum Kapatıldı.",
                Message = "Hesabınız güvenli bir şekilde kapatıldı.",
                AlertType = "warning"
            });
            return Redirect("~/");
        }


        /*----------------------------------------------------------------*/

        /*ConfirmEmail.cshtml*/

        public async Task<IActionResult> ConfirmEmail(string userId, string token)
        {
            if (userId == null || token == null)
            {
                TempData.Put("message", new AlertMessage()
                {
                    Title = "Geçersiz token.",
                    Message = "Geçersiz Token",
                    AlertType = "danger"
                });
                return View();
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var result = await _userManager.ConfirmEmailAsync(user, token);
                if (result.Succeeded)
                {
                    // cart objesini oluştur.
                    _cartService.InitializeCart(user.Id);

                    TempData.Put("message", new AlertMessage()
                    {
                        Title = "Hesabınız onaylandı.",
                        Message = "Hesabınız onaylandı.",
                        AlertType = "success"
                    });
                    return View();
                }
            }
            TempData.Put("message", new AlertMessage()
            {
                Title = "Hesabınızı onaylanmadı.",
                Message = "Hesabınızı onaylanmadı.",
                AlertType = "warning"
            });
            return View();
        }

        /*----------------------------------------------------------------*/

        /*ForgotPassword.cshtml*/

        public IActionResult ForgotPassword()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> ForgotPassword(string Email)
        {
            if (string.IsNullOrEmpty(Email))
            {
                return View();
            }

            var user = await _userManager.FindByEmailAsync(Email);

            if (user == null)
            {
                return View();
            }

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);

            var url = Url.Action("ResetPassword", "Account", new
            {
                userId = user.Id,
                token = code
            });


            //url   
            Console.WriteLine("Parola Yenileme Bağlantı Adresi: \n");
            Console.WriteLine(url);


            // email
            // await _emailSender.SendEmailAsync(Email, "Reset Password", $"Parolanızı yenilemek için linke <a href='https://localhost:5001{url}'>tıklayınız.</a>");

            return View();
        }


        /*----------------------------------------------------------------*/

        /*ResetPassword.cshtml*/

        public IActionResult ResetPassword(string userId, string token)
        {
            if (userId == null || token == null)
            {
                return RedirectToAction("Home", "Index");
            }

            var model = new ResetPasswordModel { Token = token };

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return RedirectToAction("Home", "Index");
            }

            var result = await _userManager.ResetPasswordAsync(user, model.Token, model.Password);

            if (result.Succeeded)
            {
                return RedirectToAction("Login", "Account");
            }

            return View(model);
        }

        /*----------------------------------------------------------------*/

        /*AccessDenied.cshtml*/

        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}