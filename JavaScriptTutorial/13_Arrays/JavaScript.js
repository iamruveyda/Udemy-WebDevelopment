let names = ['Elon', 'Elena', 'Angela', 'Drake'];
console.log(names);

let years = [1998, 1995, 1996, 2010];
console.log(years);

let mix = ['Nathan', 'Drake', 1983, null, undefined, ['Macera', 'Oyun']];
console.log(mix);

// get array item
console.log("0. Dizideki İsim: ", names[0]);
console.log("3. Dizideki İsim: ", names[3]);

// set array item
names[names.length] = 'steve';


/*
 push()     : Dizinin sonuna yeni öğeler ekler ve yeni uzunluğu döndürür
 unshift()  : Dizinin başına yeni öğeler ekler ve yeni uzunluğu döndürür
 
 */

// add item
years.push(2022);
console.log("push():    ", years);

years.unshift(1990);
console.log("unshift(): ", years);

/*
 pop()   : Dizinin son öğesini kaldırır ve o öğeyi döndürür
 shift() : Dizinin ilk öğesini kaldırır ve o öğeyi döndürür

 */

// remove item
years.pop();
years.shift();

/* indexOf(): Dizide bir eleman arayıp ve konumunu döndürme */

let index = names.indexOf('Angela');
console.log(' index : ' + index);


/* reverse()  : Bir dizideki öğelerin sırasını tersine çevirir  */

names.reverse();
console.log("reverse():     ", names);

/* sort(): Bir dizinin öğelerini sıralar */
years.sort();
console.log("sort():     ", years);


/* concat() : İki veya daha fazla diziyi birleştirir ve birleştirilmiş dizilerin bir kopyasını döndürür */

let val;

val = years.concat(names);
console.log(val);

/* splice()  : Bir diziye eleman ekler/kaldırır */

names.splice(0, 1);
console.log("splice():     ", names);

function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

/* find()   : Testi geçen bir dizideki ilk öğenin değerini döndürür */

val = years.find(over18);
console.log("find(): ", val);


/* filter() : Bir dizideki testi geçen her öğeyle yeni bir dizi oluşturur */
val = years.filter(over18);
console.log("filter(): ", val);


//console.log(names);
//console.log(names.length);
//console.log(typeof names);



/*

 https://www.w3schools.com/jsref/jsref_obj_array.asp


 */