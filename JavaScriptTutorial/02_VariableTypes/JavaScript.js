/* Primitive Types */

/* String*/
let firstName = "Jim";
console.log(typeof firstName); // Output: string

console.log(firstName); // Output: Jim

/* Number */
let age = 20;
console.log(typeof age); // Output: number

let money = 100.5;
console.log(typeof money); // Output: number

/* Boolean */
let isActive = false;
console.log(isActive); // Output: false

/* null */
let job = null;
console.log(job); // Output: null

/* undefined */
let car;
console.log(typeof car); // Output: undefined


/* Reference Types: Objects*/

/*  Array */

let names = ["Ali", "Veli", "Mehmet"];
console.log(names); // object

/* Object Literals */

let address = {
    city: "Karabuk",
    country: "Türkiye"
};

console.log(address); // object

/* Functions */

var calculateAge = function () {
    return 0;
};

console.log(typeof calculateAge); // Output: function

/*
 
 var
- Bir var değişkeninin kapsamı, işlevsel kapsamdır.
- Güncellenebilir ve kapsamda yeniden ilan edilebilir.
- Başlatmadan bildirilebilir.
- Varsayılan değeri “undefined/tanımsız” olduğu için başlatma yapılmadan erişilebilir.
 
 
 let
- let değişkeninin kapsamı blok kapsamıdır .
- Güncellenebilir ancak kapsam içinde yeniden ilan edilemez.
- Başlatmadan bildirilebilir.
- Bir hata döndürdüğü için başlatma olmadan erişilemez.
 
 */