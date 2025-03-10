// Made By Donavalli Jayanth
// Visit my Portfolio http://www.jayanth.xyz/

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const levelSelect = document.getElementById("level-select");
const progressBar = document.querySelector(".progress");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let selectedLevel = "easy"; // Default level

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
    delete gameModal.dataset.gameEnded;
    updateProgressBar(); // ✅ Reset progress bar
};

const getRandomWord = () => {
    let words = wordList[selectedLevel];
    if (!words || words.length === 0) {
        console.error("No words found for level:", selectedLevel);
        return;
    }

    const { word, hint } = words[Math.floor(Math.random() * words.length)];
    currentWord = word.toUpperCase();
    document.querySelector(".hint-text b").innerText = hint;

    resetGame();
};

// Play Again Button Event
playAgainBtn.addEventListener("click", () => {
    gameModal.classList.remove("show");
    getRandomWord();
});

// Update Progress Bar
const updateProgressBar = () => {
    const remainingChances = (maxGuesses - wrongGuessCount) / maxGuesses * 100;
    progressBar.style.width = `${Math.max(0, remainingChances)}%`;
};

// Game Over Function
const gameOver = (isVictory) => {
    if (gameModal.dataset.gameEnded) return;

    // Show modal with details
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");

    window.gameSettings.updateFinalScore(isVictory);
    gameModal.dataset.gameEnded = "true";
};

// Handle User Input
const initGame = (button, clickedLetter) => {
    clickedLetter = clickedLetter.toUpperCase();

    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                let letterElement = wordDisplay.querySelectorAll("li")[index];
                if (!letterElement.classList.contains("guessed")) {
                    letterElement.innerText = letter;
                    letterElement.classList.add("guessed");
                    correctLetters.push(letter);
                }
            }
        });
    } else {
        if (wrongGuessCount < maxGuesses) {
            wrongGuessCount++;
            if (wrongGuessCount < maxGuesses) {
                hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
            }
        }
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    updateProgressBar();

    let allLettersGuessed = [...new Set(currentWord.split(""))].every(letter => correctLetters.includes(letter));

    if (wrongGuessCount >= maxGuesses) return gameOver(false);
    if (allLettersGuessed) return gameOver(true);
};

// Create Keyboard
for (let i = 65; i <= 90; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// Level Selection Change
levelSelect.addEventListener("change", function() {
    selectedLevel = this.value;
    getRandomWord();
});

// Initial Game Load
getRandomWord();
