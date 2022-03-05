/* Single Elements
    * document.getElementById()
    * document.querySelector()

*/

let val;
let value;

val = document.getElementById('header');
console.log(val);

val = val.id;
console.log(val);

val = document.getElementById('header').id;
console.log(val);

val = document.getElementById('header');

val = val.className;
console.log(val);


val = document.getElementById('header').className;
console.log(val);

console.log("-------------------------------------------------------");

value = document.getElementById('header');
console.log(value);


value.style.fontSize = '60px';
value.style.color = '#2471A3';
value.style.fontWeight = 'bold';
value.style.display = '';

console.log(value);

document.getElementById('header').innerText = 'my ToDo App';
document.getElementById('header').innerHTML = '<b>my ToDo App</b>';
console.log(value);

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));



console.log("-------------------------------------------------------");


document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(2)').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'task item';
document.querySelector('li:nth-child(4)').textContent = 'task item';


console.log("-------------------------------------------------------");

document.querySelector('li').className = 'list-group-item list-group-item-primary';

document.querySelector('li').classList.add('active');