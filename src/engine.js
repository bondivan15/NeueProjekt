let currentScene = 0;
let badStreak = 0;
let selectedGift = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("return-button").addEventListener("click", returnToStart);
    document.getElementById("prev-gift").addEventListener("click", prevGift);
    document.getElementById("next-gift").addEventListener("click", nextGift);
    document.getElementById("accept-gift").addEventListener("click", confirmGift);
});

function startGame() {
    currentScene = 1; // Start with scene ID 1
    badStreak = 0;
    updateScene();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("missed-screen").style.display = "none";
}

function returnToStart() {
    document.getElementById("start-screen").style.display = "flex";
    document.getElementById("missed-screen").style.display = "none";
    document.getElementById("game-container").style.display = "none";
}

function updateScene() {
    const scene = scenes.find(s => s.id === currentScene);
    if (!scene) return;

    const sceneImage = document.getElementById("scene-image");
    const sceneText = document.getElementById("scene-text");
    const choicesDiv = document.getElementById("choices");

    // Clear previous content
    sceneText.textContent = "";
    choicesDiv.innerHTML = "";

    // Set scene image
    sceneImage.src = scene.image || "bilder/Leer.png";
    sceneImage.style.display = "block";

    // Typewriter effect for text
    let index = 0;
    const speed = 30;

    function typeWriter() {
        if (index < scene.text.length) {
            sceneText.textContent += scene.text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // Add choices after text is fully displayed
            if (scene.choices && scene.choices.length > 0) {
                scene.choices.forEach((choice, i) => {
                    const button = document.createElement("button");
                    button.textContent = choice.text;
                    button.addEventListener("click", () => choose(choice));
                    choicesDiv.appendChild(button);
                });
            } else {
                // Default continue button if no choices
                const button = document.createElement("button");
                button.textContent = "Weiter";
                button.addEventListener("click", returnToStart);
                choicesDiv.appendChild(button);
            }
        }
    }

    typeWriter();
}

function choose(choice) {
    if (choice.bad) {
        badStreak++;
    } else {
        badStreak = Math.max(0, badStreak - 1);
    }

    // Check for bad ending
    if (badStreak >= 3) {
        showEnding(4); // Bad behavior ending
        return;
    }

    if (choice.ending) {
        showEnding(choice.ending);
        return;
    }

    if (choice.gift) {
        openGiftScreen();
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
    document.getElementById("missed-screen").style.display = "flex";

    const endingTitle = document.getElementById("ending-title");
    const endingText = document.getElementById("ending-text");
    const endingImage = document.getElementById("scene-image");

    endingTitle.textContent = ending.title;
    endingText.textContent = ending.text;
    endingImage.src = ending.image;
    endingImage.style.display = "block";
}

// Gift selection functions
let currentGiftIndex = 0;

function openGiftScreen() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("gift-screen").style.display = "flex";
    updateGiftDisplay();
}

function updateGiftDisplay() {
    const gift = gifts[currentGiftIndex];
    document.getElementById("gift-image").src = gift.image;
    document.getElementById("gift-name").textContent = gift.name;
}

function prevGift() {
    currentGiftIndex = (currentGiftIndex - 1 + gifts.length) % gifts.length;
    updateGiftDisplay();
}

function nextGift() {
    currentGiftIndex = (currentGiftIndex + 1) % gifts.length;
    updateGiftDisplay();
}

function confirmGift() {
    selectedGift = gifts[currentGiftIndex];
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    // Special ending for plush toy (ID 3)
    if (selectedGift.id === 3) {
        showEnding(13);
    } else {
        // Continue to next scene
        const scene = scenes.find(s => s.id === currentScene);
        if (scene && scene.nextScene) {
            currentScene = scene.nextScene;
            updateScene();
        }
    }
}