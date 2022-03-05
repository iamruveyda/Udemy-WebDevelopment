// Traversing the Dom

let val;

let list = document.querySelector('.list-group');

val = list;
console.log(val);

val = list.childNodes;
console.log(val);

val = list.childNodes[0];
console.log(val);

val = list.childNodes[0].nodeName;
console.log(val);

val = list.childNodes[0].nodeType; // text 
console.log(val);

val = list.childNodes[1].nodeType; // element
console.log(val);

console.log('-----------------------------------------------');

val = list.children;
console.log(val);

val = list.children[0];
console.log(val);

val = list.children[2];
console.log(val);

val = list.children[2].textContent = 'new item';
console.log(val);

val = list.children[3].children;
console.log(val);


console.log('-----------------------------------------------');


val = list.firstChild;
console.log(val);

val = list.firstElementChild;
console.log(val);

val = list.lastChild;
console.log(val);

val = list.lastElementChild;
console.log(val);

val = list.childElementCount;
console.log(val);

console.log('-----------------------------------------------');


val = list.parentNode;
console.log(val);

val = list.parentElement;
console.log(val);

val = list.parentElement.parentElement;
console.log(val);

console.log('-----------------------------------------------');

val = list.children[0].nextSibling;
console.log(val);

val = list.children[0].nextElementSibling;
console.log(val);

val = list.children[1].previousSibling;
console.log(val);

val = list.children[1].previousElementSibling;
console.log(val);

console.log('-----------------------------------------------');

for (let i = 0; i < list.childNodes.length; i++) {

    if (list.childNodes[i].nodeType === 1) {

        console.log(list.childNodes[i]);
    }

}