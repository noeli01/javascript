// ==, ===
// = assigns the value
// == checks only the value only if the value is equal
// === checks if the value equal and type are the same

//const num1 = 10;
//const num2 = "10";

//const result = num1 * num2
//console.log(result);

//const value = num1 == num2;
//const value2 = num1 === num2;
//console.log(value);
//console.log(value2);

// Logical Operators 

// || this means OR
// && this means AND
// ! this means NOT

// with OR you need only one condition to be true
// && you need both conditions to be true

//let fname = "elvis";
//let age = 34;

//if(fname !=='Ron' || age !== 24) {
    console.log('hello there user');
//}
//else {
    //console.log('your values are not matching');
//}

// Switch Statements
// dice value: 1-6\

const dice =1;
switch(dice) {
    case 1:
        console.log('you rolled 1');
    case 2:
        console.log('you rolled 2');
    case 3:
        console.log('you rolled 3');
    break
    default:
        console.log('you need to roll again');
}


//if(dice === 1) {
    //console.log('you rolled 1');
//}
//else if(dice ===2) {
    //console.log('you rolled 2');
//}
//else {
    //console.log('you need to roll again');
//}

// LOOPS
// repeatedly run a block of code while condition is true

//While Loop
// the loop will run until the conditions are met
// let amount = 10;
// while(amount > 0) {
//     console.log("I have" + amount + "dollars and I am going to the mall");
//     amount--
// }

//Do while Loop
//code block first and condition second
// runs at least one

// let money =12;

// do {
//     console.log('you have' + money + 'dollars');
//     money++
// }
// while(money <= 10);

// for loop
// let i;
// for (i = 0; i < 10; i++){
//     console.log('and number is' + i);

// }

// using variable
for(let number =11; number>= 0; number--){
    console.log('and number is' + number);
}