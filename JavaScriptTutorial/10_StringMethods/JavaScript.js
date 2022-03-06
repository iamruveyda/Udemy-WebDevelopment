
const firstName = "Jim";
const lastName = "Carrey";
let hobbies = "Yürüyüş Araştırmak Gezmek";
const age = 35;

let val;

/* string concatenation

concat(): string birleştirme yapar.

 */

val = firstName + " " + lastName;
val = "Jim";
val += "Carrey";

val = "Benim adım " + firstName + " " + lastName + " ve yaşım " + age + " Amerika Birleşik Devleti'nde yaşıyorum.";
console.log(val);

//string concat
val = firstName.concat(" ", lastName);
console.log(val);


// string uppercase - lowercase
val = val.toUpperCase();
console.log(val);

val = val.toLowerCase();
console.log(val);

// string replace
val = "  " + val.replace("Jim", "Carrey") + "     ";
console.log(val);

/*
 
 trim() : Bir dizgenin her iki tarafındaki boşlukları kaldırır:
 
 */
val = "              Jim Carrey        ";
console.log("trim() yokken:", val);
val = val.trim();
console.log("trim() Kullanılmış:", val);

/* 
 substring(), slice()'e benzerdir. Aradaki fark, substring() öğesinin negatif dizinleri kabul edememesidir.
 
 */

val = "Jim Carrey";
val = val.substring(3, 8);
console.log("substring() Kullanılmış: ", val);

/* 
 slice() :  bir dizgenin bir bölümünü çıkarır ve çıkarılan bölümü yeni bir dizgede döndürür.
 
 */

val = "Jim Carrey";
val = val.slice(6);
console.log("slice() Kullanılmış: ", val);

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

val = hobbies.split(" ");

console.log(val);
console.log(typeof val);