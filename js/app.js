'use strict';

console.log('hi');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console');
}

/*
&& is the 'logical and' - One false and it will not run.
|| is the 'logical or' - One True and it will run.
! is the 'logical not' - often called bang.
*/

let trueValue = true;
let falseValue = false;

if (trueValue || falseValue) {
  console.log('it evaluated to true');
}

let username = prompt('Hey, what is your name?');
console.log(username);

let pets = prompt('Do I have any pets?').toLowerCase();


if(pets === 'yes' || pets === 'y') {
  console.log("That's right, I have a dog named Ramen & a cat named Sushi");
}