const words = ["Apfel", "Banane", "Kirsche", "Dattel", "Erdbeere"];
let currentWordIndex = 0;

document.getElementById("submit-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const resultDisplay = document.getElementById("result");
    
    if (userInput === words[currentWordIndex]) {
        resultDisplay.textContent = "Richtig!";
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            document.getElementById("word-display").textContent = words[currentWordIndex];
        } else {
            document.getElementById("word-display").textContent = "Spiel beendet!";
            document.getElementById("submit-button").disabled = true;
        }
    } else {
        resultDisplay.textContent = "Falsch, versuche es noch einmal!";
    }
    document.getElementById("user-input").value = '';
});

window.onload = function() {
    document.getElementById("word-display").textContent = words[currentWordIndex];
};
