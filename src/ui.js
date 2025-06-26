// ui.js

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("return-button").addEventListener("click", returnToStart);

    // Кнопки управления подарками
    const leftButton = document.querySelector("#gift-screen button:nth-of-type(1)");
    const rightButton = document.querySelector("#gift-screen button:nth-of-type(3)");
    const acceptButton = document.querySelector("#gift-screen button:nth-of-type(4)");

    if (leftButton && rightButton && acceptButton) {
        leftButton.addEventListener("click", previousGift);
        rightButton.addEventListener("click", nextGift);
        acceptButton.addEventListener("click", acceptGift);
    }
});
