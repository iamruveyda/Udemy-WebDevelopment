var products = [
    { id: 1, name: "Samsung S22", price: 18000 },
    { id: 2, name: "Samsung S21", price: 15000 },
    { id: 3, name: "Samsung S8", price: 3000 }
];

let added = false;

function addProduct(prd, callback) {

    if (added) {

        setTimeout(() => {
            products.push(prd);
            callback(null, prd);
        }, 3000);

    } else {
        callback("4500", prd);
    }
}

function getProducts() {

    setTimeout(() => {

        products.forEach(p => {
            console.log(p.name);
        });

    }, (1000));
}


addProduct({ id: 4, name: "Samsung S7Edge", price: 4500 }, function (err, data) {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(data);
    }
});