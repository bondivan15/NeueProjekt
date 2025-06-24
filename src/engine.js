// engine.js

let currentScene = 0;
let badStreak = 0;

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("missed-screen").style.display = "none";
    updateScene();
}

function returnToStart() {
    const startScreen = document.getElementById("start-screen");
    const gameContainer = document.getElementById("game-container");
    const missedScreen = document.getElementById("missed-screen");

    startScreen.style.display = "flex";
    gameContainer.style.display = "none";
    missedScreen.style.display = "none";

    window.scrollTo(0, 0);
    startScreen.className = "full-screen";

    currentScene = 0;
    badStreak = 0;
}

function choose(choiceIndex) {
    const scene = scenes[currentScene];
    const choice = scene.choices[choiceIndex];
    const next = choice?.nextScene;

    const isNegative = choice.text.includes("nicht") || choice.text.includes("trotzdem") || choice.text.includes("Zeit") || choice.text.includes("Wasser") || choice.text.includes("anders") || choice.text.includes("verschwende") || choice.text.includes("teilen") || choice.text.includes("Gleichberechtigung");
    const isPositive = choice.text.includes("freut") || choice.text.includes("lächelt") || choice.text.includes("Geschenk") || choice.text.includes("gern") || choice.text.includes("mag") || choice.text.includes("sehen wir uns wieder") || choice.text.includes("verdient") || choice.text.includes("Danke") || choice.text.includes("Kuss") || choice.text.includes("Umarmung");

    if (choice.text.includes("Geschenk")) {
        showGiftScreen();
        return;
    }

    if (isNegative) {
        badStreak++;
    } else if (isPositive && badStreak > 0) {
        badStreak--;
    }

    if (badStreak >= 3) {
        currentScene = 6; // сцена, где она уходит
        badStreak = 0;
        updateScene();
        return;
    }

    if (next === 29) {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("missed-screen").style.display = "flex";
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

// --- Выбор подарка ---
const gifts = ["gift1.png", "gift2.png", "gift3.png"];
let currentGift = 0;

function showGiftScreen() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("gift-screen").style.display = "flex";
    updateGiftImage();
}

function updateGiftImage() {
    document.getElementById("gift-image").src = "bilder/" + gifts[currentGift];
}

document.getElementById("gift-left").onclick = () => {
    currentGift = (currentGift + gifts.length - 1) % gifts.length;
    updateGiftImage();
};

document.getElementById("gift-right").onclick = () => {
    currentGift = (currentGift + 1) % gifts.length;
    updateGiftImage();
};

document.getElementById("gift-choose").onclick = () => {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    if (currentGift === 0) {
        currentScene = 12; // хороший подарок
    } else if (currentGift === 1) {
        currentScene = 13; // нейтрально
    } else {
        currentScene = 6;  // плохой подарок — уходит
    }

    updateScene();
};