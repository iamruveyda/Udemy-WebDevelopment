/* 
1 - Person1 ve Person2 boy ve kg bilgilerini alın.
2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.

Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi

3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.
*/


/* 
0 - 18,4: Zayıf
18,5 - 24,9: Normal
25,0 - 29,9: Fazla Kilolu
30,0 - 34,9: Şişman (Obez)
*/

/*

Person1 = P1
Person2 = P2

*/

let IndexP1;
let IndexP2;

const kgP1 = 60;
const kgP2 = 40;

const heightP1 = 1.70;
const heightP2 = 1.50;

IndexP2 = (kgP2) / (heightP2 * heightP2);
IndexP1 = (kgP1) / (heightP1 * heightP1);

console.log("Person 2 Index:", IndexP2.toFixed(3), "\nPerson 1 Index:", IndexP1.toFixed(3));

let P2HigherIndex = IndexP2 > IndexP1;
let P1HigherIndex = IndexP1 > IndexP2;

console.log(`Person2 kilo indeksi Person1'in kilo indeksinden daha büyük : ${P2HigherIndex}`);

console.log(`Person1 kilo indfeksi Person2'nin kilo indeksinden daha büyük : ${P1HigherIndex}`);

let P2Zayif = (IndexP2 >= 0) && (IndexP2 <= 18.4);
let P2Normal = (IndexP2 >= 18.5) && (IndexP2 <= 24.9);
let P2Kilolu = (IndexP2 >= 25) && (IndexP2 <= 29.9);
let P2Sisman = (IndexP2 >= 30) && (IndexP2 <= 34.9);

console.log(`P2 zayıf :${P2Zayif}`);
console.log(`P2'nin kilosu normal : ${P2Normal}`);
console.log(`P2 kilolu mu : ${P2Kilolu}`);
console.log(`P2 şişman mı : ${P2Sisman}`);