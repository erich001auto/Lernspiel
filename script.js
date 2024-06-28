const words = [
    {de: "Apfel", fr: "Pomme"},
    {de: "Banane", fr: "Banane"},
    {de: "Kirsche", fr: "Cerise"},
    {de: "Dattel", fr: "Datte"},
    {de: "Erdbeere", fr: "Fraise"}
];
let currentWordIndex = 0;

document.getElementById("submit-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultDisplay = document.getElementById("result");
    
    if (userInput.toLowerCase() === words[currentWordIndex].fr.toLowerCase()) {
        resultDisplay.textContent = "Richtig!";
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            document.getElementById("word-display").textContent = words[currentWordIndex].de;
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
    document.getElementById("word-display").textContent = words[currentWordIndex].de;
};

