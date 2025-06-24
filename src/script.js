let currentScene = 0;
let badStreak = 0;

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    updateScene();
}

function choose(choiceIndex) {
    const scene = scenes[currentScene];
    const choice = scene.choices[choiceIndex];
    const next = choice?.nextScene;

    const isNegative = choice.text.includes("nicht") || choice.text.includes("trotzdem") || choice.text.includes("Zeit") || choice.text.includes("Wasser") || choice.text.includes("anders") || choice.text.includes("verschwende");
    const isPositive = choice.text.includes("freut") || choice.text.includes("lächelt") || choice.text.includes("Geschenk") || choice.text.includes("gern") || choice.text.includes("mag") || choice.text.includes("sehen wir uns wieder") || choice.text.includes("verdient");

    if (isNegative) {
        badStreak++;
    } else if (isPositive && badStreak > 0) {
        badStreak--;
    }

    if (badStreak >= 3) {
        currentScene = 6;
        badStreak = 0;
        updateScene();
        return;
    }

    if (next !== undefined) {
        currentScene = next;
        updateScene();
    }
}

function updateScene() {
    const scene = scenes[currentScene];
    const textElement = document.getElementById("scene-text");
    const choicesDiv = document.getElementById("choices");

    textElement.textContent = "";
    choicesDiv.innerHTML = "";
    document.getElementById("scene-image").src = "bilder/" + scene.image;

    let index = 0;
    const speed = 30;

    function typeWriter() {
        if (index < scene.text.length) {
            const char = scene.text.charAt(index);
            textElement.textContent += char;
            index++;
            setTimeout(typeWriter, speed);
        } else {
            if (scene.choices && scene.choices.length > 0) {
                scene.choices.forEach((choice, i) => {
                    const button = document.createElement("button");
                    button.innerText = choice.text;
                    button.onclick = () => choose(i);
                    choicesDiv.appendChild(button);
                });
            } else {
                const button = document.createElement("button");
                button.innerText = "Neu starten";
                button.onclick = () => {
                    currentScene = 0;
                    badStreak = 0;
                    updateScene();
                };
                choicesDiv.appendChild(button);
            }
        }
    }

    typeWriter();
}

const scenes = [
    {
        image: "Frau-sitzt-allein.png",
        text: "Du stehst vor dem Café. Jana wartet schon. Was machst du?",
        choices: [
            { text: "Du gehst hinein und setzt dich zu ihr", nextScene: 1 },
            { text: "Du gehst einfach nicht hinein", nextScene: 29 }
        ]
    },
    {
        image: "Freundliche-Frau(1).png",
        text: "Jana lächelt. Ich habe schon gedacht, du kommst nicht",
        choices: [
            { text: "Ich hätte dich doch nie versetzt", nextScene: 2 },
            { text: "Ich habe echt überlegt, ob ich komme", nextScene: 3 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Sie lacht. Na gut, du bist ja da",
        choices: [
            { text: "Ein charmantes Kompliment machen", nextScene: 4 },
            { text: "Fragen, wie ihr Tag war", nextScene: 5 }
        ]
    },
    {
        image: "mittel-Laune-Frau.png",
        text: "Sie runzelt die Stirn. Aha. Ehrlich bist du zumindest",
        choices: [
            { text: "Ich bin halt nervös", nextScene: 4 },
            { text: "Ich verschwende ungern Zeit", nextScene: 6 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Sie lächelt. Du bist ja richtig süß, wenn du willst",
        choices: [
            { text: "Der Kellner kommt – etwas für euch beide bestellen", nextScene: 7 },
            { text: "Fragen, was sie gerne essen möchte", nextScene: 7 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Mein Tag war entspannt. Aber ich hatte den Kopf voll mit diesem Treffen",
        choices: [
            { text: "Ich hab mich auch echt gefreut", nextScene: 4 },
            { text: "Und trotzdem bist du gekommen", nextScene: 6 }
        ]
    },
    {
        image: "Sehr-böse-Frau-mit-Essen.png",
        text: "Jana schaut dich ernst an. STOPP. Hört das jetzt mal auf mit dem Unfreundlichen. Sie steht auf und geht",
        choices: [
            { text: "Neu starten", nextScene: 0 }
        ]
    },
    {
        image: "Frau-mit-Speisekarte.png",
        text: "Der Kellner bringt die Speisekarten. Jana schaut dich erwartungsvoll an",
        choices: [
            { text: "Fragen, was bestellst du. Ich nehme das gleiche", nextScene: 8 },
            { text: "Einfach zwei Gläser Wasser bestellen", nextScene: 9 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Oh, das ist süß. Ich hoffe, du magst Pasta",
        choices: [
            { text: "Lächeln und sagen, klar – besonders mit dir", nextScene: 10 },
            { text: "Fragen, wenn du aussuchen könntest – Pizza oder Sushi", nextScene: 11 }
        ]
    },
    {
        image: "ein-bisschen-böse-Frau-mit-Essen.png",
        text: "Sie schaut irritiert. Nur Wasser. Wirklich",
        choices: [
            { text: "Ich wollte dich überraschen mit einem Geschenk", nextScene: 12 },
            { text: "Ich trink eh nie was anderes", nextScene: 6 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Sie grinst. Du bist charmant. Gefährlich charmant",
        choices: [
            { text: "Dann brauchst du einen Talisman (gib ihr ein Geschenk)", nextScene: 12 },
            { text: "Dann pass gut auf dich auf heute", nextScene: 13 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Du gibst ihr ein kleines Geschenk. Ihre Augen leuchten",
        choices: [
            { text: "Nur eine Kleinigkeit. Du hast’s verdient", nextScene: 13 },
            { text: "Ein Date ohne Überraschung ist wie Pizza ohne Käse", nextScene: 13 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Jana lächelt zufrieden. Das war ein schöner Abend",
        choices: [
            { text: "Dann sehen wir uns wieder", nextScene: 14 },
            { text: "Ich hoffe, du denkst an mich", nextScene: 14 }
        ]
    },
    {
        image: "Traurige-Frau-mit-Essen.png",
        text: "Sie nickt. Ganz sicher — ENDE",
        choices: [
            { text: "Neu starten", nextScene: 0 }
        ]
    },
    {
        image: "Leer.png",
        text: "Du hast Jana sitzen lassen. Vielleicht beim nächsten Mal",
        choices: [
            { text: "Neu starten", nextScene: 0 }
        ]
    }
];
