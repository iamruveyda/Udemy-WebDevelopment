﻿var products = [
    { id: 1, name: "Samsung S22", price: 18000 },
    { id: 2, name: "Samsung S21", price: 15000 },
    { id: 3, name: "Samsung S8", price: 3000 }
];



function addProduct(prd, callback) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if (added) {
                resolve();
            } else {
                reject("Error : 500");
            }
        });
    });
}

function getProducts() {

    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, (1000));
}


addProduct({ id: 4, name: "Samsung S7Edge", price: 4500 })

    .then(getProducts)
    .catch(function (err) {
        console.log(err);
    });