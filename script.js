document.getElementById("start-game").onclick = function() {
    startGame();
};

let currentLevel = 1;

function startGame() {
    document.getElementById("start-game").style.display = "none";
    showLevel(1);
}

function showLevel(level) {
    document.querySelector(`#level-${level}`).style.display = "block";
}

function hideLevel(level) {
    document.querySelector(`#level-${level}`).style.display = "none";
}

function checkGift(element, level) {
    const isCorrect = element.getAttribute("data-correct") === "true";
    if (isCorrect) {
        if (level === 3) {
            showMessage();
        } else {
            advanceLevel(level);
        }
    } else {
        alert("Oops! Try picking a different gift!");
    }
}

function checkAnswer(level, answer) {
    if (answer === "Karina") {
        advanceLevel(level);
    } else {
        alert("Oops! That's not correct. Try again!");
    }
}

function completeLevel(level) {
    advanceLevel(level);
}

function advanceLevel(level) {
    hideLevel(level);
    currentLevel++;
    showLevel(currentLevel);
}

function showMessage() {
    document.getElementById("message").style.display = "block";
}
