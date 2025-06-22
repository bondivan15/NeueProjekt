const scenes = [
    {
        image: "img/scene0.jpg",
        text: "",
        choices: [
            { text: "", nextScene: 1 },
            { text: "", nextScene: 2 }
        ]
    },
    {
        image: "img/scene1.jpg",
        text: "",
        choices: [
            { text: "", nextScene: 0 },
            { text: "", nextScene: 2 }
        ]
    },
    {
        image: "img/scene2.jpg",
        text: "",
        choices: [
            { text: "", nextScene: 1 },
            { text: "", nextScene: 0 }
        ]
    }
];

let currentScene = 0;

function choose(choiceIndex) {
    const next = scenes[currentScene].choices[choiceIndex]?.nextScene;
    if (next !== undefined) {
        currentScene = next;
        updateScene();
    }
}

function updateScene() {
    const scene = scenes[currentScene];
    document.getElementById("scene-image").src = scene.image;
    document.getElementById("scene-text").innerText = scene.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => choose(index);
        choicesDiv.appendChild(btn);
    });
}

updateScene();
