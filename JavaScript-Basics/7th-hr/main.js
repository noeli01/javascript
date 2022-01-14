// arrays and for loops
// combine each name with last name

let fnames = ['anna', 'elvis', 'joe', 'ron']
let lname = 'Smith'

let fullName = [];

// for loop
for(let i=0; i < fnames.length; i++) {
    console.log(i);
    console.log(fnames[i]);
    const pants = `${fnames[i]} ${lname}`;

    fullName.push(pants);

}
console.log(fnames);
console.log(fullName);

//Function, return, arrays, for loop
// end of the month expenses

const gas = [20, 40, 100];
const food = [10, 45, 50];

// Can only do this function with array NOT with a string
function calcTotal(array) {
    let total = 0;
// i stands for index
// i++ means you increment it by one
    for(let i=0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);

    console.log({
        gas: gasTotal,
        food: foodTotal
    })

// Reference vs Value
// primitive is a fundamental data type that cannot be broken down into a more simpel data type
// Primitive data types (string, number, symbol, boolean, undefined, null)
// Arrays, functions, Objects = Object
// typeof

// when assigning primitive data type value to a variable any changes are made directly
// to that value, withut affecting original value

let num1 = 1;
let num2 = num1; // this is a reference

num2 = 7; // this is a value

console.log(`first number is ${num1}`);
console.log(`second number is ${num2}`);

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

let person = {fname: 'elvis'}; // this varible has an object
let person2 = person;

person2.fname ='dave'; // since we use objects, we reassign fname and person and person2 both change
console.log(`first persion is ${person.fname}`); 
console.log(`second persion is ${person2.fname}`);

// Null and Undefined  
// both represent 'no value'
// undefined - JS says it cannot find a vlue for this thing (it comes from JS)
// null is set by developers 

let number = 22 + null; // this means 22 + 0
let number2 = 22 + undefined // it will give you "Not a number (Nan)"

// Truthy and Falsy
// "", '', ``, 0, -0, Nan, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = ''; // an empty string is falsy, however if you put in const text = 'a'; it would be truthy

if(text) {
    console.log(`hey the value is truthy`);
}else {
    console.log(`hey its falsy`);
}

// Math.pow = means exponent

// Ternary Operators / Statement

const isMarried = false;
const lastname = isMarried ? "Kipping" : "Thibodeau";

// longer way to make that function

if (isMarried) {
    lastName = "Kipping";
}else {
    lastName = "Thibodeau";
}




