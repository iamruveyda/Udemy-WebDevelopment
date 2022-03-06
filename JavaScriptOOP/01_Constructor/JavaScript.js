/* object literals */

// let nathan = {
//     name:'nathan',
//     yearOfBirth : 1971,
//     job :'explorer'
// }

// function Person(name,yearOfBirth,job){

//     this.name = name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;

//     this.calculateAge = function(){

//         return 2022 - this.yearOfBirth;
//     }
// }


console.log("--------------------------------------");

let Person = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function () {

        return 2022 - this.yearOfBirth;
    };
};

let nathan = new Person("nathan", 1971, "explorer");
let elena = new Person("elena", 1985, "journalist");

console.log(nathan.name);
console.log(nathan.yearOfBirth);
console.log(nathan.job);
console.log(nathan.calculateAge());

console.log("***************************");

console.log(elena.name);
console.log(elena.yearOfBirth);
console.log(elena.job);
console.log(elena.calculateAge());