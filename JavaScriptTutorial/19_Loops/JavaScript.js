let i;

// for Loop



for (i = 1; i <= 10; i++) {

    if (i === 5) {

        console.log(`My favourite number:${i}`);
        continue;
    }

    if (i === 1) {

        console.log("I don't like this number: 1");
        break;
    }

    console.log(i);
}

console.log("----------------------------------------");

// while loop

for (i = 0; i < 10; i++) {

    console.log(i);
}


console.log("----------------------------------------");


i = 0;

while (i < 10) {

    console.log(i);
    i++;
}


console.log("----------------------------------------");

//do-While loop

i = 0;

do {

    console.log(i);
    i++;

} while (i < 10)



console.log("----------------------------------------");


let sonuc = 1;

for (i = 10; i > 0; i--) {

    if (i % 2 === 1) {

        sonuc *= i;

    }
}

console.log(sonuc);



console.log("----------------------------------------");

let val = "\n";


for (i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {

        val += "* ";
    }

    val += "\n";
}

console.log(val);