// Call,Apply & Bind


var welcome = function (a, b) {

    console.log(`Welcome ${this.name}.Are you interested in ${a} and ${b}`);
};

var julie = { name: "Julie" };
var charlie = { name: "Charlie" };


/* 
-- call() --

Bir argüman (parametre) olarak sahip nesneli bir yöntemi çağırmak (çağırmak) için kullanılabilir. 
call() ile bir nesne, başka bir nesneye ait bir yöntemi kullanabilir
call() yöntemi, bağımsız değişkenleri ayrı ayrı alır.

https://www.w3schools.com/js/js_function_call.asp

*/

welcome.call(julie, "asp.net", "angular");
welcome.call(charlie, "asp.net", "angular");


console.log("---------------------------------------------");

/* 
-- apply() --

Apply() yöntemi, call() yöntemine benzerdir.
Apply() yöntemi, argümanları bir dizi olarak alır.

https://www.javascripttutorial.net/javascript-apply-method/

*/


welcome.apply(julie, ["asp.net", "angular"]);

welcome.apply(charlie, ["asp.net", "angular"]);


console.log("---------------------------------------------");

/*
-- bind() --
Çağrıldığında bu anahtar sözcüğünü sağlanan değere ayarlayan ve yeni işlev çağrıldığında 
sağlanan herhangi bir bağımsız değişkenden önce gelen belirli bir argüman 
dizisiyle yeni bir işlev oluşturur.

*/


var welcomeJulie = welcome.bind(julie);
welcomeJulie("asp.net", "angular");

var welcomeCharlie = welcome.bind(charlie);
welcomeCharlie("asp.net", "angular");