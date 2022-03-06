const firstName = "Sam";
const age = 24;
const isStudent = true;
const school = "university";

if (firstName === "Sam") {

    console.log("Hello Sam");
}

console.log("----------------------------------");

if (age === 24) {

    console.log("Your age is 24");
}


console.log("----------------------------------");

if (isStudent) {

    console.log("Hello Student");

} else {
    console.log("How is your Job?");
}

console.log("----------------------------------");

if (age >= 18) {

    if ((school === "university") || (school === "high school")) {
        console.log("You can get a driver's license");

    } else {
        console.log("your education is insufficient");
    }

} else {
    console.log("You can not get a driver's license");
}

console.log("----------------------------------");


if (age > 0 && age < 12) {

    console.log(`${firstName} is a child`);

} else if (age >= 13 && age <= 19) {

    console.log(`${firstName} is a teenager`);

} else {

    console.log(`${firstName} is an adult`);
}

console.log("----------------------------------");

if (typeof id !== "undefined") {

    console.log("id: " + id);

} else {

    console.log("no id");
}