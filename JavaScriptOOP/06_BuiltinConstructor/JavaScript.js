// String

var str1 = "steve";
var str2 = new String("steve");

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if (str2 === "steve") {

    console.log("yes");
} else {
    console.log("no");
}


// ReSharper disable once NativeTypePrototypeExtending
String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
}


console.log("steve".repeat(4));

// Number
var num1 = 10;
var num2 = new Number(10);

// Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// Object
var obj1 = {

    name: "steve"
}

var obj2 = new Object({

    name: "steve"
});


// Array
var arr1 = ["person01", "person02", "person03", "person04"];

var arr2 = new Array("person01", "person02", "person03", "person04");

// ReSharper disable once NativeTypePrototypeExtending
Array.prototype.remove = Array.prototype.remove || function (member) {

    const index = this.indexOf(member);

    if (index > -1) {

        this.splice(index, 1);

    }

    return this;
}

console.log(arr1.remove("steve"));