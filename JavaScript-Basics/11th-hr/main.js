// getElementsByClassName('className'); // gives back multiple elements
// node-list = array-like object
// we can get index, length property but not array methods

// const fruits = document.getElementsByClassName('special');
// console.log(fruits);

// fruits[0].style.color = 'orange';

//querySelector('any css'); selects single (first element) - so if you have multiple css it will select the first css
// querySelectorAll('any css'); selects all and you can use forEach

// const fruits = docuemnt.querySelector('.special');

// console.log(fruits);
// fruits.style.color ='orange';

// const lastChild = document.querySelector('li:last-child');
// lastChild.style.color="blue"

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item){
//     console.log(item);
//     item.style.color = 'yellow'
// })

//childNodes - returns all childNodes including whitesoace which is treated as text

// const fruits = document.querySelector('#fruits');
// console.log(fruits);

//children
//const allChildren = fruits.children;
// const allChildren = fruits.firstChild;
// console.log(allChildren);

//Parent Element (you can chain) - finding where something is located (div,body)

// const heading2 = document.querySelector('h2');
// console.log(heading2.parentElement); //parentElement is in the div

// const bg = heading2.parentElement;
// bg.style.backgroundColor='orange';

// previousSibling - for ex: if you have orange then the previ sibling will be apples
// nextSibling - for ex: if you have orange then the next sibling will be banana
// return whitespace - first nextSibling is going to be white space so you have to do it twice

// const first = document.querySelector('.first')
// first.style.color ='orange';

// const second = first.nextSibling.nextSibling;
// second.style.color = 'red';
// console.log(second);

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('id')
// console.log(classValue);

// const link = document.getElementById('link');

// const pants = link.nextElementSibling
// pants.setAttribute('class', 'soccer');

//Attribute = href

//className - can be overwritten by accident
//classList - to add class

let first = document.getElementById('first');
let second = document.getElementById('second');

const classValue = first.className;
console.log(classValue);

first.className ='first blahblah'

second.classList.add('bla', 'gdfg') // bla and gdfg are seperate classes
second.classList.remove('bla'); // this is how to toggle buttons

