const scenes = [
    {
        image: "Freundliche-Frau.png",
        text: "Du sitzt am Tisch. Dein Date lächelt dich freundlich an.",
        choices: [
            { text: "Du siehst heute wunderschön aus.", nextScene: 1 },
            { text: "Hast du lange gewartet?", nextScene: 2 }
        ]
    },
    {
        image: "Freundliche-Frau(1).png",
        text: "Sie lächelt noch breiter. 'Oh danke! Du bist so süß.'",
        choices: [
            { text: "Lass uns bestellen.", nextScene: 3 },
            { text: "Erzähl mir von dir.", nextScene: 4 }
        ]
    },
    {
        image: "mittel-Laune-Frau.png",
        text: "'Ein bisschen…' sagt sie mit neutralem Gesichtsausdruck.",
        choices: [
            { text: "Entschuldige bitte!", nextScene: 1 },
            { text: "Ich zahle das Essen zur Entschuldigung.", nextScene: 5 }
        ]
    },
    {
        image: "Frau-mit-Speisekarte.png",
        text: "Ihr schaut zusammen die Speisekarte an.",
        choices: [
            { text: "Bestellen wir etwas Besonderes?", nextScene: 6 },
            { text: "Magst du lieber Wein oder Cocktails?", nextScene: 7 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Der Kellner kommt. Sie bestellt mit einem Lächeln.",
        choices: [
            { text: "Du bestellst das gleiche.", nextScene: 8 },
            { text: "Du bestellst etwas anderes.", nextScene: 9 }
        ]
    },
    {
        image: "Traurige-Frau-mit-Kellner.png",
        text: "Sie schaut traurig. 'Danke... aber ich fühle mich etwas seltsam heute.'",
        choices: [
            { text: "Wollen wir den Abend verschieben?", nextScene: 10 },
            { text: "Vielleicht hilft ein Dessert?", nextScene: 11 }
        ]
    },
    {
        image: "Frau-mit-Essen.png",
        text: "Das Essen kommt. Alles sieht lecker aus.",
        choices: [
            { text: "Guten Appetit!", nextScene: 12 },
            { text: "Möchtest du probieren?", nextScene: 13 }
        ]
    },
    {
        image: "Traurige-Frau-mit-Essen.png",
        text: "Sie lächelt leicht, aber etwas nachdenklich.",
        choices: [
            { text: "Ist alles in Ordnung?", nextScene: 14 },
            { text: "Erzähl mir, was dich bedrückt.", nextScene: 15 }
        ]
    },
    {
        image: "Böse-Frau-mit-Essen.png",
        text: "'Warum bestellst du immer dasselbe?' fragt sie plötzlich verärgert.",
        choices: [
            { text: "Ich dachte, du magst das?", nextScene: 16 },
            { text: "Tut mir leid!", nextScene: 17 }
        ]
    },
    {
        image: "Hulk-mit-Essen.png",
        text: "Die Stimmung kippt dramatisch! 'Ich hasse Lügen!', schreit sie wie Hulk.",
        choices: [
            { text: "Beruhige sie.", nextScene: 18 },
            { text: "Renn!", nextScene: 19 }
        ]
    },
    {
        image: "Ohne_Frau_mit_Essen_und_Check.png",
        text: "Sie verlässt plötzlich das Restaurant. Du bleibst allein zurück.",
        choices: [
            { text: "Spiel neu starten", nextScene: 0 },
            { text: "Alleine essen.", nextScene: 20 }
        ]
    },
    {
        image: "Traurige-Frau.png",
        text: "Sie seufzt: 'Heute war stressig...'",
        choices: [
            { text: "Lass uns spazieren gehen.", nextScene: 3 },
            { text: "Ich höre dir zu.", nextScene: 4 }
        ]
    },
    {
        image: "Sehr-böse-Frau-mit-Essen.png",
        text: "'Ich habe keine Lust mehr auf Smalltalk.'",
        choices: [
            { text: "Gib ihr Zeit.", nextScene: 5 },
            { text: "Versuche zu wechseln auf ein anderes Thema.", nextScene: 4 }
        ]
    },
    {
        image: "Sehr-böse-Frau-mit-Essen.png",
        text: "'Ich will keine weiteren Fragen mehr!'",
        choices: [
            { text: "Schweigen.", nextScene: 10 },
            { text: "Smalltalk über Wetter.", nextScene: 7 }
        ]
    },
    {
        image: "Traurige-Frau-mit-kellner.png",
        text: "Der Kellner bringt die Rechnung. Sie wirkt nervös.",
        choices: [
            { text: "Ich übernehme die Rechnung.", nextScene: 20 },
            { text: "Teilen wir?", nextScene: 5 }
        ]
    },
    {
        image: "Hulk-ohne-Essen.png",
        text: "Sie springt auf: 'Ich habe genug!' — und stürmt raus.",
        choices: [
            { text: "Nachlaufen", nextScene: 10 },
            { text: "Allein zurückbleiben", nextScene: 20 }
        ]
    },
    {
        image: "Traurige-Frau-mit-Essen.png",
        text: "Sie schaut auf ihr Handy und antwortet kaum.",
        choices: [
            { text: "Frage: Ist etwas passiert?", nextScene: 5 },
            { text: "Lass ihr Zeit.", nextScene: 14 }
        ]
    },
    {
        image: "Traurige-Frau.png",
        text: "Ein unangenehmes Schweigen füllt den Raum.",
        choices: [
            { text: "Versuche Smalltalk.", nextScene: 4 },
            { text: "Stille aushalten.", nextScene: 12 }
        ]
    },
    {
        image: "Leer.png",
        text: "Das Date ist vorbei. Vielleicht klappt es beim nächsten Mal besser.",
        choices: [
            { text: "Spiel neu starten", nextScene: 0 },
            { text: "Beenden", nextScene: 20 }
        ]
    },
    {
        image: "Leer.png",
        text: "ENDE.",
        choices: [
            { text: "Neu starten", nextScene: 0 }
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
    document.getElementById("scene-image").src = "bilder/" + scene.image;
    document.getElementById("scene-text").innerText = scene.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    if (scene.choices && scene.choices.length > 0) {
        scene.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => choose(index);
            choicesDiv.appendChild(button);
        });
    } else {
        // Если нет вариантов — например, конец игры
        const button = document.createElement("button");
        button.innerText = "Neu starten";
        button.onclick = () => { currentScene = 0; updateScene(); };
        choicesDiv.appendChild(button);
    }
}


window.onload = updateScene;
