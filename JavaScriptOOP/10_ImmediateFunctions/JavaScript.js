// Immediate Functions

(function (name) {

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    var today = new Date();

    var msg = `Welcome ${name}\nToday is ${days[today.getDay()]}\nMonth is ${months[today.getMonth()]}`;


    console.log(msg);

}("Lara"));


(function (today) {

    let options = {

        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"

    };

    var date = new Date();

    console.log(today + " " + date.toLocaleTimeString("tr-tr", options));

}("Merhaba bugün"));