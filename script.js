let words = [
    { french: "bonjour", german: "hallo", options: ["tschüss", "hallo", "danke", "bitte"] },
    { french: "merci", german: "danke", options: ["bitte", "hallo", "danke", "tschüss"] },
    // Fügen Sie hier weitere Wörter hinzu
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
