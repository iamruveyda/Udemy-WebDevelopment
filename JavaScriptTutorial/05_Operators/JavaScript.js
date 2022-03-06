let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

/* 1- Aritmetik Operatörler */

val = a + b;
console.log("a + b:", val);

val = a - b;
console.log("a - b:", val);

val = a * b;
console.log("a * b:", val);

val = a / b;
console.log("a / b:", val);

val = a % b;
console.log("a % b:", val);

val = d++;
console.log("d++:", val);

val = ++d;
console.log("++d:", val);

val = --d;
console.log("--d:", val);

val = d--;
console.log("d--:", val);


/*  2- Atama Operatörleri */

val = a;
val += a; // val = val + a;
val -= a; // val = val - a;
val *= a; // val = val * a;
val /= a; // val = val / a;
val %= a; // val = val % a;


// 3- Karşılaştırma Operatörleri

val = a === b;
console.log(val);

val = b === c;
console.log(val);

val = b === c; // değer kontrolü & type
console.log(val);

val = 5 === "5";
console.log(val);

val = a !== b;
console.log(val);

val = a !== b;
console.log(val);

val = a > b;
console.log(val);

val = b < a;
console.log(val);

val = a >= b;
console.log(val);

val = 5 >= 5;
console.log(val);

val = a <= b;
console.log(val);


/* 4- Mantıksal Operatörler */

// && (And)
// true  && true  => true
// true  && false => false
// false && false => false

val = (a > b) && (a > c);
val = (a > b) || (a < c);
val = !(a > b);


// || (Or)

// true  && true  => true
// true  && false => true
// false && false => false

// ! (Not)

// !true  => false
// !false => true

console.log(val);
console.log(typeof val);


/*

 const

- Bir const değişkeninin kapsamı blok kapsamıdır.
- Güncellenemez veya kapsamda yeniden ilan edilemez
- Başlatma olmadan bildirilemez.
- Başlatma olmadan bildirilemeyeceği için başlatma olmadan erişilemez.


 */