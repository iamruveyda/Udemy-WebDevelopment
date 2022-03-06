/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-50 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.

   ** puanlama yapın.
   * 
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak, can;

var tahmin, sayac = 0;

var sayi = Math.floor((Math.random() * 50) + 1);

can = Number(prompt("Kaç bilme hakkı istiyorsunuz? \nSayı(1-50 Arasında)"));

hak = can;

console.log(sayi);

while (hak > 0) {
    hak--;

    sayac++;

    tahmin = Number(prompt("Bir sayı giriniz: "));

    if (sayi === tahmin) {

        console.log(`Tebrikler! ${sayac} kereden sonra bildiniz.`);

        console.log(`puan : ${100 - (100 / can) * (sayac - 1)}`);

        break;

    } else if (sayi > tahmin) {

        console.log("Yukarı");

    } else {

        console.log("Aşağı");
    }

    if (hak === 0) {

        console.log("Şansınız bitti. Random Sayı:" + sayi);
    }
}