// Functions

let fname = 'Elvis';

function hi(fname, lname) { 
console.log('hi' + fname + lname);
}
hi(fname);

//const wallH = 20;
// calculate 1 in to 2.54 cm

//function calc (value) {
   // console.log('the value for dimensions in cm is' + (pants * 2.54) + "cm");
    // return value * 2.54;

   // let newValue = value * 2.54;

    //return newValue;
//}

//let wallW = calc(10);
//let wallH = calc(wallH);

// another way to calculate the width value: console.log(width);
//let dimensions = [width, height];
//console.log("wall dimensions in cm is" + dimensions);

// How to declare (a) value!

function addValues(num1, num2) {
    return num1 * num2; 
}
console.log(addValues(5,4));

let firstValue = addValues(2,2);
console.log(firstValue);

let secondValue = addValues(234, 432);
console.log(secondValue);

// function expression!

let add = function (num1, num2) {
    return num1 * num2; 
}
console.log(add(5,5));

// arrow functions only as expression or callback functions
let mult = (num1, num2) => num1 * num2;
console.log(mult(30,50));

// Objects (collection of properties) key/value pairs 
// Methods (functions)
// Dot notation

let person = {
    name: "elvis",
    age: 24,
    education: false,
    married: true,
    friends: ['Ron', 'Alex'],
    greeting: function sayHi() {
        console.log("hi my name is elvis");
    }
}

// dot notation
console.log(person.name);
console.log(person.friends[0]);

// method
person.greeting();
// this makes names uppercase: Array.uppercase();

person.name = "Ron";
console.log(person);

//assigning to variable

const age = person.age;
console.log(age);

// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===,

//let  value  = 5 > 5;
//if (value) {
    //console.log('this is correct');
//}else if(){

//}
//}
//else {
    //console.log('this is not correct');
//}

let num1 = 6;
let num2 = 36;
const result = num1 >= num2;

if(num1 > num2) {
    console.log('First number is bigger than second');
}
else if(result) {
    console.log('both numbers are equal');
}
else {
    console.log('second number is bigger than first');
}

let fname = 'joe';

if (!fname) {
    console.log('you are not joe you are elvis');
}
else {
    console.log('hi joe');
}