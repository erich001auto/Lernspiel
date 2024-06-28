const germanText = "Hier kommt der deutsche Text der Tagesschau in einfacher Sprache."; // Beispieltext
const translations = {
    "Hier": "Ici",
    "kommt": "vient",
    "der": "le",
    "deutsche": "allemand",
    "Text": "texte",
    "der": "de",
    "Tagesschau": "journal télévisé",
    "in": "en",
    "einfacher": "simple",
    "Sprache": "langue"
};

const words = germanText.split(" ");
let currentWordIndex = 0;

function showQuestion() {
    const currentWord = words[currentWordIndex];
    const correctTranslation = translations[currentWord];

    const choices = [correctTranslation];
    while (choices.length < 4) {
        const randomWord = getRandomGermanWord();
        if (!choices.includes(translations[randomWord])) {
            choices.push(translations[randomWord]);
        }
    }

    shuffle(choices);

    document.getElementById('question').innerText = `Wie übersetzt man "${currentWord}"?`;
    document.getElementById('choices').innerHTML = choices.map(choice => 
        `<div class="choice" onclick="checkAnswer('${choice}')">${choice}</div>`
    ).join('');
}

function getRandomGermanWord() {
    const germanWords = Object.keys(translations);
    return germanWords[Math.floor(Math.random() * germanWords.length)];
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function checkAnswer(selectedChoice) {
    const currentWord = words[currentWordIndex];
    const correctTranslation = translations[currentWord];

    if (selectedChoice === correctTranslation) {
        document.getElementById('feedback').innerText = "Richtig!";
    } else {
        document.getElementById('feedback').innerText = `Falsch! Die richtige Antwort ist "${correctTranslation}".`;
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        showQuestion();
    } else {
        document.getElementById('question').innerText = "Spiel beendet!";
        document.getElementById('choices').innerHTML = "";
        document.getElementById('next-btn').style.display = "none";
    }
});

// Start the game
showQuestion();
