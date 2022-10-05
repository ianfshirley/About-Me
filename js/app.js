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
//console.log(username);
alert("Hi " + username + "!");

let pets = prompt('Do I have any pets?').toLowerCase();

if (pets === 'yes' || pets === 'y') {
  //console.log("That's right, I have a dog named Ramen & a cat named Sushi");
  alert("That's right, I have a dog named Ramen & a cat named Sushi");
}

let siblings = prompt('Do I have any siblings?').toLowerCase();

if (siblings === 'yes' || siblings === 'y') {
  //console.log('Yep, I have one sister who is 2 years older than me.');
  alert('Yep, I have one sister who is 2 years older than me.');
}

let kids = prompt('Do I have any kids?').toLowerCase();

if (kids === 'no' || kids === 'n') {
  //console.log('Correct! I have 3 nephews and that's plenty!');
  alert('Correct! I have 3 nephews and that is plenty!');
}

let states = prompt('Do you think I have traveled to all 50 states?').toLowerCase();

if (states === 'no' || states === 'n') {
  //console.log('Not even close, more like 10 or 15');
  alert('Not even close, more like 10 or 15');
}

let bones = prompt('Have I ever broken a bone?').toLowerCase();

if (bones === 'yes' || bones === 'y') {
  //console.log('Yes, I have broken 7 bones unfortunately');
  alert('Yes, I have broken 7 bones unfortunately');
}

alert('Thanks for checking out my page, ' + username + '!');