const stdin = process.stdin;
stdin.setEncoding('utf8');
const randWord = require('./random.js');

randKey = randWord.randKey;
randKeyProperty = randWord.randKeyProperty;

let wrongGuesses = 0;

const toArray = (string) => {
  let arr = [];
  for (let i = 0; i<string.length; i++){
    arr.push(string.charAt(i));
  }
  return arr;
}

const genGuessTracker = (length) => {
  let response = [];
  for (i = 0; i<length; i++){
    response.push('*');
  }
  return response;
}
console.log(randKeyProperty);
//console.log(randKey);
const randKeyArr = toArray(randKey);
//console.log(randKeyArr);
guessTracker = genGuessTracker(randKeyArr.length);

const updateTracker = (arr, element) => {
  let correctGuess = false;
  for (i = 0; i<arr.length; i++){
    if (arr[i] == element){
      guessTracker[i] = element;
      correctGuess = true;
    }
  }
  if (correctGuess == false){
    wrongGuesses++;
  }
}

//sees if all asterisks have been replaced with correct guesses
const checkCompletion = (arr) => {
  for (i = 0; i<arr.length; i++){
    if (arr[i] == '*'){
      return false;
    }
  }
  return true;
}

console.log(guessTracker);
//compares user input against randKey
stdin.addListener("data", function(d) {
    updateTracker(randKeyArr, d.trim().toUpperCase());
    //console.log(wrongGuesses);
    console.log('incorrect guesses remaining ' + (5-wrongGuesses));
    console.log(guessTracker);

    if (checkCompletion(guessTracker)){
      console.log('congrats, you got it!');
      console.log('the word was ' + randKey);
      console.log(randKeyProperty);
      process.exit();
    }

    if (wrongGuesses>=5){
      console.log('you are out of guesses');
      console.log('the word was ' + randKey);
      console.log(randKeyProperty);
      process.exit();
    }

  });

console.log(`guess a letter`);
