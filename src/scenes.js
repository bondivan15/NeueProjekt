const scenes = [
    // Scene 0 - Start
    {
        image: "Frau-sitzt-allein.png",
        text: "Jana wartet schon auf dich.",
        choices: [
            { text: "Mich an den Tisch setzen und ihr ein Kompliment machen", nextScene: 1 },
            { text: "Nicht kommen", nextScene: 2 }
        ]
    },

    // Scene 1 - Kompliment
    {
        image: "Freundliche-Frau.png",
        text: "Hallo! Wie süß von dir!",
        choices: [
            { text: "Fragen, wie ihr Tag war", nextScene: 3 },
            { text: "Nichts sagen und den Kellner rufen", nextScene: 11 }
        ]
    },

    // Scene 2 - Nicht gekommen
    {
        image: "Leer.png",
        text: "Jana hat lange gewartet... aber du bist nie erschienen.",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 3 - Nach Tag fragen
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Gut! Sollen wir den Kellner rufen?",
        choices: [
            { text: "Klar, mein Schatz", nextScene: 4 },
            { text: "Bist du zufällig WLAN? Warum fühle ich dann so eine starke Verbindung?", nextScene: 17 }
        ]
    },

    // Scene 4 - Bestellung
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Da ist er ja! Was möchtest du?",
        choices: [
            { text: "Ich vertraue deinem Geschmack!", nextScene: 5 },
            { text: "Nur zwei Gläser Wasser bestellen", nextScene: 23 }
        ]
    },

    // Scene 5 - Geschmack
    {
        image: "Freundliche-Frau-mit-Essen.png",
        text: "Wie schmeckt es dir?",
        choices: [
            { text: "Absolut großartig! Voll ins Schwarze getroffen!", nextScene: 6 },
            { text: "Ehrlich? Nicht besonders lecker...", nextScene: 28 }
        ]
    },

    // Scene 6 - Rechnung
    {
        image: "Freundliche-Frau-mit-Rechnung.png",
        text: "Hier ist schon die Rechnung!",
        choices: [
            { text: "Ich habe noch eine Überraschung für dich!", nextScene: 7 },
            { text: "Zahlen wir getrennt?", nextScene: 32 }
        ]
    },

    // Scene 7 - Geschenkauswahl
    {
        image: "gift-screen.png",
        text: "",
        choices: []
    },

    // Scene 8 - Nach dem Geschenk
    {
        image: "Freundliche-Frau-mit-Geschenk.png",
        text: "Das war ein wundervoller Abend! Bringst du mich nach Hause?",
        choices: [
            { text: "Natürlich, Sonnenschein", nextScene: 9 },
            { text: "Geh besser alleine", nextScene: 10 }
        ]
    },

    // Scene 9 - Gutes Ende 1
    {
        image: "Happy-End.png",
        text: "Ihr hattet einen perfekten Abend! Vielleicht wird aus dieser Bekanntschaft noch etwas Ernsteres...",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 10 - Schlechtes Ende 1
    {
        image: "Enttäuschte-Frau.png",
        text: "Jana wirkt verletzt. Sie versteht nicht, warum du sie nicht nach Hause bringen wolltest.",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 11 - Nicht gesprochen
    {
        image: "mittel-Laune-Frau.png",
        text: "Du bist aber schweigsam heute...",
        choices: [
            { text: "Entschuldige, hatte einen schlechten Tag", nextScene: 12 },
            { text: "Das geht dich nichts an!", nextScene: 34 }
        ]
    },

    // Scene 12 - Entschuldigung
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Passiert! Was möchtest du bestellen?",
        choices: [
            { text: "Ich vertraue dir", nextScene: 13 },
            { text: "Warum ist dieses Restaurant so teuer?", nextScene: 34 }
        ]
    },

    // Scene 13 - Bewertung
    {
        image: "Freundliche-Frau-mit-Essen.png",
        text: "Und? Wie ist es?",
        choices: [
            { text: "Mmmm, köstlich!", nextScene: 14 },
            { text: "Meine Mutter kocht besser", nextScene: 33 }
        ]
    },

    // Scene 14 - Zweite Rechnung
    {
        image: "Freundliche-Frau-mit-Rechnung.png",
        text: "Hier kommt die Rechnung!",
        choices: [
            { text: "Für so eine Schönheit habe ich noch ein Geschenk", nextScene: 15 },
            { text: "Du hast viel gegessen - zahl selbst!", nextScene: 32 }
        ]
    },

    // Scene 15 - Zweites Geschenk
    {
        image: "Freundliche-Frau-mit-Geschenk.png",
        text: "Das war wirklich besonders! Bringst du mich nach Hause?",
        choices: [
            { text: "Klar, ich fahre dich in meinem neuen Porsche", nextScene: 16 },
            { text: "Nein, möchte ich nicht", nextScene: 10 }
        ]
    },

    // Scene 16 - Gutes Ende 2
    {
        image: "Happy-End.png",
        text: "Jana ist beeindruckt von deinem Charme und deinem Auto. Sie wird dich sicher wieder treffen wollen!",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 17 - WLAN-Kommentar
    {
        image: "Verwirrte-Frau.png",
        text: "Ähm... was?",
        choices: [
            { text: "Hat dir das nicht gefallen? Entschuldige", nextScene: 18 },
            { text: "Du verstehst nichts von Anmachsprüchen!", nextScene: 34 }
        ]
    },

    // Scene 18 - Nach Entschuldigung
    {
        image: "Freundliche-Frau-mit-Kellner.png",
        text: "Schon gut! Was möchtest du bestellen?",
        choices: [
            { text: "Ich vertraue dir", nextScene: 19 },
            { text: "Das geht dich nichts an", nextScene: 34 }
        ]
    },

    // Scene 19 - Dritte Bewertung
    {
        image: "Freundliche-Frau-mit-Essen.png",
        text: "Geschmeckt?",
        choices: [
            { text: "Du hast verstecktes Talent! Fantastisch!", nextScene: 20 },
            { text: "Hätte mir lieber selbst was bestellt...", nextScene: 34 }
        ]
    },

    // Scene 20 - Dritte Rechnung
    {
        image: "Freundliche-Frau-mit-Rechnung.png",
        text: "Da ist die Rechnung!",
        choices: [
            { text: "Dich ohne Geschenk zu lassen wäre falsch", nextScene: 21 },
            { text: "Du isst wie ein Elefant - ich zahle nicht!", nextScene: 32 }
        ]
    },

    // Scene 21 - Drittes Geschenk
    {
        image: "Freundliche-Frau-mit-Geschenk.png",
        text: "Wirklich ein toller Abend! Bringst du mich nach Hause?",
        choices: [
            { text: "Klar, ich nehme dich mit dem Uber mit", nextScene: 22 },
            { text: "Nein, möchte ich nicht", nextScene: 10 }
        ]
    },

    // Scene 22 - Gutes Ende 3
    {
        image: "Happy-End.png",
        text: "Trotz des holprigen Starts hat Jana den Abend genossen. Vielleicht schreibt sie dir bald wieder!",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 23 - Wasser bestellt
    {
        image: "Verärgerte-Frau.png",
        text: "Nur Wasser? Bist du geizig?",
        choices: [
            { text: "War nur ein Scherz! Ich vertraue dir", nextScene: 24 },
            { text: "Du willst zu viel", nextScene: 34 }
        ]
    },

    // Scene 24 - Nach Scherz
    {
        image: "Freundliche-Frau-mit-Essen.png",
        text: "Und? Wie ist es?",
        choices: [
            { text: "Sehr lecker!", nextScene: 25 },
            { text: "Da bekomme ich Sodbrennen...", nextScene: 34 }
        ]
    },

    // Scene 25 - Vierte Rechnung
    {
        image: "Freundliche-Frau-mit-Rechnung.png",
        text: "Hier ist die Rechnung!",
        choices: [
            { text: "Ich möchte mich entschuldigen - hier ein Geschenk", nextScene: 26 },
            { text: "Ich zahle nur meinen Teil!", nextScene: 32 }
        ]
    },

    // Scene 26 - Viertes Geschenk
    {
        image: "Freundliche-Frau-mit-Geschenk.png",
        text: "Das war ein besonderer Abend! Bringst du mich nach Hause?",
        choices: [
            { text: "Natürlich, ich bringe dich", nextScene: 27 },
            { text: "Ich bin müde", nextScene: 10 }
        ]
    },

    // Scene 27 - Neutrales Ende
    {
        image: "Neutrale-Frau.png",
        text: "Jana hatte Spaß, aber dein schlechter Scherz am Anfang war nicht besonders charmant.",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 28 - Essen nicht gemocht
    {
        image: "Verärgerte-Frau.png",
        text: "Dann iss halt nicht!",
        choices: [
            { text: "Ich wollte dich nicht verletzen! Es schmeckt wirklich nicht", nextScene: 29 },
            { text: "Dann esse ich eben nicht", nextScene: 34 }
        ]
    },

    // Scene 29 - Fünfte Rechnung
    {
        image: "Freundliche-Frau-mit-Rechnung.png",
        text: "Hier ist die Rechnung!",
        choices: [
            { text: "Das Essen war nicht gut, hier ein Entschuldigungsgeschenk", nextScene: 30 },
            { text: "Das Essen war schlecht - zahl selbst!", nextScene: 32 }
        ]
    },

    // Scene 30 - Fünftes Geschenk
    {
        image: "Freundliche-Frau-mit-Geschenk.png",
        text: "Trotz allem ein schöner Abend! Bringst du mich nach Hause?",
        choices: [
            { text: "Natürlich, ich bringe dich", nextScene: 31 },
            { text: "Ich habe einen Zahnarzttermin! Sorry", nextScene: 10 }
        ]
    },

    // Scene 31 - Neutrales Ende 2
    {
        image: "Neutrale-Frau.png",
        text: "Jana hatte Spaß, aber deine Kritik am Essen hat sie verunsichert.",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 32 - Geizig
    {
        image: "Wütende-Frau.png",
        text: "Meine Güte! Bist du geizig!",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 33 - Mutter-Kommentar
    {
        image: "Wütende-Frau.png",
        text: "Dann geh doch mit deiner Mutter aus!",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    },

    // Scene 34 - Unhöflich
    {
        image: "Wütende-Frau.png",
        text: "Wie unhöflich! Ich gehe!",
        choices: [
            { text: "Neustart", nextScene: 0 }
        ]
    }
];