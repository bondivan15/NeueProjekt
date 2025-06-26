document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("return-button").addEventListener("click", returnToStart);
    document.getElementById("prev-gift").addEventListener("click", prevGift);
    document.getElementById("next-gift").addEventListener("click", nextGift);
    document.getElementById("accept-gift").addEventListener("click", confirmGift);

    // Initialize the first scene if needed
    if (window.location.hash === "#debug") {
        startGame();
    }
});