//String properties and methods
// same like objects

//google js string methods

let text = ' Elvis Mahmutovic';
let result = text.length;

console.log(result); // it counts white spaces

console.log(text.toLowerCase()); // method

console.log(text.charAt(0)); // 0 index based same like arrays

console.log(text.charAt(text.length - 1)); // get last value by property and method

console.log(text.indexOf('E')); // will return first index and stop. 
console.log(text.indexOf('z')); //This will show -1 because there is no 'z'

console.log(text.trim()); // takes out empty space around text

// one version
//let trimVersion = text.trim();

//console.log(trimVersion.startsWith('E'));

//second version

console.log(text.trim().toLowerCase().startsWith('elvis')); // chaining methods and properties

console.log(text.includes('Elvis')); // checks if it (Elvis in this case) is there

console.log(text.slice(0, 2)); // new string from existing (substring)

console.log(text.slice(-1)); // gives you the last value at the end (wraps arounds)

//Template Literals - ES6+ last major update
// Backticks characters
// Interpolation ${} - insert expression (value)

let fname ='John';
let age = 100;

let sentence = "Hi my name is" + fname + "" + 'and he is' + age;
//let sentence = `Hi my name is ${fname} and I am ${age}`;

// Array Properties and Methods
let anything = ['pants', 'shoes', 'hat', 'sleep', 'soccer'];

//length 
console.log(anything.length);

// by index 
console.log(anything[4]);

// last item index
console.log(anything[anything.length -1]);

// concat = creating new arrays and combines two arrays 
let something = ['suite', 'phone', 'hotel', 'house', 'cat'];

const everything = anything.concat(something);

console.log(everything);

// reverse array
console.log(everything.reverse()); 

// unshift - adds at the start of the array
everything.unshift('computer');
console.log(everything);

// shift - removes first items of the array
everything.shift(); 
console.log(everything);

// push - adds at the end of the arrays
everything.push('elvis');
console.log(everything);

// pop - removes from the end of the array
everything.pop();
console.log(everything);

// splice - mutates original array (updates it)
// first number where do you want to start (index)
//second number how many do you want to include 

let nothing = everything.splice(2,1); // starts at number 2 index then gives you one item from the array
console.log(nothing);









