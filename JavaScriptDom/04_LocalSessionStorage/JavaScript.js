/* ---- LOCAL STORAGE ---- */

let val;

/*localStorage nesnesi, son kullanma tarihi olmayan verileri depolar. 
Tarayıcı kapatıldığında veriler silinmez ve sonraki oturumlar için kullanılabilir */

// set item
const firstName = localStorage.setItem('firstName', 'Lara');
const lastName = localStorage.setItem('lastName', 'Croft');
let relatingTo = ['Game', 'PS', 'Adventure'];

// get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');


/* 

localStorage.setItem(key, value)    : Save Data to Local Storage
localStorage.removeItem(key)        : Remove Data from Local Storage
localStorage.clear()                : Remove All (Clear Local Starage)



*/


// remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// clear
// localStorage.clear();

// set array to storage
localStorage.setItem('relating to', JSON.stringify(relatingTo));

val = JSON.parse(localStorage.getItem('relating to'));

console.log(val);
console.log(localStorage);



/* https://www.w3schools.com/jsref/prop_win_localstorage.asp */


/* ---- SESSION STORAGE ---- */

/* sessionStorage nesnesi, yalnızca bir oturum için verileri depolar. (Tarayıcı kapatıldığında veriler silinir). */

/*

sessionStorage.setItem("key", "value")      : Save Data to Session Storage
sessionStorage.removeItem("key")            : Remove Data from Session Storage
sessionStorage.clear()                      : Remove All (Clear session Storage)

*/




// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

//  console.log(sessionStorage);

