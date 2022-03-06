
const person = {
    firstName: "Tommy",

    lastName: "Iron"
};

/*Object.defineProperty() statik yöntemi, doğrudan bir nesne üzerinde 
yeni bir özellik tanımlar veya bir nesne üzerindeki mevcut bir özelliği
değiştirir ve nesneyi döndürür. */

/*
get - özellik değerini almak için bir alıcı yöntemi tanımlamak için 
set - özellik değerini ayarlamak için bir ayarlayıcı yöntemi tanımlamak için


*/
Object.defineProperty(person, "fullName", {

    get function() {

        return `${this.firstName} ${this.lastName}`;

    },

    set function(value) {

        const parts = value.split(" ");
        [this.firstName, this.lastName] = parts;
    }

});

console.log(person.fullName);
console.log(person);


console.log("----------------------------------------------");


/* Ek Not*/

const object1 = {};

Object.defineProperty(object1, "property1", {
    value: 55,
    writable: false
});

object1.property1 = 80;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 55


console.log("----------------------------------------------");


/*

https://www.programiz.com/javascript/getter-setter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

*/