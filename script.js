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
    { french: "pomme", german: "Apfel", options: ["Birne", "Apfel", "Orange", "Banane"] },
    { french: "livre", german: "Buch", options: ["Zeitung", "Buch", "Magazin", "Brief"] },
    { french: "voiture", german: "Auto", options: ["Fahrrad", "Bus", "Auto", "Zug"] },
    { french: "soleil", german: "Sonne", options: ["Mond", "Stern", "Sonne", "Wolke"] },
    { french: "eau", german: "Wasser", options: ["Feuer", "Luft", "Erde", "Wasser"] },
    { french: "chien", german: "Hund", options: ["Katze", "Hund", "Maus", "Vogel"] },
    { french: "chat", german: "Katze", options: ["Hund", "Katze", "Fisch", "Vogel"] },
    { french: "poulet", german: "Huhn", options: ["Schwein", "Rind", "Huhn", "Ente"] },
    { french: "arbre", german: "Baum", options: ["Blume", "Baum", "Strauch", "Gras"] },
    { french: "maison", german: "Haus", options: ["Wohnung", "Villa", "Haus", "Schloss"] },
    { french: "boulangerie", german: "Bäckerei", options: ["Metzgerei", "Bäckerei", "Supermarkt", "Apotheke"] },
    { french: "école", german: "Schule", options: ["Universität", "Schule", "Kindergarten", "Bibliothek"] },
    { french: "fleur", german: "Blume", options: ["Baum", "Strauch", "Blume", "Gras"] },
    { french: "poisson", german: "Fisch", options: ["Vogel", "Katze", "Fisch", "Hund"] },
    { french: "chaussure", german: "Schuh", options: ["Socke", "Schuh", "Hut", "Hose"] }

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

