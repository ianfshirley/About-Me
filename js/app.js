'use strict';


function getUserName() {
  let username = prompt('Hey, what is your name?');
  //console.log(username);
  alert("Hi " + username + "!");
  return username;
}
getUserName();

// let username = getUserName();

// function getUserString() {
//   let username = prompt('Hey, what is your name?');
//   //console.log(username);
//   return "Hi " + username + "!";
// }

// function getUserWithArgument(question) {
//   let username = prompt(question);
//   //console.log(username);
//   alert("Hi " + username + "!");
// }

  let pets = prompt('Do I have any pets?').toLowerCase();

  if (pets === 'yes' || pets === 'y') {
    //console.log("That's right, I have a dog named Ramen & a cat named Sushi");
    alert('That\'s right, I have a dog named Ramen & a cat named Sushi');
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

let answer = 6;
let tries = 4;
let correct = false;
while(!correct && tries >= 1){
  let guess = parseInt(prompt('Guess my favorite number. It is between 1 and 10, and you have 4 guesses.'));
  if(guess === answer){
    alert(`Correct! The answer is    
    ${answer}!`)
    correct = true;
  }
  else if(tries === 1){
    alert(`You've used all your gueses, here is the correct answer:    
    ${answer}`)
    break;
  }
  else{
    tries--;
    console.log('tries', tries);
    if(guess > answer){
      alert('number too high')
    }else if(guess < answer){
      alert('number too low')
    }
  }
}


let answers = ['basketball', 'snowboarding', 'ultimate frisbee'];
let correctAnswer = false;

for(let i = 6; i >= 0; i--){
  if(i === 0){
    alert(`Nope! Sorry, the correct options were: ${answers}`);
    break;
  }else{
    let guess = prompt('Guess what my favorite sport to play is');
    for(let j = 0; j < answers.length; j++){
      if(guess === answers[j]){
        correctAnswer = true;
      }
    }
    if(correctAnswer === true){
      alert('congrats!')
      break;
    }
  }
  
}




alert(`Thanks for checking out my page, ${username}!`);