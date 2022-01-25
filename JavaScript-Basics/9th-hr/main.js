// forEach, map, filter, find, reduce

// forEach: iterate over array - no for lop required. Accepts Callback Function as an argument, calls callback against each item in array. References item in the callback parameter.

// let people = [
//     {
//         name: 'Elvis',
//         age: 34,
//         position: 'Developer'
//     },
//     {
//         name: 'Imani',
//         age: 12,
//         position: 'Student'
//     },
//     {
//         name: 'Alex',
//         age: 1,
//         position: 'Intern'
//     },
// ]

// people.forEach(showPerson); // dont invoke function

// people.forEach(function(item){
//     console.log(item.name);
// });

// map (operator) - most popular and powerful
// does return a new array
// doesn't change the size of the original
// uses values from original array when making a new one

const products = [
    { 
       id: 1, product: 'shoes', make: 'nike', price: 22.95
    },
    { 
       id: 2, product: 'pants', make: 'adidas', price: 44.95
    },
    { 
       id: 3, product: 'socks', make: 'puma', price: 3.99
    },
    { 
        id: 4, product: 'socks', make: 'adidas', price: 5.99
     },
];

// const singleProduct = products.map(function(item){
//     return item.make;
// });
// console.log(singleProduct);

// const newProducts = products.map((p) =>{
//     return {
//         productMake: p.make,
//         productPrice: p.price + 1.00
//     }
// });
// console.log(newProducts);

// const makes = products.map((hs) => {
//     return `<div>Make: ${hs.make} </div>
//     <div>Price: ${hs.price}</div> `;
// });
// console.log(makes);

// document.body.innerHTML = makes.join (''); //shows java on page and makes.join allows the comas to go away

// filter method
// does return a new array
// can manipulate the size of new array
// returns based on conditions

// const cheapShoes = products.filter(function(shoes){
//     return shoes.price <= 20;
// });

// console.log(cheapShoes);

// const adidas = products.filter((a) =>{
//     return a.make === 'adidas';
// });
// console.log(adidas);

// find
// returns object
//returns first match, if no match it is undefined 
// great for getting unique value

const productID = products.find(function(p){
    return p.id === 2; // functions finds the first product that has a id of 2 then stops
})
console.log(productID.price);

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// It takes two parameters. The 1st parameter ('acc' - accumlator) total of all calculations
// The 2nd parameter ('curr' - current) current iteration

// Parameters are PLACEHOLDERS!!!

const cost = products.reduce(function(acc, currItem){
    console.log(`Total: ${acc}`);
    console.log(`Cost Current Item ${currItem.price}`);
    acc += currItem.price;
    return acc;
}, 0);

console.log(`Cost of everything is ${cost}`);

// Math Object 
// Standrad built-in objects 

// Rounding Up
const num1 = 4.56789;
const result = Math.ceil(num1) // ceil rounds up the number

console.log(result);

// Rounding Down
const num2 = 4.56789;
const result2 = Math.floor(num2);
console.log(result2); 

// Sqaure root
const num3 = 16;
const result3 = Math.sqrt(num3);
console.log(result3);

// PI
const result4 = Math.PI;
console.log(result4);

// Min and Max work the same way
const res5 = Math.min(3,4,5,6);
console.log(res5);

// Random number (Ex: up to 10)
const res6 = Math.ceil(Math.random() * 10);
console.log(res6);

// Date Global Object
const months = [ 
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
]
const days = [ 
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const date = new Date();
const month = date.getMonth();
let day = date.getDay();

console.log(months[month]);
console.log(days[day]);

console.log(date.getFullYear());
console.log(date.getDate());

const webDate = `Hello people, welcome. Today is ${days[day]}, ${months[month]} ${date.getFullYear()}`;
document.body.innerHTML = webDate;

//console.log(month);
//console.log(day);


