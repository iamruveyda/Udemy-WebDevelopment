let val;

let person = {

    firstName: "Nathan",

    lastName: "Drake",

    age: 38,

    hobbies: ["Adventure", "Game"],

    address: {
        city: "New York",
        country: "US"
    },

    getBirthYear: function () {

        return 2016 - this.age;

    }
};

val = person;

val = person.firstName;
console.log("First Name: ", val);

val = person["firstName"];
console.log("First Name: ", val);

val = person.lastName;
console.log("Last Name: ", val);

val = person.age;
console.log("Age: ", val);

val = person.hobbies;
console.log("Hobbies: ", val);

val = person.hobbies[1];
console.log("Hobbies[1]: ", val);

val = person.hobbies.length;
console.log("Hobbies Length: ", val);

val = person.address;
console.log("Address: ", val);

val = person.address.city;
console.log("Adress Just City: ", val);

val = person.address["city"];
console.log("City: ", val);

val = person.getBirthYear();
console.log("Birth Year: ", val);



let people = [
    { firstName: "Nathan", lastName: "Drake" },
    { firstName: "Samuel", lastName: "Drake" },
    { firstName: "Elena", lastName: "Drake" }
];


console.log("typeof people: ", typeof people);

val = people[2];
console.log("People[2]: ", val);

val = people[2].firstName;


console.log("print all people in the list: ");


for (let i = 0; i < people.length; i++) {

    console.log(people[i].firstName);

}