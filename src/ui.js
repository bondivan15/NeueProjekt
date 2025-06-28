document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("restart-button").addEventListener("click", restartGame);


    if (window.location.hash === "#debug") {
        startGame();
    }
});