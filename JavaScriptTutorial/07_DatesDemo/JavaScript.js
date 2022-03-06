// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

var dt = new Date();

console.log(dt);
console.log(dt.getMonth() + 1);
console.log(dt.getDate());
console.log(dt.getFullYear());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date("03/01/2022 14:45:12");
var dtB = new Date(2022, 03, 01, 14, 45, 12);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date("01/08/1942");
var end = new Date("03/14/2018");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log(`milisecond :${milisecond}`);
console.log(`saniye : ${saniye}`);
console.log(`dakika :${dakika}`);
console.log(`saat :${saat}`);
console.log(`gun : ${gun}`);

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var randomday = new Date();
randomday.setHours(0, 0, 0, 0);
randomday.setFullYear(1971);
randomday.setDate(28);
randomday.setMonth(6);

while (randomday.getDay() !== 0) {
    randomday.setDate(randomday.getDate() + 1);
}

randomday.setDate(randomday.getDate() + 7);

console.log(randomday);

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date("10/28/1955");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1980);
// console.log(birthday.getTime());
// console.log(Date.now())


var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
var result = kurs.lastIndexOf("Javascript"); // result: 7

console.log(result);