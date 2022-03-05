/* Multiple Elements

    * class name
    * document.getElementsByClassName()

*/

let val;
let value;

val = document.getElementsByClassName('list-group-item');
console.log(val);

// val = document.getElementsByClassName('list-group-item')[0];
// console.log(val)

// val = document.getElementsByClassName('list-group-item')[2];
// console.log(val)

// val = val[2];

console.log('--------------------------------------------------');

// val[0].style.color='#6C3483';
// val[0].style.fontSize='15px';
// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';
// val[3].style.fontStyle='italic';
// val[3].style.fontFamily='Arial Black';

console.log('--------------------------------------------------');

// for(let i=0; i<val.length;i++){
//      console.log(val[i].style.color='red');
//      console.log(val[i].textContent='new item');
// }

console.log('--------------------------------------------------');

value = document.getElementsByTagName('li');
console.log(value);

value = document.getElementById('task-list').getElementsByTagName('a');
console.log(value);

value = document.querySelectorAll('li');
console.log(value);

value.forEach(function (item, index) {
    item.textContent = `${index} - hello`;
});

value = document.querySelectorAll('li:nth-child(even)');

value.forEach(function (item) {
    item.style.background = '#ccc';
});

console.log(value);