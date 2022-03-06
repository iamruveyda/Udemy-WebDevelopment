function ageCal(year) {

    return 2022 - year;
}

let person1 = ageCal(2000);
let person2 = ageCal(2002);
let person3 = ageCal(2004);

console.log("Person1 age: ", person1);

console.log("Person2 age: ", person2);


console.log("Person3 age: ", person3);


function EmekligeKacYilKaldi(year, name) {

    let yas = ageCal(year);

    let emeklilik = 65 - yas;

    if (emeklilik > 0) {

        console.log(`${name} emekli olmana ${emeklilik} yıl kaldı`);

    } else {

        console.log('Zaten emekli oldunuz');
    }
}

console.log("Person1: ");
EmekligeKacYilKaldi(2022, 'P1');

console.log("Person2: ");
EmekligeKacYilKaldi(2022, 'P2');

console.log("Person3: ");
EmekligeKacYilKaldi(2022, 'P3');