let randomNumber;

// Generate random number when the page loads
window.onload = function () {
  generateRandomNumber();
};

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number generated: " + randomNumber);
}

function checkRandomNumber() {
  const guess = document.getElementById("guess").value;
  console.log("Guessed number: " + guess);

  const para = document.getElementById("guess_output");

  // check guessed number with randomNumber
  if (guess < randomNumber) {
    para.textContent = "You guessed a lower number";
  } else if (guess > randomNumber) {
    para.textContent = "You guessed a higher number";
  } else if (guess == randomNumber) {
    para.textContent = "Congratulations!! You guessed it correct....";
  }
}

const checkButton = document.getElementById("check");
checkButton.onclick = checkRandomNumber;
