//Function Declarations

console.log("\n** Function Declarations **\n");

function sum(a, b) {

    var c = a + b;

    return c;
}

console.log(sum(10, 20));
console.log(sum(10, 30, 40, 50));
console.log(sum(10)); 

console.log("------------------------------------");

//Function Expressions

console.log("\n** Function Expressions **\n");

const ex01 = function (a, b) {

    if (typeof a === 'undefined') { a = 0; }
    if (typeof b === 'undefined') { b = 0; }

    var c = a + b;

    return c;
}


console.log(ex01(10, 20));

console.log("------------------------------------");

//ES6 Default Parameters

console.log("\n** ES6 Default Parameters **\n");

const ex02 = function (a = 0, b = 0) {

    var c = a + b;

    return c;
}


console.log(ex02(10, 20));
console.log(ex02(10, 30, 40, 50));

console.log("------------------------------------");

function sumAll() {
    var total = 0;

    for (let i = 0; i < arguments.length; i++) {

        total += arguments[i];
    }
    return total;
}

console.log(sumAll(10, 20));
console.log(sumAll(10, 20, 30, 10, 30));