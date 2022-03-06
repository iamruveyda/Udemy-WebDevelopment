var result = prompt("Who's there ? ");

if (result === "Cancel") {

    console.log("Cancelled");

} else if (result === "Admin") {

    var password = prompt("Enter your password : ");

    if (password === "Cancel") {

        console.log("Cancelled");

    } else if (password === "password") {

        console.log("Welcome");

    } else {

        console.log("wrong password");
    }

} else {
    console.log("I don't know you");
}