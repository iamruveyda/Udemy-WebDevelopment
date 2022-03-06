// Callback Functions

/*  başka bir işleve argüman olarak iletilen ve daha sonra bir tür rutini 
veya eylemi tamamlamak için dış işlevin içinde çağrılan bir işlevdir. */


function greeting(firstName) {
    alert(`Hello ${firstName} :)`);
}

function processUserInput(callback) {

    var firstName = prompt("Please enter your First Name"); // Prompt(): kullanıcıdan giriş yapmasını isteyen bir iletişim kutusu görüntüler.
    callback(firstName);
}

processUserInput(greeting);

console.log("------------------------------------------------");

let val;

function MultipleByTwo(a, b, c, callback) {

    let arr = [];

    if (callback && typeof callback === "function") {

        for (let i = 0; i < 3; i++) {

            arr[i] = callback(arguments[i] * 2);

        }
    }

    return arr;
}

function addOne(a) {
    return a + 1;
}

function addTwo(a) {
    return a + 2;
}

function addThere(a) {
    return a + 3;
}

// val = MultipleByTwo(5,10,20,addThere);
val = MultipleByTwo(10, 20, 30, function (a) {

        return a + 35;
    }
);
// val = addOne(10);

// for(let i=0;i<val.length;i++){
//     val[i] = addOne(val[i]);
// }

console.log(val);