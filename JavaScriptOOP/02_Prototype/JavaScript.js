let Person = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {

    return 2022 - this.yearOfBirth;
};

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.lastName = "Rogers";

let peggy = new Person("Peggy", 1921, "Agent");
let steve = new Person("Steve", 1918, "Soldier");

console.log("Peggy's Age:", peggy.calculateAge());
console.log(peggy);
console.log(peggy.getName());

console.log("----------------------------------");

console.log(steve);
console.log("Steve's Age:", steve.calculateAge());
console.log(steve.getName());

console.log(peggy.hasOwnProperty("lastName"));

console.log(steve.lastName);