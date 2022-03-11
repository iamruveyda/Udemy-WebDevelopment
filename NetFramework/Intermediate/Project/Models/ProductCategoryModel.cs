using System.Collections.Generic;

namespace Project.Models {
    public class ProductCategoryModel {
        public int NumberOfProduct { get; set; }
        public List<ProductModel> Products { get; set; }
    }
}