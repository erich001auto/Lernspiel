let words = [
    { french: "bonjour", german: "hallo", options: ["tschüss", "hallo", "danke", "bitte"] },
    { french: "merci", german: "danke", options: ["bitte", "hallo", "danke", "tschüss"] },
    { french: "au revoir", german: "auf Wiedersehen", options: ["guten Tag", "auf Wiedersehen", "bitte schön", "gute Nacht"] },
    { french: "s'il vous plaît", german: "bitte", options: ["danke", "hallo", "tschüss", "bitte"] },
    { french: "oui", german: "ja", options: ["nein", "vielleicht", "ja", "okay"] },
    { french: "non", german: "nein", options: ["ja", "nein", "vielleicht", "okay"] },
    { french: "chat", german: "Katze", options: ["Hund", "Katze", "Maus", "Vogel"] },
    { french: "chien", german: "Hund", options: ["Katze", "Hund", "Pferd", "Fisch"] },
    { french: "maison", german: "Haus", options: ["Auto", "Haus", "Baum", "Straße"] },
    { french: "école", german: "Schule", options: ["Schule", "Krankenhaus", "Restaurant", "Park"] }
];

let currentWordIndex = 0;
let score = 0;

function loadWord() {
    const wordElement = document.getElementById('french-word');
    const optionsElement = document.getElementById('options');
    const currentWord = words[currentWordIndex];

    wordElement.textContent = currentWord.french;
    optionsElement.innerHTML = '';

    currentWord.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentWord = words[currentWordIndex];
    if (selectedOption === currentWord.german) {
        score++;
        document.getElementById('score-value').textContent = score;
    }
    currentWordIndex = (currentWordIndex + 1) % words.length;
    loadWord();
}

document.getElementById('next-word').addEventListener('click', loadWord);

loadWord();

