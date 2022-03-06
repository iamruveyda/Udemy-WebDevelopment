var a = 10;
var b = a;

console.log(a);
console.log(b);

console.log("--------------------------------------------");

let firstName = "Nathan";
let age = 35;

console.log("First Name: ", firstName, "\nAge: ", age);

console.log("--------------------------------------------");

let person = {

    firstName: "Nathan",
    age: 35
};

console.log(person);

console.log("First Name: ", person.firstName);

console.log("Age: ", person.age);

console.log("--------------------------------------------");

// add the ssn property
person.ssn = "123-45-67-89";

// change the firstName
person.firstName = "Elena Drake";

// delete the age property
delete person.age;

console.log(person);

console.log("--------------------------------------------");

let firstName02 = "Victor";
firstName02.alias = "Sullivan";

console.log(firstName02.alias); //Output: Undefined

console.log("--------------------------------------------");

let age02 = 25;
let newAge = age02;

newAge = newAge + 1;
console.log("Age:", age02, "\tAge:", newAge);

console.log("--------------------------------------------");

let person01 = {
    firstName: "Sam",
    age: 20
};

console.log("Sam age: ", person01.age);

var person02 = person01;

console.log(person02.age);

person01.age = 30;

console.log(person01.age);

console.log("--------------------------------------------");

var num = 50;

var account = {
    firstName: "Chloe",
    accountNumber: "123456789"
};

console.log("Account: ", account);


function update(b) {

    b.accountNumber = "256985";
}

update(num, account);

console.log("Update Account", account);

console.log(num);

var products = [
    { firstName: "product firstName", price: 1000 },
    { firstName: "product firstName", price: 1000 },
    { firstName: "product firstName", price: 1000 },
    { firstName: "product firstName", price: 1000 },
    { firstName: "product firstName", price: 1000 },
    { firstName: "product firstName", price: 1000 }
];

function filterProducts() {

}

filterProducts(products);