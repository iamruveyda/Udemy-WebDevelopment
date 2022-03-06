//Loops in Array & Objects

let cars = ["Nissan", "Mercedes", "Tesla"];
let i;


let people = [
    { firstName: "Sam", lastName: "Drake" },
    { firstName: "Nathan", lastName: "Drake" },
    { firstName: "ELena", lastName: "Drake" }
];


console.log("----------------------------------------");

//Arrays

for (i = 0; i < cars.length; i++) {

    console.log(cars[i]);
}


console.log("----------------------------------------");

//Objects

for (i = 0; i < people.length; i++) {

    console.log(people[i].firstName);
}

console.log("----------------------------------------");


//for-in

for (i in cars) {
    if (Object.prototype.hasOwnProperty.call(cars, i)) {

        console.log(`index : ${i} value : ${cars[i]}`);
    }
}

console.log("----------------------------------------");

//Objects


for (i in people) {
    if (Object.prototype.hasOwnProperty.call(people, i)) {

        console.log(`index : ${i} value : ${people[i].firstName}`);
    }
}

console.log("----------------------------------------");

//foreach

cars.forEach(function (item) {

    console.log(item);
});


console.log("----------------------------------------");

people.forEach(function (item) {

    console.log(item.firstName);
});

console.log("----------------------------------------");

//map: returns an array


let val = people.map(function (item) {

    return item.firstName + " " + item.lastName;

});

console.log(val);

console.log("----------------------------------------");

let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function (n) {

    return n * n;

});

console.log(num);