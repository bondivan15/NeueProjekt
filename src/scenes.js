const scenes = [
    {
        image: "Frau-sitzt-allein.png",
        text: "Du stehst vor dem Café? Jana wartet schon? Was machst du?",
        choices: [
            { text: "Du gehst hinein und setzt dich zu ihr", nextScene: 1 },
            { text: "Du gehst einfach nicht hinein", nextScene: 29 }
        ]
    },
    {
        image: "FreundlicheFrauMitLeerTisch.png",
        text: "Jana lächelt. Ich habe schon gedacht, du kommst nicht?",
        choices: [
            { text: "Ich hätte dich doch nie sitzen gelassen", nextScene: 2 },
            { text: "Ich habe echt überlegt, ob ich komme", nextScene: 3 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Sie lacht. Na gut, du bist ja da",
        choices: [
            { text: "Ein charmantes Kompliment machen", nextScene: 4 },
            { text: "Fragen, wie ihr Tag war", nextScene: 5 }
        ]
    },
    {
        image: "mittel-Laune-Frau.png",
        text: "Sie runzelt die Stirn. Aha. Ehrlich bist du zumindest",
        choices: [
            { text: "Ich bin halt nervös", nextScene: 4 },
            { text: "Ich verschwende ungern Zeit", nextScene: 6 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Sie lächelt. Du bist ja richtig süß, wenn du willst",
        choices: [
            { text: "Der Kellner kommt – etwas für euch beide bestellen", nextScene: 7 },
            { text: "Fragen, was sie gerne essen möchte", nextScene: 7 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Mein Tag war entspannt – aber ich hatte den Kopf voll mit diesem Treffen",
        choices: [
            { text: "Ich hab mich auch echt gefreut", nextScene: 4 },
            { text: "Und trotzdem bist du gekommen?", nextScene: 6 }
        ]
    },
    {
        image: "Sehr-böse-Frau-mit-Essen.png",
        text: "Jana schaut dich ernst an. STOPP! Hört das jetzt mal auf mit dem Unfreundlichen. Sie steht auf und geht",
        choices: [
            { text: "Neu starten", nextScene: 0 }
        ]
    },
    {
        image: "Frau-mit-Speisekarte.png",
        text: "Der Kellner bringt die Speisekarten. Jana schaut dich erwartungsvoll an",
        choices: [
            { text: "Fragen: Was bestellst du? Ich nehme das gleiche", nextScene: 8 },
            { text: "Einfach zwei Gläser Wasser bestellen", nextScene: 9 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Oh, das ist süß. Ich hoffe, du magst Pasta",
        choices: [
            { text: "Lächeln und sagen: Klar – besonders mit dir", nextScene: 10 },
            { text: "Fragen: Wenn du aussuchen könntest – Pizza oder Sushi?", nextScene: 11 }
        ]
    },
    {
        image: "ein-bisschen-böse-Frau-mit-Essen.png",
        text: "Sie schaut irritiert. Nur Wasser? Wirklich?",
        choices: [
            { text: "Ich wollte dich überraschen mit einem Geschenk", nextScene: 12 },
            { text: "Ich trink eh nie was anderes", nextScene: 6 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Sie grinst. Du bist charmant. Gefährlich charmant",
        choices: [
            { text: "Dann brauchst du einen Talisman (gib ihr ein Geschenk)", nextScene: 12 },
            { text: "Dann pass gut auf dich auf heute", nextScene: 13 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Du gibst ihr ein kleines Geschenk. Ihre Augen leuchten",
        choices: [
            { text: "Nur eine Kleinigkeit. Du hast’s verdient", nextScene: 13 },
            { text: "Ein Date ohne Überraschung ist wie Pizza ohne Käse", nextScene: 13 }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Jana lächelt zufrieden. Das war ein schöner Abend",
        choices: [
            { text: "Dann sehen wir uns wieder?", nextScene: 14 },
            { text: "Ich hoffe, du denkst an mich", nextScene: 14 }
        ]
    },
    {
        image: "Traurige-Frau-mit-Essen.png",
        text: "Sie nickt. Ganz sicher — ENDE",
        choices: [
            { text: "Neu starten", nextScene: 0 }
        ]
    },
    {
        image: "Leer.png",
        text: "Du hast Jana sitzen lassen. Vielleicht beim nächsten Mal",
        choices: [
            { text: "Zurück zur Startseite", nextScene: 0 }
        ]
    },
    {
        image: "Freundliche-Frau.png",
        text: "Letzte Szene: Ihr verlasst das Café und sie schaut dich noch einmal an. Wie beendest du das Date?",
        choices: [
            { text: "Mit einer herzlichen Umarmung", nextScene: 13 },
            { text: "Mit einem Witz und einem Lächeln", nextScene: 13 }
        ]
    },
    {
        image: "Frau-zahlt.png",
        text: "Der Kellner bringt die Rechnung. Jana schaut dich an.",
        choices: [
            { text: "Ich übernehme das gerne.", nextScene: 18 },
            { text: "Wollen wir teilen?", nextScene: 19 }
        ]
    },
    {
        image: "Lächelnde-Frau.png",
        text: "Sie lächelt. Das ist sehr höflich von dir.",
        choices: [
            { text: "Ein Gentleman verschwindet nie.", nextScene: 20 },
            { text: "Ich finde, das gehört sich so.", nextScene: 20 }
        ]
    },
    {
        image: "Neutrale-Frau.png",
        text: "Sie nickt langsam. Okay, wie du meinst.",
        choices: [
            { text: "Ich meinte das nicht böse.", nextScene: 20 },
            { text: "Gleichberechtigung oder?", nextScene: 6 }
        ]
    },
    {
        image: "Draußen-lächelnd.png",
        text: "Ihr steht draußen. Es ist etwas kühl.",
        choices: [
            { text: "Deine Jacke anbieten", nextScene: 21 },
            { text: "Fragen: Sollen wir noch spazieren?", nextScene: 22 }
        ]
    },
    {
        image: "Dankbare-Frau.png",
        text: "Danke, das ist lieb von dir.",
        choices: [
            { text: "Du bist es wert.", nextScene: 23 },
            { text: "Ich bin halt ein Klassiker.", nextScene: 23 }
        ]
    },
    {
        image: "Spaziergang.png",
        text: "Ihr geht ein paar Schritte gemeinsam.",
        choices: [
            { text: "Hand nehmen", nextScene: 24 },
            { text: "Über die Sterne reden", nextScene: 25 }
        ]
    },
    {
        image: "Berührte-Frau.png",
        text: "Sie lässt es zu. Das fühlt sich gut an.",
        choices: [
            { text: "Ich wollte diesen Moment.", nextScene: 26 },
            { text: "Schön, dass du da bist.", nextScene: 26 }
        ]
    },
    {
        image: "Sterne.png",
        text: "Sie schaut nach oben. Magisch.",
        choices: [
            { text: "Du bist schöner als der Himmel.", nextScene: 26 },
            { text: "Ich wünschte, dieser Moment bleibt.", nextScene: 26 }
        ]
    },
    {
        image: "Lächelnde-Frau.png",
        text: "Sie schaut dich ruhig an.",
        choices: [
            { text: "Darf ich dich küssen?", nextScene: 27 },
            { text: "Ich will dich nicht überrumpeln.", nextScene: 28 }
        ]
    },
    {
        image: "Kuss.png",
        text: "Ihr küsst euch zärtlich. Ein perfekter Moment.",
        choices: [
            { text: "Ende mit einem Kuss", nextScene: 14 }
        ]
    },
    {
        image: "Verabschiedung.png",
        text: "Sie umarmt dich sanft. Es war schön heute.",
        choices: [
            { text: "Bis bald, Jana", nextScene: 14 }
        ]
    },
    {
        image: "Leer.png",
        text: "Du hast Jana sitzen lassen. Vielleicht beim nächsten Mal",
        choices: [
            { text: "Zurück zur Startseite", nextScene: 0 }
        ]
    }
];