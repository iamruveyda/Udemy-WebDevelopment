namespace Project.Models {
    public class ProductModel {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductExplan { get; set; }
        public double Price { get; set; }
        public string Picture { get; set; }
        public bool IsItOnSale { get; set; }
    }
}