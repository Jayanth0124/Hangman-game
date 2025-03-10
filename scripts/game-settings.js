document.addEventListener("DOMContentLoaded", () => {
    const correctScoreElement = document.getElementById("correct-score");
    const wrongScoreElement = document.getElementById("wrong-score");

    let correctScore = 0;
    let wrongScore = 0;

    function updateScoreboard() {
        correctScoreElement.textContent = correctScore;
        wrongScoreElement.textContent = wrongScore;
    }

    function updateFinalScore(isVictory) {
        if (isVictory) {
            correctScore++; // Count as "Correct" only when player wins
        } else {
            wrongScore++; // Count as "Wrong" only when player loses
        }
        updateScoreboard();
    }

    // No resetScores function to prevent score loss

    window.gameSettings = {
        updateFinalScore
    };
});
