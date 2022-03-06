// Değişkenler

var age;
console.log(age); // undefined (Tanımsız)

var _age;
console.log(age); // undefined

age = 24;
console.log(age); // 20

var fullname = "Jim Carrey";
console.log(fullname); // Jim Carrey

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
   
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi değişken ismi olamaz.
 ** Büyük küçük harf duyarlılığı vardır.

    var firstName = 'Jim';
    var FirstName = 'Carrey';
   
    Farklı değişken isimleridir.
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.
*/