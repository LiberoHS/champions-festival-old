// Use this script to generate a quick top 10 decks of the latest 10 tournaments.
var rl = require('readline-sync');
var tournaments = require('../data/tournaments.js');

function calcPointPayout(tournament, player, mode) {
    // By CP
    if (mode === "CP") {
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
            } else if (player.placing <= 16) {
                return 20;
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
        } else if (tournament.type === 'Internationals') {
            if (player.placing === 1) {
                return 500;
            } else if (player.placing === 2) {
                return 400;
            } else if (player.placing <= 4) {
                return 320;
            } else if (player.placing <= 8) {
                return 250;
            } else if (player.placing <= 16) {
                return 200;
            } else if (player.placing <= 32) {
                return 160;
            } else if (player.placing <= 64) {
                return 130;
            } else if (player.placing <= 128) {
                return 100;
            }
        }
    }

    // By tournament weighting
    else if (mode === "WEIGHT") {
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
        } else if (tournament.type === 'Internationals') {
            if (player.placing === 1) {
                return 150;
            } else if (player.placing === 2) {
                return 120;
            } else if (player.placing <= 4) {
                return 90;
            } else if (player.placing <= 8) {
                return 60;
            } else if (player.placing <= 16) {
                return 45;
            } else if (player.placing <= 32) {
                return 30;
            } else if (player.placing <= 64) {
                return 20;
            } else if (player.placing <= 128) {
                return 10;
            }
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
// tournaments.reverse()

// initialising ranges
var DeckList = [[],[],[],[],[]];
var lastSixWeeks = [
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
    {dayStart: 0, dayEnd: 0, indexStart: 0, indexEnd: 0},
];

// fills last 6 weeks with tournament data
let count = tournaments[0].date.weeks();
let k = 0;
lastSixWeeks[k].dayStart = tournaments[0].date;
for (let i = 0; i < tournaments.length && k < 6; i++) {
    if (tournaments[i].date.weeks() >= count) {

    } else {
        lastSixWeeks[k].indexEnd = i;
        lastSixWeeks[k].dayEnd = tournaments[i-1].date;
        k += 1;
        count--;
        if (k < 6) {
            lastSixWeeks[k].indexStart = i;
            lastSixWeeks[k].dayStart = tournaments[i].date;
        } else {
            break;
        }
    }
}

// debugging
console.log(lastSixWeeks)
for (i = 0; i < 5; i++) {
    console.log(i + ": " + lastSixWeeks[i].indexStart + " " + lastSixWeeks[i+1].indexEnd);
    // console.log(tournaments.slice(lastSixWeeks[i].indexStart,lastSixWeeks[i+1].indexEnd));
}

// Iterates through each tournament and the standings
for (i = 0; i < 5; i++) {
    for (j = lastSixWeeks[i].indexStart; j < lastSixWeeks[i+1].indexEnd; j++) {
        tournaments[j].standings.map((player, key) => {
            if (player.name === "") {
                return;
            }
            if (player.deck === "") {
                return;
            }

            var deckSearch = DeckList[i].some(entry => entry.deck === player.deck);
            if (deckSearch) {
            } else {
                DeckList[i].push(new Deck(player.deck));
            }

            DeckList[i][DeckList[i].findIndex(x => x.deck === player.deck)].addCurrCP(calcPointPayout(tournaments[j], player, "CP"));
            // DeckList[DeckList.findIndex(x => x.deck === player.deck)].addTotalCP(calcPointPayout(tournaments[i], player));
        });
    }
}

DeckList.reverse();

// sorts the decks in order of currCP
for (i = 0; i < DeckList.length; i++) {
    DeckList[i].sort(function (a, b) {
        return b.currCP - a.currCP;
    });
}

// prints top 5 currCP decks (every 2 weeks range)
for (j = 0; j < 5; j++) {
    for (i = 0; i < 5; i++) {
        console.log(DeckList[j][i].deck + ": " + DeckList[j][i].currCP);
    }
    console.log("")
}

var data = "var lastSixWeeks = [\n";

for (i = 0; i < 6; i++) {
    data += "{ dayStart: \"" + lastSixWeeks[i].dayStart.format("DD/MM/YY") + "\", dayEnd: \"" + lastSixWeeks[i].dayEnd.format("DD/MM/YY") + "\", indexStart: " + lastSixWeeks[i].indexStart + ", indexEnd: " + lastSixWeeks[i].indexEnd + "},\n";
}

data += "];\n\n";
data += "var DeckList = [\n";

for (j = 0; j < 5; j++) {
    data += "[\n"
    for (i = 0; i < DeckList[j].length; i++) {
        data += "{ deck: \"" + DeckList[j][i].deck + "\", currCP: " + DeckList[j][i].currCP + " },\n";
    }
    data += "],\n"
}

data += "];\n\n";

data += "module.exports = {\n   lastSixWeeks: lastSixWeeks,\n   DeckList: DeckList\n};"

var fs = require('fs');
fs.writeFile('../data/report.js', data, function (err, file) {
    if (err) throw err;
});
