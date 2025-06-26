const giftEndings = {
    3: {
        endingText: "ENDE13: Sie war besonders gerührt von diesem Geschenk. Vielleicht hast du ihr Herz berührt."
    }
};

const scenes = [
    {
        id: 1,
        image: "bilder/Freundliche-Frau.png",
        text: "Jana wartet schon auf dich.",
        choices: [
            { text: "Ich setze mich und mache ihr ein Kompliment", nextScene: 2 },
            { text: "Ich komme nicht", ending: 1 }
        ]
    },
    {
        id: 2,
        image: "bilder/Freundliche-Frau.png",
        text: "Hallo! Du bist so süß!",
        choices: [
            { text: "Wie war dein Tag?", nextScene: 3 },
            { text: "Ich sage nichts und rufe den Kellner", nextScene: 11, bad: true }
        ]
    },
    {
        id: 3,
        image: "bilder/Freundliche-Frau.png",
        text: "Gut! Wollen wir den Kellner rufen?",
        choices: [
            { text: "Klar, mein Schatz", nextScene: 4 },
            { text: "Bist du WLAN? Warum fühle ich so eine starke Verbindung?", nextScene: 17, bad: true }
        ]
    },
    {
        id: 4,
        image: "bilder/Kellner.png",
        text: "Da ist er! Was möchtest du?",
        choices: [
            { text: "Ich vertraue deinem Geschmack", nextScene: 5 },
            { text: "Lass uns nur zwei Gläser Wasser bestellen", nextScene: 23, bad: true }
        ]
    },
    {
        id: 5,
        image: "bilder/Essen.png",
        text: "Wie schmeckt es dir?",
        choices: [
            { text: "Ein Meisterwerk! Du hast genau richtig gewählt!", nextScene: 6 },
            { text: "Ehrlich? Es hat mir nicht geschmeckt", nextScene: 28, bad: true }
        ]
    },
    {
        id: 6,
        image: "bilder/Rechnung.png",
        text: "Und hier ist schon die Rechnung!",
        choices: [
            { text: "Ich habe noch ein Geschenk für dich!", nextScene: 7 },
            { text: "Sollen wir teilen?", ending: 12, bad: true }
        ]
    },
    {
        id: 7,
        image: "bilder/Tasche.png",
        text: "Welches Geschenk möchtest du geben?",
        gift: true,
        nextScene: 8
    },
    {
        id: 8,
        image: "bilder/NachHause.png",
        text: "Es war ein wunderschöner Abend! Bringst du mich nach Hause?",
        choices: [
            { text: "Natürlich, Sonnenschein", ending: 2 },
            { text: "Geh lieber allein", ending: 3, bad: true }
        ]
    },
    {
        id: 11,
        image: "bilder/Schweigen.png",
        text: "Du redest wenig.",
        choices: [
            { text: "Tut mir leid. Ich hatte einen schlechten Tag", nextScene: 12 },
            { text: "Geht dich nichts an!", ending: 4, bad: true }
        ]
    },
    {
        id: 12,
        image: "bilder/Kellner.png",
        text: "Verstehe! Was möchtest du essen?",
        choices: [
            { text: "Ich vertraue deinem Geschmack", nextScene: 13 },
            { text: "Warum ist das Restaurant so teuer?", ending: 4, bad: true }
        ]
    },
    {
        id: 13,
        image: "bilder/Essen.png",
        text: "Und wie ist es?",
        choices: [
            { text: "Mmmm, köstlich!!!", nextScene: 14 },
            { text: "Meine Mutter kocht besser", ending: 3, bad: true }
        ]
    },
    {
        id: 14,
        image: "bilder/Rechnung.png",
        text: "Und hier ist die Rechnung!",
        choices: [
            { text: "Für so eine Schönheit habe ich noch ein Geschenk!", nextScene: 7 },
            { text: "Wow, hast du viel gegessen! Zahl selbst!", ending: 12, bad: true }
        ]
    },
    {
        id: 17,
        image: "bilder/Verwirrt.png",
        text: "Hmmmm...",
        choices: [
            { text: "Hat es dir nicht gefallen? Tut mir leid", nextScene: 18 },
            { text: "Du verstehst keine Anmachsprüche!", ending: 4, bad: true }
        ]
    },
    {
        id: 18,
        image: "bilder/Kellner.png",
        text: "Schwamm drüber! Was willst du bestellen?",
        choices: [
            { text: "Ich vertraue deinem Geschmack", nextScene: 19 },
            { text: "Geht dich nichts an", ending: 4, bad: true }
        ]
    },
    {
        id: 19,
        image: "bilder/Essen.png",
        text: "Und, hast du probiert?",
        choices: [
            { text: "Du hast wirklich Talent! Großartig!", nextScene: 20 },
            { text: "Hätte besser selbst bestellt...", ending: 4, bad: true }
        ]
    },
    {
        id: 20,
        image: "bilder/Rechnung.png",
        text: "Und die Rechnung kommt!",
        choices: [
            { text: "Ich kann dich nicht ohne Geschenk lassen!", nextScene: 7 },
            { text: "Du isst wie ein Elefant! Ich zahl das nicht", ending: 12, bad: true }
        ]
    },
    {
        id: 23,
        image: "bilder/Enttäuscht.png",
        text: "So wenig? Geizig...",
        choices: [
            { text: "War ein Scherz! Ich vertraue deinem Geschmack", nextScene: 24 },
            { text: "Du verlangst zu viel", ending: 4, bad: true }
        ]
    },
    {
        id: 24,
        image: "bilder/Essen.png",
        text: "Und wie ist es?",
        choices: [
            { text: "Lecker!", nextScene: 25 },
            { text: "Ich könnte kotzen...", ending: 4, bad: true }
        ]
    },
    {
        id: 25,
        image: "bilder/Rechnung.png",
        text: "Rechnung ist da!",
        choices: [
            { text: "Ich will mich entschuldigen – hier ein Geschenk!", nextScene: 7 },
            { text: "Ich zahl nur meinen Teil!", ending: 12, bad: true }
        ]
    },
    {
        id: 28,
        image: "bilder/Wütend.png",
        text: "Dann iss es nicht.",
        choices: [
            { text: "Ich wollte dich nicht beleidigen. Es war wirklich nicht lecker", nextScene: 29 },
            { text: "Dann ess ich's halt nicht...", ending: 4, bad: true }
        ]
    },
    {
        id: 29,
        image: "bilder/Rechnung.png",
        text: "Und hier ist die Rechnung!",
        choices: [
            { text: "Ich fühl mich schlecht – hier ein Geschenk zur Entschuldigung!", nextScene: 7 },
            { text: "Essen war schlecht, zahl selbst!", ending: 12, bad: true }
        ]
    },
    {
        id: 49,
        image: "bilder/Wütend.png",
        text: "Das war's! Ich gehe. Du bist unmöglich!",
        choices: [
            { text: "Neu starten", nextScene: 1 }
        ]
    }
];

const gifts = [
    { id: 1, name: "Rose", reaction: "Oh, wie romantisch!", image: "bilder/Geschenk1.png" },
    { id: 2, name: "Buch", reaction: "Du weißt, dass ich gern lese!", image: "bilder/Geschenk2.png" },
    { id: 3, name: "Plüschtier", reaction: "Wie süß, danke!", image: "bilder/Geschenk3.png" },
    { id: 4, name: "Schokolade", reaction: "Mmm, meine Lieblingssorte!", image: "bilder/Geschenk4.png" },
    { id: 5, name: "Halskette", reaction: "Wie schön, das hättest du nicht tun müssen...", image: "bilder/Geschenk5.png" }
];

const endings = {
    1: {
        title: "Nicht erschienen",
        text: "Jana hat vergeblich gewartet. Vielleicht beim nächsten Mal.",
        image: "bilder/Enttäuscht.png"
    },
    2: {
        title: "Erfolgreiches Date",
        text: "Du hast Jana nach Hause gebracht und einen guten Eindruck hinterlassen!",
        image: "bilder/Glücklich.png"
    },
    3: {
        title: "Alleine nach Hause",
        text: "Jana ist enttäuscht alleine gegangen. Das war wohl nichts.",
        image: "bilder/Enttäuscht.png"
    },
    4: {
        title: "Schlechtes Benehmen",
        text: "Dein unhöfliches Verhalten hat Jana vergrault. Versuche es beim nächsten Mal freundlicher.",
        image: "bilder/Wütend.png"
    },
    12: {
        title: "Geizhals",
        text: "Jana mag keine Geizhälse. Sie hat das Date früh beendet.",
        image: "bilder/Enttäuscht.png"
    },
    13: {
        title: "Herz gewonnen",
        text: "Das Plüschtier hat Jana besonders gerührt! Vielleicht gibt es ein zweites Date?",
        image: "bilder/Glücklich.png"
    }
};

function getGiftEnding(giftId) {
    return giftEndings[giftId] || null;
}