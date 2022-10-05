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

let likeStarWars = prompt('Do I like Star Wars?').toLowerCase();

/*
likeStarWars = likeStarWars.toLowerCase();
console.log(likeStarWars);
*/

if(likeStarWars === 'yes' || likeStarWars === 'y') {
  console.log("That's right, I do like Star Wars!");
}