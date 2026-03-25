let numToGuess = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");


let guessCount = 1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value);

    if (guessCount === 1){
        guesses.textContent = "Previous Guesses: ";
    }

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === numToGuess) {
        lastResult.textContent ="Congrats, you finally guessed it...";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = "Game Over, Loser";
        lowOrHigh.textContent = "";
        setGameOver();
    }

    else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red";

        if (userGuess < numToGuess) {
            lowOrHigh.textContent = "Last Guess was too low, nerd.";
        }
        else if (userGuess > numToGuess) {
            lowOrHigh.textContent = "Last Guess was painfully high. Do Better.";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParams = document.querySelectorAll(".results p");
    for (const resetParam of resetParams){
        resetParam.textContent = "";
    }

    resetButton.parentNode.removechild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    numToGuess = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener("click", checkGuess);