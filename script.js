const germanText = "Hier kommt der deutsche Text der Tagesschau in einfacher Sprache.";
const translations = {
    "Hier": "Ici",
    "kommt": "vient",
    "der": "le",
    "deutsche": "allemand",
    "Text": "texte",
    "der": "de la",
    "Tagesschau": "journal télévisé",
    "in": "en",
    "einfacher": "simple",
    "Sprache": "langue"
};

let words = Object.keys(translations);
let currentWordIndex = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    if (currentWordIndex >= words.length) {
        document.getElementById('question').innerText = "Spiel beendet!";
        document.getElementById('options').innerHTML = "";
        document.getElementById('next-button').style.display = 'none';
        return;
    }

    const word = words[currentWordIndex];
    document.getElementById('question').innerText = `Was ist die Übersetzung von "${word}"?`;

    let options = [translations[word]];
    while (options.length < 4) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        if (!options.includes(translations[randomWord])) {
            options.push(translations[randomWord]);
        }
    }

    options = shuffle(options);
    document.getElementById('options').innerHTML = options.map(option => 
        `<button class="bg-gray-200 p-2 rounded" onclick="checkAnswer('${option}')">${option}</button>`
    ).join('');
}

function checkAnswer(answer) {
    const word = words[currentWordIndex];
    if (translations[word] === answer) {
        alert("Richtig!");
    } else {
        alert(`Falsch! Die richtige Antwort ist "${translations[word]}".`);
    }
    currentWordIndex++;
}

function nextQuestion() {
    showQuestion();
}

window.onload = function() {
    showQuestion();
}
