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
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("missed-screen").style.display = "none";
    currentScene = 0;
    badStreak = 0;
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
