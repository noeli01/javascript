// unary operator - typeof
 
let text = 'text';

console.log(typeof text);

// binary operator - assignment

let text1 = 'some text';

// ternary operator 
// condition ? (runs if true) : (runs if false)

// value ? console.log('it is true') : console.log('it is false');

let value = true;
if (value) {
    console.log('it is true');
}
else {
    console.log('it is false');
}

// Global Scope vs Local Scope
// any variable outside code block {} {function, {}, or it can be if statements} is said to be in Global Scope
// Global Scope is not commonly used because it has name-collision
// if - NOT VAR

// let CAN be re-assigned
let fname = 'elvis';
fname = 'ron';

function calc() {
    fname = 'orange'; // it will run ron because orange was assigned after the function was called
    // let or const: age = 22; // so 
    age = 22; // this variable will automatically go to global scope
    console.log(`First ${fname}`);
    function inner() {
        fname = 'Imani'; // console.log will search for the last decl variables with
        console.log(`this is  from inner function ${fname}`);
    }
    inner()
}
calc();
console.log(age); 

{
    // this is a code block
}

// JavaScript does variable look up first local scope, then global, then undefined

const globalNumber = 5;

function add(num1, num2) {
    const globalNumber = 20;
    let result = num1 + num2 + globalNumber;
    console.log(result);
    function multi() {
        const globalNumber = 2;
        let multiResult = result * globalNumber;
    }
    multi();
    return result;
}
add(2,6);
//add(5, 35);

// Callback Function, Higher Order Function, Functions are first class objects/citizens

// Functions are first class objects - stored in a varibale (expression) passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument or return another function as a result

// Callback Function - passed to another function as an argument and executed inside that function

//Regular Function
function greetMorning(name) {
    const myName = 'elvis';
    console.log(`Good Morning ${name}, my name is ${myName}`);
}
greetMorning('Hanah');

function greetAfternoon(name) {
    const myName = 'elvis';
    console.log(`Good Afternoon ${name}, my name is ${myName}`);
}
greetAfternoon('Hanah')

// Callback Function - we dont need to invoke a cb function
function morning(name) {
   return `Good Morning ${name.toUpperCase()}`
}

// higher order function - we dont need to invoke a higher orders function
function greet(name, cb) {
    cb(); //execute
    const myName = 'elvis';
    console.log(`${cb(name)}, my name is ${myName}`);
}
greet('ron', morning);

// Powerful Arrays Methods - they are powerful because they accept the cb function as an argument
// forEach, map, filter, find, reduce
// iterate over array - no for lop required
// Accepts Callback Function as an argument, calls callback against each item in array. References item in the callback parameter.
let friends = ['Hanah', 'Imani', 'Ron', 'Manny'];

// show all my friends
// for (let i=0; i < friends.length; i++) {
 //   console.log(friends[i]);
// }

let people = [
    {
        name: 'Elvis',
        age: 34,
        position: 'Developer'
    },
    {
        name: 'Imani',
        age: 12,
        position: 'Student'
    },
    {
        name: 'Alex',
        age: 1,
        position: 'Intern'
    },
]

// Callback function below
// function showPerson(item) { // dont invoke the function
//   console.log(item); // to get a specfic value like position you just do console.log(item.position);
// }

// forEach
// it does not return new array
// people.forEach(showPerson); 

// anonymous function
people.forEach(function(item) {
    console.log(item.age);
})


