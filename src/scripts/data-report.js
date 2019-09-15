// Use this script to generate a quick top 10 decks of the latest 10 tournaments.

var tournaments = require('../data/tournaments.js');

function calcPointPayout(tournament, player) {
    if (tournament.type === 'League Challenge') {
        if (player.placing === 1) {
            return 15;
        } else if (player.placing === 2) {
            return 12;
        } else if (player.placing <= 4) {
            return 10;
        } else if (player.placing <= 8) {
            return 8;
        }
    } else if (tournament.type === 'League Cup') {
        if (player.placing === 1) {
            return 50;
        } else if (player.placing === 2) {
            return 40;
        } else if (player.placing <= 4) {
            return 32;
        } else if (player.placing <= 8) {
            return 25;
        }
    } else if (tournament.type === 'Regionals' || tournament.type === 'Special Event') {
        if (player.placing === 1) {
            return 200;
        } else if (player.placing === 2) {
            return 160;
        } else if (player.placing <= 4) {
            return 130;
        } else if (player.placing <= 8) {
            return 100;
        } else if (player.placing <= 16) {
            return 80;
        } else if (player.placing <= 32) {
            return 60;
        } else if (player.placing <= 64) {
            return 50;
        } else if (player.placing <= 128) {
            return 40;
        }
    }

    return 0;
};

// Class declaration for Deck
class Deck {
    constructor(deck) {
        this.deck = deck;
        this.totalCP = 0; // total CP earnt
        this.currCP = 0; // CP earnt in last 10 tournaments
    }

    get string() {
        var string = '';
        string += '{ deck: "' + this.deck + '", currCP: ' + this.currCP + ', totalCP: ' + this.totalCP + ' },\n'
        return string
    }

    addCurrCP(value) {
        this.currCP += value;
    }

    addTotalCP(value) {
        this.totalCP += value;
    }
}

var DeckList = [];

// Iterates through each tournament and the standings
for (let i = 0; i < tournaments.length; i++) {
    tournaments[i].standings.map((player, key) => {
        if (player.name === "") {
            return;
        }
        if (player.deck === "") {
            return;
        }

        var deckSearch = DeckList.some(entry => entry.deck === player.deck);
        if (deckSearch) {
        } else {
            DeckList.push(new Deck(player.deck));
        }

        if (i < 10) {
            DeckList[DeckList.findIndex(x => x.deck === player.deck)].addCurrCP(calcPointPayout(tournaments[i], player));
        }
        DeckList[DeckList.findIndex(x => x.deck === player.deck)].addTotalCP(calcPointPayout(tournaments[i], player));
    });
}

DeckList.sort(function (a, b) {
    return b.currCP - a.currCP;
});

for (var j = 0; j < 10; j++) {
    console.log(DeckList[j].deck + ": " + DeckList[j].currCP);
}
