let txt;

/*
 Alert Box

 Bilginin kullanıcıya ulaştığından emin olmak istiyorsanız, genellikle bir uyarı kutusu kullanılır. 
 Bir uyarı kutusu açıldığında, kullanıcının devam etmek için "Tamam" ı tıklaması gerekir
 
 */

alert("I am an alert box!");


console.log("-----------------------------------------------");

/*
 
 Confirm Box

Kullanıcının bir şeyi doğrulamasını veya kabul etmesini istiyorsanız, genellikle bir onay kutusu kullanılır.
Bir onay kutusu açıldığında, kullanıcının devam etmek için "Tamam" veya "İptal" düğmesine tıklaması gerekir.
Kullanıcı "Tamam"ı tıklarsa kutu true değerini döndürür. Kullanıcı "İptal"i tıklarsa kutu false döndürür.
 
 
 */

if (confirm("Press a button!")) {

    txt = "You pressed OK!";

} else {

    txt = "You pressed Cancel!";
}

console.log("-----------------------------------------------");

/*
 Prompt Box
 
 Kullanıcının bir sayfa girmeden önce bir değer girmesini istiyorsanız, genellikle bir bilgi istemi kutusu kullanılır.
Bir istem kutusu açıldığında, kullanıcının bir giriş değeri girdikten sonra devam etmek için "Tamam" veya "İptal"e tıklaması gerekir.
Kullanıcı "Tamam"ı tıklarsa kutu, giriş değerini döndürür. Kullanıcı "İptal"i tıklarsa kutu boş döner.
 
 */



let person = prompt("Please enter your name", "Harry Potter");

if (person == null || person === "") {

    text = "User cancelled the prompt.";

} else {

    text = "Hello " + person + "! How are you today?";
}


console.log("-----------------------------------------------");

let val;


val = window.scrollX;
console.log(val);

val = window.scrollY;
console.log(val);

console.log("-----------------------------------------------");

/*
 The Window Location Object
 
 Konum nesnesi, geçerli URL hakkında bilgi içerir.

-Location Object Properties-

window.location.hash        : Bir URL'nin bağlantı bölümünü (#) ayarlar veya döndürür.
window.location.host        : Bir URL'nin ana bilgisayar adını ve bağlantı noktası numarasını ayarlar veya döndürür.
window.location.hostname    : Bir URL'nin ana bilgisayar adını ayarlar veya döndürür.
window.location.href        : URL'nin tamamını ayarlar veya döndürür.
window.location.port        : Bir URL'nin bağlantı noktası numarasını ayarlar veya döndürür.
window.location.protocol    : Bir URL'nin protokolünü ayarlar veya döndürür.
window.location.search      : Bir URL'nin sorgu dizesi bölümünü ayarlar veya döndürür.


-Location Object Methods-

window.location.assign()    : Yeni bir belge yükler
window.location.reload()    : Geçerli belgeyi yeniden yükler
window.location.replace()   : Mevcut belgeyi yenisiyle değiştirir
 
 */


val = window.location.hash;
console.log(val);

val = window.location.hostname;
console.log(val);

val = window.location.href;
console.log(val);

val = window.location.port;
console.log(val);

val = window.location.protocol;
console.log(val);

val = window.location.search;
console.log(val);