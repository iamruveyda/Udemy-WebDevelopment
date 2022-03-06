let text;

//  1
text = `Hello World!`;
console.log("1: ", text);

//  2
text = `He's often called "Johnny"`;
console.log("2: ", text);


//  3
text =
    `The slow
orange fox
jumps over
the lazy cat`;
console.log("3: ", text);


const fullName = "Elon Musk";
const city = "Los Angeles";
const yearOfBirth = 1971;

let val;

//  4
val = "my name is " + fullName +
    " I'm " + (2022 - yearOfBirth) + " years old " +
    " and I live in " + city;

console.log("4: ", val);


//  5
val = `My name is ${fullName} I'm ${(2022 - yearOfBirth >= 18) ? "over 18" : "under 18"} and I live in ${city}`;


console.log("5: ", val);