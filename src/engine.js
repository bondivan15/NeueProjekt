// engine.js

let currentScene = 0;
let badStreak = 0;
let giftIndex = 0;

const giftList = [
    "Geschenk1.png",
    "Geschenk2.png",
    "Geschenk3.png",
    "Geschenk4.png",
    "Geschenk5.png"
];

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("missed-screen").style.display = "none";
    document.getElementById("gift-screen").style.display = "none";
    currentScene = 0;
    badStreak = 0;
    updateScene();
}

function returnToStart() {
    document.getElementById("start-screen").style.display = "flex";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("missed-screen").style.display = "none";
    document.getElementById("gift-screen").style.display = "none";
    currentScene = 0;
    badStreak = 0;
}

function choose(choiceIndex) {
    const scene = scenes[currentScene];
    const choice = scene.choices[choiceIndex];

    // Обработка негативных реплик
    if (choice.negative === true) {
        badStreak++;
    } else {
        if (badStreak > 0) badStreak--;
    }

    // Если 3 плохих подряд — переход на сцену 49
    if (badStreak >= 3) {
        currentScene = 49;
        badStreak = 0;
        updateScene();
        return;
    }

    // Если сцена подарков
    if (choice.nextScene === "gift") {
        openGiftScreen();
        return;
    }

    // Если пользователь не пришёл
    if (choice.nextScene === 50) {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("missed-screen").style.display = "flex";
        return;
    }

    if (choice.nextScene !== undefined) {
        currentScene = choice.nextScene;
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
            textElement.textContent += scene.text.charAt(index);
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

// ================== ПОДАРОЧНЫЙ ЭКРАН ==================

function openGiftScreen() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("gift-screen").style.display = "flex";
    document.getElementById("gift-image").src = "bilder/" + giftList[giftIndex];
}

function prevGift() {
    giftIndex = (giftIndex - 1 + giftList.length) % giftList.length;
    document.getElementById("gift-image").src = "bilder/" + giftList[giftIndex];
}

function nextGift() {
    giftIndex = (giftIndex + 1) % giftList.length;
    document.getElementById("gift-image").src = "bilder/" + giftList[giftIndex];
}

function confirmGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    switch (giftIndex) {
        case 0: // Букет роз
            currentScene = 41;
            break;
        case 1: // Шоколадка
            currentScene = 42;
            break;
        case 2: // Ничего
            currentScene = 43;
            break;
        case 3: // Игрушка
            currentScene = 44;
            break;
        case 4: // Кольцо
            currentScene = 45;
            break;
        default:
            currentScene = 13;
    }

    updateScene();
}
