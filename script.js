const main = document.getElementById("main");
const description = document.getElementById("description");
const input = document.getElementById("numberInput");
const button = document.getElementById("submitButton");
const guessNumber = document.getElementById("guessNumber");

let number = 0;
let limitChance = 0;
let tryNumber = 0;

function guessNumbers() {
  if (limitChance) {
    if (input.value == number) {
      main.innerHTML = "<p>you win</p>";
    } else if (input.value < number) {
      guessNumber.innerHTML += `<span class='less'>${input.value}</span>`;
    } else {
      guessNumber.innerHTML += `<span class='more'>${input.value}</span>`;
    }
    input.value = "";
    limitChance--;
    description.innerHTML = `You have ${limitChance} chances`;
  } else {
    main.innerHTML = "<p>you lost</p>";
  }
}

function createRandomNumber() {
  number = Math.floor(Math.random() * input.value);
  button.removeEventListener("click", createRandomNumber);
  button.addEventListener("click", guessNumbers);
  button.innerHTML = "Guess";
  limitChance = Math.floor(number / 5);
  description.innerHTML = `You have ${limitChance} chances`;
  guessNumber.innerHTML = "<span>your guess:</span>";
  input.value = "";
}

button.addEventListener("click", createRandomNumber);
