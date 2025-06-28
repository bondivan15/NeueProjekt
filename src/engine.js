let currentScene = 1;
let badStreak = 0;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("restart-button").addEventListener("click", restartGame);
});

function startGame() {
    currentScene = 1;
    badStreak = 0;
    updateScene();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "flex";
}

function restartGame() {
    document.getElementById("ending-screen").style.display = "none";
    startGame();
}

function updateScene() {
    const scene = scenes.find(s => s.id === currentScene);
    if (!scene) return;

    const sceneImage = document.getElementById("scene-image");
    const sceneText = document.getElementById("scene-text");
    const choicesDiv = document.getElementById("choices");


    sceneText.textContent = "";
    choicesDiv.innerHTML = "";


    sceneImage.src = scene.image || "bilder/Leer.png";
    sceneImage.style.display = "block";


    let index = 0;
    const speed = 30;

    function typeWriter() {
        if (index < scene.text.length) {
            sceneText.textContent += scene.text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {

            if (scene.choices && scene.choices.length > 0) {
                scene.choices.forEach((choice) => {
                    const button = document.createElement("button");
                    button.textContent = choice.text;
                    button.addEventListener("click", () => makeChoice(choice));
                    choicesDiv.appendChild(button);
                });
            }
        }
    }

    typeWriter();
}

function makeChoice(choice) {
    if (choice.bad) {
        badStreak++;
    } else {
        badStreak = Math.max(0, badStreak - 1);
    }


    if (badStreak >= 3) {
        showEnding(4); // Bad behavior ending
        return;
    }

    if (choice.ending) {
        showEnding(choice.ending);
        return;
    }

    if (choice.nextScene) {
        currentScene = choice.nextScene;
        updateScene();
    }
}

function showEnding(endingId) {
    const ending = endings[endingId];
    if (!ending) return;

    document.getElementById("game-container").style.display = "none";
    document.getElementById("ending-screen").style.display = "flex";

    document.getElementById("ending-title").textContent = ending.title;
    document.getElementById("ending-text").textContent = ending.text;
    document.getElementById("ending-image").src = ending.image;
}