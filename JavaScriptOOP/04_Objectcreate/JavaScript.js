//Object.create

let personProto = {
    calculateAge: function () {
        return 2018 - this.yearOfBirth;
    }
}

let person1 = Object.create(personProto);

person1.name = "Sema";
person1.yearOfBirth = 2010;
person1.job = "student";

let person2 = Object.create(personProto, {
    name: { value: "Seda" },
    yearOfBirth: { value: 1989 },
    job: { value: "teacher" }
});

console.log(person2);
console.log(person2.calculateAge());

console.log(person1);
console.log(person1.calculateAge());