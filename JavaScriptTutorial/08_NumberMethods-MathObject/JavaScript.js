let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);
// val = num.toFixed(2);



/* ---- JavaScript Math Object ---- */


val = Math.PI;
console.log(val);

val = Math.SQRT2; // returns the square root of 2
console.log(val);

val = Math.SQRT1_2; // returns the square root of 1/2
console.log(val);

val = Math.LN2; // returns the natural logarithm of 2
console.log(val);

val = Math.LN10; // returns the natural logarithm of 10
console.log(val);

val = Math.LOG2E; // returns base 2 logarithm of E
console.log(val);

val = Math.LOG10E; // returns base 10 logarithm of E
console.log(val);

val = Math.round(2.4); //Math.round(x): en yakın tamsayıya yuvarlanmış olarak döndürür
console.log(val);

val = Math.round(2.7);
console.log(val);

val = Math.ceil(2.4); // Math.ceil(x): verilen ondalıklı sayıyı yukarı yuvarlar.
console.log(val);

val = Math.ceil(2.6);
console.log(val);

val = Math.floor(2.4); //Math.floor(x): verilen ondalıklı sayıyı aşağı yuvarlar.
console.log(val);

val = Math.floor(2.7);
console.log(val);

val = Math.sqrt(64);
console.log(val);

val = Math.pow(2, 4);
console.log(val);

val = Math.abs(-100); // Math.abs(x), x'in mutlak (pozitif) değerini döndürür:
console.log(val);

val = Math.min(1, 2, 3, 2, 4, 9);
console.log(val);

val = Math.max(4, 5, 6, 4, 98, 7);
console.log(val);

val = Math.floor(Math.random() * 100 + 1);

console.log(val);
console.log(typeof val);