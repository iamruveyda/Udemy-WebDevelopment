using System.Collections.Generic;

namespace Project.Models {
    /* Sanal DatabaseModel.
    Uygulama arkasında fiziksel bir dosyada bilgiler saklanmıyor.
    Bilgiler bellekte saklanır.Uygulama çalıştığından sonlanana kadar bu bilgilere ulaşabiliriz. */
    public static class DatabaseModel {
        private static List<ProductModel> _liste;

        static DatabaseModel() {
            _liste = new List<ProductModel>()
            {
                new ProductModel() { ProductId = 1 , ProductName = "Samsung S7Edge" , ProductExplan = "" , Price = 4500 , IsItOnSale = true , Picture = "01.png" },
                new ProductModel() { ProductId = 2 , ProductName = "Samsung Galaxy S8+ Plus" , ProductExplan = "" , Price = 7500 , IsItOnSale = true , Picture = "02.png" },
                new ProductModel() { ProductId = 3 , ProductName = "Samsung Galaxy S10" , ProductExplan = "" , Price = 10000 , IsItOnSale = true , Picture = "03.png" },
                new ProductModel() { ProductId = 4 , ProductName = "Samsung Galaxy Note 10" , ProductExplan = "" , Price = 12000 , IsItOnSale = true , Picture = "04.png" },
                new ProductModel() { ProductId = 5 , ProductName = "Samsung Galaxy S20 FE" , ProductExplan = "" , Price = 8000 , IsItOnSale = true , Picture = "05.png" },
                new ProductModel() { ProductId = 6 , ProductName = "Samsung Galaxy S21 Plus 5G" , ProductExplan = "" , Price = 12000 , IsItOnSale = true , Picture = "06.png" },
                new ProductModel() { ProductId = 7 , ProductName = "Samsung Galaxy S22 Ultra " , ProductExplan = ""  , Price = 25000 , IsItOnSale = false , Picture = "07.png" },
                new ProductModel() { ProductId = 8 , ProductName = "Samsung Galaxy S22+" , ProductExplan = ""  , Price = 20000 , IsItOnSale = true , Picture = "08.png" },
                new ProductModel() { ProductId = 9 , ProductName = "Samsung Galaxy S22" , ProductExplan = ""  , Price = 15000 , IsItOnSale = false , Picture = "09.png" }
             };
        }

        // DatabaseModel.Liste
        public static List<ProductModel> Liste {
            get { return _liste; }
        }

        public static void AddElement(ProductModel entity) {
            _liste.Add(entity);
        }

        //ProductModel entity= DatabaseModel.ProductDetail(5)
        public static ProductModel ProductDetail(int product_id) {
            ProductModel entity = null;

            foreach (var prod in _liste) {
                if (prod.ProductId == product_id) {
                    entity = prod;
                }
            }
            return entity;
        }

    }
}

