const scenes = [
    {
        image: "Frau-sitzt-allein.png", // Яна сидит одна, пустой стол, нет еды — ожидание
        text: "Jana wartet schon im Café. Was machst du?",
        choices: [
            { text: "Ich setze mich zu ihr und lächle", nextScene: 1 },
            { text: "Ich gehe einfach nicht rein", nextScene: 18 } // концовка "не пришёл"
        ]
    },
    {
        image: "Freundliche-Frau.png", // Улыбка, пустой стол — тёплое приветствие
        text: "Schön, dass du gekommen bist!",
        choices: [
            { text: "Ich hab mich auch gefreut", nextScene: 2 },
            { text: "Ich bin nur aus Langeweile hier", nextScene: 3, negative: true }
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png", // Появился официант с меню — всё идёт хорошо
        text: "Der Kellner bringt euch die Karte. Was sagst du?",
        choices: [
            { text: "Was möchtest du trinken?", nextScene: 4 },
            { text: "Ich bestell einfach für uns beide", nextScene: 5 }
        ]
    },
    {
        image: "mittel-Laune-Frau.png", // Она удивлена или разочарована
        text: "Aha. Ehrlich… aber nicht besonders charmant.",
        choices: [
            { text: "Tut mir leid, ich bin nervös", nextScene: 2 },
            { text: "Ich verschwende ungern Zeit", nextScene: 6, negative: true }
        ]
    },
    {
        image: "Freundliche-Frau.png", // Всё ещё хорошее настроение
        text: "Ich nehme einen Tee. Und du?",
        choices: [
            { text: "Ich nehme das Gleiche", nextScene: 7 },
            { text: "Ich trinke lieber nichts", nextScene: 6, negative: true }
        ]
    },
    {
        image: "mittel-Laune-Frau-mit-Kellner.png", // Официант подаёт напитки, Яна нейтральна
        text: "Interessant. Du nimmst einfach die Entscheidung?",
        choices: [
            { text: "Ich wollte dich überraschen", nextScene: 7 },
            { text: "Besser als langes Gerede", nextScene: 6, negative: true }
        ]
    },
    {
        image: "böse-Frau.png", // Яна недовольна — граница перед "слишком груб"
        text: "Weißt du, ich mag Ehrlichkeit, aber das ist zu viel.",
        choices: [
            { text: "Okay… dann ein kleines Geschenk zur Entschuldigung?", nextScene: 8 },
            { text: "Du übertreibst", nextScene: 19, negative: true } // три подряд — конец
        ]
    },
    {
        image: "Freundliche-Frau-mit-Kellner.png", // Сцена нейтрализации — подарок
        text: "Oh! Du hast mir was mitgebracht?",
        choices: [
            { text: "Ja. Schau mal!", nextScene: 9 },
            { text: "Das wirst du lieben", nextScene: 9 }
        ]
    },
    {
        image: "gift-screen.png", // Специальный экран выбора подарка
        text: "", // добавляется через engine
        choices: [] // заполняется динамически
    },
    {
        image: "geschenk1.png", // Подарок: розы — она счастлива
        text: "Oh mein Gott, wie schön! Danke dir!",
        choices: [
            { text: "Das hast du verdient", nextScene: 10 },
            { text: "Ich wollte dich glücklich machen", nextScene: 10 }
        ]
    },
    {
        image: "Freundliche-Frau.png", // После подарка — тёплая атмосфера
        text: "Ich bin froh, dass wir uns getroffen haben.",
        choices: [
            { text: "Ich auch. Vielleicht wiederholen wir das?", nextScene: 11 },
            { text: "War ein netter Abend", nextScene: 11 }
        ]
    },
    {
        image: "Freundliche-Frau.png", // Последний шаг — прощание
        text: "Dann sehen wir uns hoffentlich bald wieder.",
        choices: [
            { text: "Ganz sicher", nextScene: 17 },
            { text: "Mal sehen", nextScene: 6, negative: true }
        ]
    },
    {
        image: "geschenk2.png", // Подарок: шоколад — приятный сюрприз
        text: "Schokolade? Wie romantisch!",
        choices: [
            { text: "Du bist süßer als jede Schokolade", nextScene: 10 },
            { text: "Das war nicht teuer", nextScene: 6, negative: true }
        ]
    },
    {
        image: "geschenk3.png", // Подарок: ничего — она в замешательстве
        text: "Was war das denn? Das war doch gar kein Geschenk.",
        choices: [
            { text: "Ein Witz!", nextScene: 6, negative: true },
            { text: "Ich wollte testen, wie du reagierst", nextScene: 6, negative: true }
        ]
    },
    {
        image: "geschenk4.png", // Подарок: игрушка — она удивлена и радуется
        text: "Ohh! Ich liebe sowas. Du bist ja richtig trendy.",
        choices: [
            { text: "Nur das Beste!", nextScene: 10 },
            { text: "Dachte, das passt zu dir", nextScene: 10 }
        ]
    },
    {
        image: "geschenk5.png", // Подарок: кольцо — она счастлива
        text: "Was?! Ein Ring? ...Ja!!",
        choices: [
            { text: "Ich meine es ernst", nextScene: 17 },
            { text: "War 'n Scherz", nextScene: 6, negative: true }
        ]
    },
    {
        image: "Freundliche-Frau.png", // Счастливый финал
        text: "Das war ein wunderschöner Abend.",
        choices: [
            { text: "Bis bald!", nextScene: 17 },
            { text: "Schlaf gut!", nextScene: 17 }
        ]
    },

    {
        image: "Leer.png", // Пустой фон — если не пришёл
        text: "Jana hat gewartet… aber du bist nicht gekommen.",
        choices: [
            { text: "Zurück zur Startseite", nextScene: 0 }
        ]
    },

    {
        image: "Schwarzer-Bildschirm.png", // Экран гнева после 3 плохих ответов
        text: "Du warst zu unhöflich oder zu merkwürdig. Jana ist gegangen.",
        choices: [
            { text: "Zurück zur Startseite", nextScene: 0 }
        ]
    }
];
