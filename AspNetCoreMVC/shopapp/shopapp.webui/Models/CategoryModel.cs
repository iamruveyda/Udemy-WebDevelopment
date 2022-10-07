using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using shopapp.entity;

namespace shopapp.webui.Models
{
    public class CategoryModel
    {
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Kategori adı zorunludur.")]
        [StringLength(40, MinimumLength = 4, ErrorMessage = "Kategori için 4-40 arasında değer giriniz.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Url zorunludur.")]
        [StringLength(40, MinimumLength = 4, ErrorMessage = "Url için 4-40 arasında değer giriniz.")]

        public string Url { get; set; }

        public List<Product> Products { get; set; }
    }
}



/*
Required: Gerekli bir alan gösterme
StringLength: Dize alanı için maksimum uzunluk tanımlama*/