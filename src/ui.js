document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("restart-button").addEventListener("click", restartGame);

    // Debug mode can остаться если нужно
    if (window.location.hash === "#debug") {
        startGame();
    }
});