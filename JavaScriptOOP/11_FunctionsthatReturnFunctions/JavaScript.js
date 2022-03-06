// Functions that Return Functions

function Question(hobby) {

    switch (hobby) {

    case "car":

            return function (name) {

            console.log(name + " Do you have a car ?");
            };

    case "book":

            return function (name) {

            console.log(name + " What is your favourite book ?");
            };

    case "software":

            return function (name, type) {

            console.log(name + " are you interested in " + type + " ?");
            };

    default:

            return function (name) {

            console.log(name + " how are you ?");
            };
    }
}


var carQuestion = Question("car");

carQuestion("Alex");

var bookQuestion = Question("book");

bookQuestion("Sue");

var softwareQuestion = Question("software");

softwareQuestion("Jacob", "nodejs");