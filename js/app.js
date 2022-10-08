'use strict';

let username = prompt('Hey, what is your name?');
alert("Hi " + username + "!");

var count = 0;

function twoPets() {
  let pets = prompt('Do I have any pets?').toLowerCase();
  if (pets === 'yes' || pets === 'y') {
    alert('That\'s right, I have a dog named Ramen & a cat named Sushi');
    count++;
  }
}
twoPets();

function oneSister() {
  let siblings = prompt('Do I have any siblings?').toLowerCase();

  if (siblings === 'yes' || siblings === 'y') {
    alert('Yep, I have one sister who is 2 years older than me.');
    count++;
  }
}
oneSister();

function noKids() {
  let kids = prompt('Do I have any kids?').toLowerCase();

  if (kids === 'no' || kids === 'n') {
    alert('Correct! I have 3 nephews and that is plenty!');
    count++;
  }
}
noKids();

function notAllStates() {
  let states = prompt('Do you think I have traveled to all 50 states?').toLowerCase();

  if (states === 'no' || states === 'n') {
    alert('Not even close, more like 10 or 15');
    count++;
  }
}
notAllStates();

function brokenBones() {
  let bones = prompt('Have I ever broken a bone?').toLowerCase();

  if (bones === 'yes' || bones === 'y') {
    alert('Yes, I have broken 7 bones unfortunately');
    count++;
  }
}
brokenBones();

function guessNumber() {
  let answer = 6;
  let tries = 4;
  let correct = false;
  while(!correct && tries >= 1){
    let guess = parseInt(prompt('Guess my favorite number. It is between 1 and 10, and you have 4 guesses.'));
    if(guess === answer){
      alert(`Correct! The answer is ${answer}!`);
      correct = true;
      count++;
    }
    else if(tries === 1){
      alert(`You've used all your gueses, here is the correct answer:    
      ${answer}`);
      break;
    }
    else{
      tries--;
      console.log('tries', tries);
      if(guess > answer){
        alert('number too high');
      }else if(guess < answer){
        alert('number too low');
      }
    }
  }
}
guessNumber();

function favSport() {
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
        alert('Nice! My three favorites are basketball, snowboarding & ultimate frisbee.');
        count++;
        break;
      }
    }
  }
}
favSport();

alert(`Thanks for checking out my page, ${username}!
(By the way, you got ${count} out of 7 questions correct.)`);
