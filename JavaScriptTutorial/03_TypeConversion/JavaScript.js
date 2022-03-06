let val;

/*
Global yöntem String(), sayıları dizelere dönüştürebilir.
Sayı yöntemi toString() aynı şeyi yapar.
*/

// number to string
val = String(10);

// bool to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3, 4]);

console.log(val);
console.log(typeof val);
console.log(val.length);

// toString()

val = (10).toString();
console.log(val);

val = (false).toString();
console.log(val);

/*
 toExponential()    :Sayı yuvarlatılmış ve üstel gösterim kullanılarak yazılmış bir dize döndürür.
 toFixed()          :Sayı yuvarlatılmış ve belirtilen sayıda ondalık basamakla yazılmış bir dize döndürür.
 toPrecision()      :Belirtilen uzunlukta yazılmış bir sayı ile bir dize döndürür
 */


val = 5.56789.toExponential();
console.log(val);

val = 5.56789.toFixed();
console.log(val);

val = 5.56789.toPrecision();
console.log(val);


/*
Number() : Bağımsız değişkeninden dönüştürülen bir sayı döndürür

*/
val = Number(true);
console.log(val);

val = Number(false);
console.log(val);

val = Number(null);
console.log(val);

val = Number("A");
console.log(val);

val = Number([1, 2, 3, 4]);
console.log(val);

/* parseInt()	: Bir dizeyi ayrıştırır ve bir tamsayı döndürür
   parseFloat() : Bir dizeyi ayrıştırır ve kayan noktalı bir sayı döndürür

*/

val = parseInt("10");
console.log(val);

val = parseInt("10.5");
console.log(val);

val = parseFloat("10.5");
console.log(val);