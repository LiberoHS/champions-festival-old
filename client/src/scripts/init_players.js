/* This script is primarily only used to initialise players into the objects
to be exported for data use.
The class initialisation is included and the script will go through the
tournament list to insert any new occurrence of players. */

// var decks = require('../data/decks.js');
var tournaments = require('../data/tournaments.js');

//
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
        }
    }

    return 0;
};

// Class declaration for Player
class Player {
    constructor(name) {
        this.name = name;
        this.achievements = [];
        this.points = 0;
    }

    get achievementList() {
        var string = '';
        for (var i = 0; i < this.achievements.length; i++) {
            if (this.achievements[i].deck.includes('\'')) {}
            string += '{ date: "' + this.achievements[i].date + '", tournament: "' + this.achievements[i].tournament + '", cycle: "' + this.achievements[i].cycle
            string += '", deck: "' + this.achievements[i].deck + '", placing: ' + this.achievements[i].placing + ' },\n'
        }
        return string
    }

    // adds an achievement
    addAchievement(date, tournament, cycle, deck, placing) {
        this.achievements.push({date: date, tournament: tournament, cycle: cycle, deck: deck, placing: placing})
    }

    // deletes an achievement (WIP)
    deleteAchievement(tournament) {
        function remove(arr, value) {
            return arr.filter(function(ele){
                return ele != value;
            });
        }
        for (let i = 0; i < this.achievements.length; i++) {
            if (this.achievements[i].tournament === tournament) {
                this.achievements[i].remove()
            }
        }
    }

    addPoints(value) {
        this.points += value
    }
}

// Inputs all the players from all the tournaments into a PlayerList database
var PlayerList = []

// Iterates through each tournament and the standings
for (let i = 0; i < tournaments.length; i++) {
    tournaments[i].standings.map((player, key) => {
        var search = PlayerList.some(entry => entry.name === player.name);

        // If the player is already in the database
        if (search) {
        } else {
            PlayerList.push(new Player(player.name));
        }

        // Adds the achievement into the database
        PlayerList[PlayerList.findIndex(x => x.name === player.name)].addAchievement(tournaments[i].date, tournaments[i].name, tournaments[i].cycle, player.deck, player.placing);
        PlayerList[PlayerList.findIndex(x => x.name === player.name)].addPoints(calcPointPayout(tournaments[i], player));
    });
}

// Debugging purposes
// for (let j = 0; j < PlayerList.length; j++) {
//     if (PlayerList[j].name === 'Brent Tonisson' || PlayerList[j].name === 'Henry Brand')
//     console.log(PlayerList[j].achievements);
// }
// console.log(PlayerList.length)

var data = 'const players = [\n';
for (var i = 0; i < PlayerList.length; i++) {
    data += '{ name: "' + PlayerList[i].name + '",\nachievements: [' + PlayerList[i].achievementList + '], points: ' + PlayerList[i].points + ' },\n';
}

data += '];\n\nmodule.exports = players;'

var fs = require('fs');
fs.writeFile('../data/players.js', data, function (err, file) {
    if (err) throw err;
});
