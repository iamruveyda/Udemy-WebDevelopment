using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using shopapp.entity;

namespace shopapp.webui.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }

        // [Display(Name="Name",Prompt="Enter product name")]
        // [Required(ErrorMessage="Name zorunlu bir alan.")]
        // [StringLength(80,MinimumLength=7,ErrorMessage="Ürün ismi 7-10 karakter aralığında olmalıdır.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Url zorunlu bir alan.")]
        public string Url { get; set; }

        // [Required(ErrorMessage="Price zorunlu bir alan.")]  
        // [Range(1,5000,ErrorMessage="Price için 1-5000 arasında değer girmelisiniz.")]
        public double? Price { get; set; }

        [Required(ErrorMessage = "Description zorunlu bir alan.")]

        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public bool IsApproved { get; set; }
        public bool IsHome { get; set; }
        public List<Category> SelectedCategories { get; set; }
    }
}


/*
Required: Gerekli bir alan gösterme
StringLength: Dize alanı için maksimum uzunluk tanımlama*/