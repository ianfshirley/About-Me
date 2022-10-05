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


// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

if number = prompt('Guess a number between 1 and 10. You have 4 attempts.');
console.log(number);

// Indicates through an alert if the guess is “too high” or “too low”.
// response if too high
// response if too low
// response if correct
// response if not a number
// response if no guesses remaining



// It should give the user exactly four opportunities to get the correct answer.


// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.



let attemptsRemaining = 4;
let 


alert('Thanks for checking out my page, ' + username + '!');