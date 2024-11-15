const main = document.getElementById("main");
const description = document.getElementById("description");
const input = document.getElementById("numberInput");
const button = document.getElementById("submitButton");
const guessNumber = document.getElementById("guessNumber");

let number, limitChance;

function guessNumbers() {
  const inputNumber = Number(input.value);
  if (limitChance > 1) {
    if (inputNumber == number) {
      main.innerHTML = "<p>you win</p>";
    } else if (input.value < number) {
      guessNumber.innerHTML += `<span class='orange'>${inputNumber}</span>`;
    } else {
      guessNumber.innerHTML += `<span class='red'>${inputNumber}</span>`;
    }
    input.value = "";
    limitChance--;
    description.innerHTML = `You have ${limitChance} chances`;
  } else {
    main.innerHTML = `<p>you lost! :( the number was ${number}</p>`;
  }
}

function createRandomNumber() {
  const inputNumber = Number(input.value);
  number = Math.floor(Math.random() * inputNumber);
  button.removeEventListener("click", createRandomNumber);
  button.addEventListener("click", guessNumbers);
  button.innerHTML = "Guess";
  limitChance = Math.floor(Math.log2(inputNumber)) + 1;
  description.innerHTML = `You have ${limitChance} chances`;
  guessNumber.innerHTML = "<span>your guess:</span>";
  input.value = "";
}

button.addEventListener("click", createRandomNumber);
