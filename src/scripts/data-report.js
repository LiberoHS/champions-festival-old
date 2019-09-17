// Use this script to generate a quick top 10 decks of the latest 10 tournaments.
var rl = require('readline-sync');
var tournaments = require('../data/tournaments.js');

function calcPointPayout(tournament, player) {
    // By CP
    /* if (tournament.type === 'League Challenge') {
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
    } */

    // By tournament weighting
    if (tournament.type === 'League Challenge') {
        if (player.placing === 1) {
            return 4;
        } else if (player.placing === 2) {
            return 3;
        } else if (player.placing <= 4) {
            return 2;
        } else if (player.placing <= 8) {
            return 1;
        }
    } else if (tournament.type === 'League Cup') {
        if (player.placing === 1) {
            return 12;
        } else if (player.placing === 2) {
            return 8;
        } else if (player.placing <= 4) {
            return 4;
        } else if (player.placing <= 8) {
            return 3;
        }
    } else if (tournament.type === 'Regionals' || tournament.type === 'Special Event') {
        if (player.placing === 1) {
            return 60;
        } else if (player.placing === 2) {
            return 50;
        } else if (player.placing <= 4) {
            return 40;
        } else if (player.placing <= 8) {
            return 30;
        } else if (player.placing <= 16) {
            return 20;
        } else if (player.placing <= 32) {
            return 10;
        } else if (player.placing <= 64) {
            return 5;
        } else if (player.placing <= 128) {
            return 4;
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

// reverses for consistent indexing
tournaments.reverse()

var DeckList = [];
// enter input
var startDate = rl.question("Enter start date: ");
var endDate = rl.question("Enter end date: ");

// initialises range array
var indexRange = [{index: 0, track: 0}, {index: 0, track: 0}];

// initialises ranges
for (let i = 0; i < tournaments.length; i++) {
    if (tournaments[i].date === startDate && indexRange[0].track === 0) {
        indexRange[0].index = i;
        indexRange[0].track = 1;
    } else if (i > 0) {
        if (tournaments[i-1].date === endDate && tournaments[i].date !== endDate) {
            indexRange[1].index = i;
            indexRange[1].track = 1;
            break;
        } else if (i == tournaments.length - 1) {
            indexRange[1].index = i;
            indexRange[1].track = 1;
        }
    }
}

// debugging
// console.log(startDate + " - " + endDate);
// console.log(tournaments);
console.log(indexRange[0].index + " - " + indexRange[1].index);

// Iterates through each tournament and the standings
for (let i = indexRange[0].index; i < indexRange[1].index; i++) {
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

        DeckList[DeckList.findIndex(x => x.deck === player.deck)].addCurrCP(calcPointPayout(tournaments[i], player));
        // DeckList[DeckList.findIndex(x => x.deck === player.deck)].addTotalCP(calcPointPayout(tournaments[i], player));
    });
}

// console.log(tournaments.slice(indexRange[0].index, indexRange[1].index))

// sorts the decks in order of currCP
DeckList.sort(function (a, b) {
    return b.currCP - a.currCP;
});

// console.log(DeckList);
// prints top 10 currCP decks
for (var j = 0; j < DeckList.length; j++) {
    console.log(DeckList[j].deck + ": " + DeckList[j].currCP);
}
