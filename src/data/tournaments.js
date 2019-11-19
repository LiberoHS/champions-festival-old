// Template for tournament input
/* { name: "", date: moment("YYYY-MM-DD"), region: "", attendance: "", type: "", cycle: "", format: "",
standings: [
    { name: "", deck: "", placing: 1 },
    { name: "", deck: "", placing: 2 },
    { name: "", deck: "", placing: 3 },
    { name: "", deck: "", placing: 4 },
    { name: "", deck: "", placing: 5 },
    { name: "", deck: "", placing: 6 },
    { name: "", deck: "", placing: 7 },
    { name: "", deck: "", placing: 8 }
]}, */

var moment = require('moment');
moment.updateLocale('en', {
    week : {
        dow : 1,
        doy : 7
     }
});

const tournaments = [
    { name: "Baydragon LC", date: moment("2019-11-17"), region: "NZ", attendance: 18, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Jiawei Sun", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Yu Xiang", deck: "Doll Stall", placing: 2 },
        { name: "Layton Rumble", deck: "Arceus & Dialga & Palkia-GX / Spiritomb", placing: 3 },
        { name: "Vincent Ma", deck: "Blacephalon-GX / Naganadel", placing: 4 }
    ]},
    { name: "Moonah LC", date: moment("2019-11-17"), region: "TAS", attendance: 6, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 1 },
        { name: "David Stevens", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Jacob Gilham", deck: "Weezing Spread", placing: 3 },
        { name: "Matthew Oliver", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2019-11-17"), region: "NSW", attendance: 13, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Jeremy Evans", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Nick Bell", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Jordan Williams", deck: "Aerodactyl-GX", placing: 3 },
        { name: "Shane Quinn", deck: "Dusk Mane Necrozma-GX / Magnezone", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2019-11-16"), region: "NSW", attendance: 16, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Jake Cruwys", deck: "Weavile-GX Toolbox", placing: 1 },
        { name: "Jeremy Evans", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Shane Quinn", deck: "Dusk Mane Necrozma-GX / Magnezone", placing: 3 },
        { name: "Paul Coletta", deck: "Beheeyem", placing: 4 }
    ]},
    { name: "Hobart LC", date: moment("2019-11-16"), region: "TAS", attendance: 5, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 1 },
        { name: "William Farmilo", deck: "Arceus & Dialga & Palkia-GX", placing: 2 },
        { name: "Christopher Mathers", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Matthew Oliver", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Geelong LC", date: moment("2019-11-16"), region: "VIC", attendance: 11, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Te-Awhi Te Angina", deck: "Arceus & Dialga & Palkia-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Arceus & Dialga & Palkia-GX", placing: 2 },
        { name: "Benjamin Hall", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Luke Schmitt", deck: "Arceus & Dialga & Palkia-GX", placing: 4 }
    ]},
    { name: "Latin America International", date: moment("2019-11-15"), region: "BR", attendance: 726, type: "Internationals", cycle: "N/A", format: "UPR-CEC",
    standings: [
        { name: "Robin Schulz", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Bryan de Vries", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Giovanni Peragallo", deck: "Arceus & Dialga & Palkia-GX", placing: 3 },
        { name: "Lucas Gusso", deck: "Blacephalon-GX / Naganadel", placing: 4 },
        { name: "Ondrej Skubal", deck: "Doll Stall", placing: 5 },
        { name: "Gustavo Wada", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 6 },
        { name: "Victor Vieira", deck: "Arceus & Dialga & Palkia-GX", placing: 7 },
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 },
        { name: "Manuel Jorach", deck: "Baby Blacephalon / Pidgeotto", placing: 9 },
        { name: "Alessandro Cremascoli", deck: "Pidgeotto Control", placing: 10 },
        { name: "Owyn Kamerman", deck: "Baby Blacephalon / Pidgeotto", placing: 11 },
        { name: "Pedro Eugenio Torres", deck: "Arceus & Dialga & Palkia-GX", placing: 12 },
        { name: "Claudio Ferla", deck: "Gardevoir & Sylveon-GX", placing: 13 },
        { name: "Igor Costa", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 14 },
        { name: "Eder Jarillo", deck: "Reshiram & Charizard-GX Toolbox", placing: 15 },
        { name: "Tommi Lahtela", deck: "Doll Stall", placing: 16 },
        { name: "Rafael Yuiti", deck: "Mewtwo & Mew-GX Toolbox", placing: 17 },
        { name: "Douglas Castro", deck: "Pidgeotto Control", placing: 18 },
        { name: "Vitor Lugon", deck: "Pidgeotto Control", placing: 19 },
        { name: "Fabien Pujol", deck: "Arceus & Dialga & Palkia-GX", placing: 20 },
        { name: "Joao Santos", deck: "Blacephalon-GX / Naganadel", placing: 21 },
        { name: "Jimmy Pendarvis", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 22 },
        { name: "Daniel Abramovici", deck: "Charizard & Braixen-GX / Omastar", placing: 23 },
        { name: "Lucas Fabiano Maiola", deck: "Mewtwo & Mew-GX Toolbox", placing: 24 },
        { name: "Dyego Rathje", deck: "Malamar / Trevenant & Dusknoir-GX", placing: 25 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 26 },
        { name: "Patricia Gonzalez Walsh", deck: "Pidgeotto Control", placing: 27 },
        { name: "Stephane Ivanoff", deck: "Quagsire / Silvally-GX", placing: 28 },
        { name: "Otavio Gouveia", deck: "Arceus & Dialga & Palkia-GX", placing: 29 },
        { name: "Rahul Reddy", deck: "Mewtwo & Mew-GX Toolbox", placing: 30 },
        { name: "Emildo Andrade", deck: "Baby Blacephalon", placing: 31 },
        { name: "Pedro Giovannetti Marques Ricardo", deck: "Baby Blacephalon / Pidgeotto", placing: 32 },
        { name: "Diego Cassiraga", deck: "Arceus & Dialga & Palkia-GX", placing: 33 },
        { name: "Francesco Pasquale Caterino", deck: "Arceus & Dialga & Palkia-GX", placing: 34 },
        { name: "Rafael Santos", deck: "Baby Blacephalon / Pidgeotto", placing: 35 },
        { name: "Fabio Andrade", deck: "Arceus & Dialga & Palkia-GX", placing: 36 },
        { name: "Renato Christian", deck: "Malamar / Trevenant & Dusknoir-GX", placing: 37 },
        { name: "Gabriel Pino", deck: "Mewtwo & Mew-GX Toolbox", placing: 38 },
        { name: "Bruno Sermann", deck: "Gardevoir & Sylveon-GX", placing: 39 },
        { name: "Mateus Nathan Penido", deck: "Arceus & Dialga & Palkia-GX", placing: 40 },
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 41 },
        { name: "Vinicius Moschen", deck: "Arceus & Dialga & Palkia-GX / Hoopa", placing: 42 },
        { name: "Fabian Huerta", deck: "Pikachu & Zekrom-GX", placing: 43 },
        { name: "Romulo Vianna Zappelli de Oliveira", deck: "Arceus & Dialga & Palkia-GX", placing: 44 },
        { name: "Tiago Marins", deck: "Arceus & Dialga & Palkia-GX", placing: 45 },
        { name: "Alejo Salvador", deck: "Pidgeotto Control", placing: 46 },
        { name: "Andressa Nakahata Medrado", deck: "Mewtwo & Mew-GX Toolbox", placing: 47 },
        { name: "Giovani Rossato", deck: "Reshiram & Charizard-GX Toolbox", placing: 48 },
        { name: "Jon Eng", deck: "Mewtwo & Mew-GX Toolbox", placing: 49 },
        { name: "William Azevedo", deck: "Arceus & Dialga & Palkia-GX / Hoopa", placing: 50 },
        { name: "Matias Matricardi", deck: "Mewtwo & Mew-GX Toolbox", placing: 51 },
        { name: "Jimmy Marcus Munk", deck: "Arceus & Dialga & Palkia-GX", placing: 52 },
        { name: "Samuel Alves", deck: "Arceus & Dialga & Palkia-GX", placing: 53 },
        { name: "Vinicius La Padula", deck: "Arceus & Dialga & Palkia-GX", placing: 54 },
        { name: "Guilherme da Mata Pinho", deck: "Arceus & Dialga & Palkia-GX / Hoopa", placing: 55 },
        { name: "Leonardo Braga", deck: "Pikachu & Zekrom-GX", placing: 56 },
        { name: "Lucas Freitas", deck: "Quagsire / Naganadel", placing: 57 },
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 58 },
        { name: "Mehdi Hafi", deck: "Reshiram & Charizard-GX Toolbox", placing: 59 },
        { name: "Jelle van Kampen", deck: "Arceus & Dialga & Palkia-GX", placing: 60 },
        { name: "Rodrigo Nunez", deck: "Pikachu & Zekrom-GX", placing: 61 },
        { name: "Antonio Vitor Jardim", deck: "Pidgeotto Control", placing: 62 },
        { name: "Alex Schemanske", deck: "Reshiram & Charizard-GX Toolbox", placing: 63 },
        { name: "Maximiliano Lofredo", deck: "Arceus & Dialga & Palkia-GX", placing: 64 },
        { name: "Jose Orellana", deck: "Mewtwo & Mew-GX Toolbox", placing: 65 },
        { name: "Jean Claude Valdivieso", deck: "Green's Reshiram & Charizard-GX", placing: 66 },
        { name: "Joao Vidal", deck: "Arceus & Dialga & Palkia-GX / Hoopa", placing: 67 },
        { name: "Samuel Moro Jacques", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 68 },
        { name: "Gustavo Pastorin", deck: "Gardevoir & Sylveon-GX", placing: 69 },
        { name: "Mauricio Ricardo Reyes Rodriguez", deck: "", placing: 70 },
        { name: "Luigi Profeti", deck: "Gardevoir & Sylveon-GX", placing: 71 },
        { name: "Pedro Provenzi", deck: "Doll Stall", placing: 72 },
        { name: "Andre Pimenta", deck: "Charizard / Salazzle", placing: 73 },
        { name: "Stian Nilsso", deck: "Arceus & Dialga & Palkia-GX", placing: 74 },
        { name: "Diego Falcao", deck: "Reshiram & Charizard-GX Toolbox", placing: 75 },
        { name: "Gabriel Chighini", deck: "Baby Blacephalon", placing: 76 },
        { name: "Pedro Henrique Alves", deck: "", placing: 77 },
        { name: "Damian Riquel", deck: "Malamar / Solgaleo & Lunala-GX", placing: 78 },
        { name: "Darin O'Meara", deck: "Pidgeotto Control", placing: 79 },
        { name: "Vinicius Gomes", deck: "Mewtwo & Mew-GX Toolbox", placing: 80 },
        { name: "Jorge Recabal", deck: "Baby Blacephalon / Pidgeotto", placing: 81 },
        { name: "Gabriel Andrade", deck: "Arceus & Dialga & Palkia-GX", placing: 82 },
        { name: "Rodrigo Ciulla", deck: "Mewtwo & Mew-GX Toolbox", placing: 83 },
        { name: "Gabriel Kim", deck: "Mewtwo & Mew-GX Toolbox", placing: 84 },
        { name: "Andre Porto", deck: "Arceus & Dialga & Palkia-GX", placing: 85 },
        { name: "Mauricio Santana Luz", deck: "Quagsire / Naganadel", placing: 86 },
        { name: "Ramon Duarte", deck: "Mewtwo & Mew-GX Toolbox", placing: 87 },
        { name: "Lisandro Angelakis", deck: "Green's Reshiram & Charizard-GX", placing: 88 }
    ]},
    { name: "Table Top LC", date: moment("2019-11-10"), region: "SA", attendance: 12, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "Scott Langford", deck: "Baby Blacephalon", placing: 2 },
        { name: "Michael Atkinson", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Calvin Prosser", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Greensborough LC", date: moment("2019-11-10"), region: "VIC", attendance: 20, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Meng Hon Chow", deck: "Baby Blacephalon", placing: 1 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Alex Crockford", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Penrith LC", date: moment("2019-11-10"), region: "NSW", attendance: 15, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "James Cox", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Yiming Lin", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-11-10"), region: "QLD", attendance: 8, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Matthew Burris", deck: "Pidgeotto Control", placing: 1 },
        { name: "James Williams", deck: "Malamar / Giratina", placing: 2 },
        { name: "Duy Le", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Blake Troy", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "West City LC", date: moment("2019-11-10"), region: "NZ", attendance: 15, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Ash Nassiri", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Mike Nolan", deck: "Green's Ultra Beasts", placing: 2 },
        { name: "Ifran Nabi", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "York Robson", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: moment("2019-11-03"), region: "QLD", attendance: 12, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Kyle Beaumont", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Harrison Hodges", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Pokebar Cup", date: moment("2019-11-02"), region: "SG", attendance: 33, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Chew Jin Jian", deck: "Malamar / Giratina", placing: 1 },
        { name: "Clifton Goh", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Wong Jun Jek", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Jeremy Leong", deck: "Pidgeotto Control", placing: 4 },
        { name: "Tan Yong Siang", deck: "Trevenant & Dusknoir-GX / Mismagius", placing: 5 },
        { name: "Lee Hwee Liang", deck: "Reshiram & Charizard-GX Toolbox", placing: 6 },
        { name: "Fung Tze Ping", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Jit Min Lim", deck: "Pidgeotto Control", placing: 8 }
    ]},
    { name: "Wellington LC", date: moment("2019-11-02"), region: "NZ", attendance: 10, type: "League Challenge", cycle: "November", format: "UPR-HIF",
    standings: [
        { name: "Kenny Potter", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Jack Newman", deck: "Mewtwo & Mew-GX / Magnezone", placing: 2 },
        { name: "Emile Fox", deck: "Turtonator / Naganadel", placing: 3 },
        { name: "Eric Sanson", deck: "Blacephalon-GX / Naganadel", placing: 4 }
    ]},
    { name: "Bendigo LC", date: moment("2019-10-27"), region: "VIC", attendance: 9, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Benjamin Hall", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Jacob Sparks", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Area 52 LC", date: moment("2019-10-27"), region: "TAS", attendance: 4, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 1 },
        { name: "Matthew Oliver", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "David Stevens", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Remmi O'Rourke", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Mid Valley Cup", date: moment("2019-10-26"), region: "MY", attendance: 71, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Clifton Goh", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Aaron Lim", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Lee Keng Fai", deck: "Pidgeotto Control", placing: 3 },
        { name: "King Yang", deck: "Malamar / Giratina", placing: 4 },
        { name: "Syahmi Razak", deck: "Marshadow & Machamp-GX / Mismagius", placing: 5 },
        { name: "Ang Boon Shen", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Rinesh John", deck: "Baby Blacephalon / Pidgeotto", placing: 7 },
        { name: "Lawrence Choong", deck: "Reshiram & Charizard-GX Toolbox", placing: 8 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-10-26"), region: "QLD", attendance: 12, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Anthony Smith", deck: "Malamar / Giratina", placing: 2 },
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Hobart LC", date: moment("2019-10-24"), region: "TAS", attendance: 7, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Jaime McDonald", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 2 },
        { name: "Morgan Febey", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "David Stevens", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "Geelong LC", date: moment("2019-10-20"), region: "VIC", attendance: 16, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Joshua Bradley", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Marco Giovannini", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "Geelong Cup", date: moment("2019-10-20"), region: "VIC", attendance: 32, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Jay Tyrrell", deck: "Quagsire / Naganadel", placing: 1 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Nicholas Apostolou", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Kaiwen Cabbabe", deck: "Pidgeotto Control", placing: 4 },
        { name: "Darcy Ryan", deck: "Green's Reshiram & Charizard-GX", placing: 5 },
        { name: "Sameer Sangwan", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Angus Johnson", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Alex Crockford", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Adelaide Cup", date: moment("2019-10-20"), region: "SA", attendance: 24, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 2 },
        { name: "James Goreing", deck: "Green's Lucario & Melmetal-GX", placing: 3 },
        { name: "Aaron van der Kolk", deck: "Mewtwo & Mew-GX / Shedinja", placing: 4 },
        { name: "Greg Mcdowell", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Thomas McCawley", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Yasuyuki Handa", deck: "Green's Lucario & Melmetal-GX", placing: 7 },
        { name: "Scott Langford", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Penrith LC", date: moment("2019-10-20"), region: "NSW", attendance: 15, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Ying Hao Tou", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Brent Tonisson", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Top Ryde LC", date: moment("2019-10-20"), region: "NSW", attendance: 11, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Yiming Lin", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Shane Quinn", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "James Cox", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Cannington LC", date: moment("2019-10-20"), region: "WA", attendance: 9, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Daniel Ross-Brown", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Andrew Tandianus", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Greg Chin", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Stephen Kirk", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Baydragon LC", date: moment("2019-10-20"), region: "NZ", attendance: 16, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Brad Rumble", deck: "Whimsicott-GX", placing: 1 },
        { name: "Yu Xiang", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "York Robson", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Guysen Lang", deck: "Pidgeotto Control", placing: 4 }
    ]},
    { name: "Seaford LC", date: moment("2019-10-19"), region: "SA", attendance: 14, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Matthew Taverna", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Caleb Benn", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Sam Clayfield", deck: "Mewtwo & Mew-GX / Shedinja", placing: 3 },
        { name: "Aaron van der Kolk", deck: "Mewtwo & Mew-GX / Shedinja", placing: 4 }
    ]},
    { name: "Hobart Cup", date: moment("2019-10-19"), region: "TAS", attendance: 7, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 1 },
        { name: "Morgan Febey", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Jay Tyrrell", deck: "Quagsire / Naganadel", placing: 3 },
        { name: "William Farmilo", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: moment("2019-10-19"), region: "QLD", attendance: 11, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Riley Emblem", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Kyle Beaumont", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-10-19"), region: "VIC", attendance: 14, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Michael Bennett", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    { name: "West City LC", date: moment("2019-10-18"), region: "NZ", attendance: 13, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Matthew Chapman", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Ifran Nabi", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Ji Chen", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Dandenong LC", date: moment("2019-10-13"), region: "VIC", attendance: 12, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Darcy Ryan", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Nicholas Apostolou", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Benjamin Hall", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Adelaide LC", date: moment("2019-10-13"), region: "SA", attendance: 16, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "James Goreing", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Calvin Prosser", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Wesley Sheng", deck: "Quagsire / Naganadel", placing: 4 }
    ]},
    { name: "Project EXT Cup", date: moment("2019-10-12"), region: "SG", attendance: 48, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Clifton Goh", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Jit Min Lim", deck: "Pidgeotto Control", placing: 2 },
        { name: "Kashvinder Singh Mann", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Jeremy Leong", deck: "Malamar / Giratina", placing: 4 },
        { name: "Wayne Ng", deck: "Gardevoir & Sylveon-GX", placing: 5 },
        { name: "Edmund Khoo", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Bryan Chan", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Benjamin Teh", deck: "Reshiram & Charizard-GX Toolbox", placing: 8 }
    ]},
    { name: "Wellington Cup", date: moment("2019-10-12"), region: "NZ", attendance: 15, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Eric Sanson", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Finn McKeefry", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Sam Reynolds", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Lawson Maric", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2019-10-12"), region: "NSW", attendance: 13, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Anders Balle", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Wellington LC", date: moment("2019-10-05"), region: "NZ", attendance: 9, type: "League Challenge", cycle: "October", format: "UPR-HIF",
    standings: [
        { name: "Kenny Potter", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Emile Fox", deck: "Turtonator / Naganadel", placing: 2 },
        { name: "Amelia Hunter", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Eric Sanson", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Ballarat Cup", date: moment("2019-10-05"), region: "VIC", attendance: 32, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Luke Schmitt", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Pidgeotto Control", placing: 2 },
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Benjamin Hall", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Nicholas Apostolou", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Darcy Ryan", deck: "Blacephalon-GX / Naganadel", placing: 8 }
    ]},
    { name: "Penrith Cup", date: moment("2019-09-29"), region: "NSW", attendance: 49, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "James Cox", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Chengyong Luo", deck: "Welder Toolbox", placing: 3 },
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 4 },
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Jake Cruwys", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Corey Munro", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Yiming Lin", deck: "Gardevoir & Sylveon-GX", placing: 8 },
        { name: "Long Xiang Xiong", deck: "Pikachu & Zekrom-GX", placing: 9 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 10 },
        { name: "Mitchell Dowling", deck: "Beheeyem", placing: 11 },
        { name: "Shane Quinn", deck: "Mewtwo & Mew-GX Toolbox", placing: 12 },
        { name: "Mehul Gajwani", deck: "Blacephalon-GX / Naganadel", placing: 13 },
        { name: "Nick Bell", deck: "Reshiram & Charizard-GX Toolbox", placing: 14 },
        { name: "Anton Piccio", deck: "Reshiram & Charizard-GX Toolbox", placing: 15 },
        { name: "Miles Newton", deck: "Pikachu & Zekrom-GX", placing: 16 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-09-29"), region: "QLD", attendance: 9, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Matthew Burris", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Nicholas Moore", deck: "Mewtwo & Mew-GX / Shedinja", placing: 3 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Area 52 Cup", date: moment("2019-09-28"), region: "TAS", attendance: 9, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 1 },
        { name: "Ashley Kendall", deck: "Weavile-GX Toolbox", placing: 2 },
        { name: "Sean Gressie", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Christopher Mathers", deck: "Blacephalon-GX / Naganadel", placing: 4 }
    ]},
    { name: "Neo Tokyo Cup", date: moment("2019-09-28"), region: "QLD", attendance: 31, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Dominic Chow", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Max Prescott", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Jack Millar", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 },
        { name: "Jonathan Cheong", deck: "Blacephalon-GX / Naganadel", placing: 5 },
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "James Williams", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Brett Laird", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Seaford LC", date: moment("2019-09-28"), region: "SA", attendance: 15, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "Marco Di Pinto", deck: "Gengar & Mimikyu-GX / Omastar", placing: 2 },
        { name: "Joshua Courtney", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Alistair McGraw", deck: "Aegislash", placing: 4 }
    ]},
    { name: "Canberra LC", date: moment("2019-09-28"), region: "ACT", attendance: 18, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "James Cox", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Corey Munro", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Theodore Shen", deck: "Whimsicott-GX", placing: 4 }
    ]},
    { name: "Cannington LC", date: moment("2019-09-22"), region: "WA", attendance: 13, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Aaron Cole", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Andrew Tandianus", deck: "Keldeo-GX / White Kyurem", placing: 3 },
        { name: "Marco Giovannini", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "Table Top Cup", date: moment("2019-09-22"), region: "SA", attendance: 26, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "Wesley Sheng", deck: "Malamar / Garchomp & Giratina-GX", placing: 2 },
        { name: "Ryan Bielak", deck: "Malamar / Giratina", placing: 3 },
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 },
        { name: "Stefan Cocks", deck: "Quagsire / Naganadel", placing: 5 },
        { name: "Callum Walker", deck: "Malamar / Giratina", placing: 6 },
        { name: "Blake Wightman", deck: "Blacephalon-GX / Naganadel", placing: 7 },
        { name: "Louis Hutchinson", deck: "Quagsire / Naganadel", placing: 8 }
    ]},
    { name: "Gold Coast LC", date: moment("2019-09-22"), region: "QLD", attendance: 11, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Zachery Quince", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Jack Millar", deck: "Malamar / Giratina", placing: 2 },
        { name: "Kyle Beaumont", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2019-09-22"), region: "NSW", attendance: 14, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Anders Balle", deck: "Quagsire / Naganadel", placing: 3 },
        { name: "Jordan Williams", deck: "Quagsire / Naganadel", placing: 4 }
    ]},
    { name: "Top Ryde Cup", date: moment("2019-09-21"), region: "NSW", attendance: 29, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 2 },
        { name: "Shane Quinn", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Louis Pozzacchio", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Chengyong Luo", deck: "Reshiram & Charizard-GX Toolbox", placing: 5 },
        { name: "Yiming Lin", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Jack Underwood", deck: "Poipole Stall", placing: 7 },
        { name: "Blake Lobina", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Ormond Cup", date: moment("2019-09-21"), region: "VIC", attendance: 35, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Nicholas Apostolou", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Edward Mouanoutoua", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Shanan Kan", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 },
        { name: "Angus Johnson", deck: "Gardevoir & Sylveon-GX", placing: 5 },
        { name: "Luke Schmitt", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Michael Kan", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Gold Coast Cup", date: moment("2019-09-21"), region: "QLD", attendance: 32, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Kyle Beaumont", deck: "Poipole Stall", placing: 1 },
        { name: "Dominic Chow", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Corey Grimshaw", deck: "Breloom", placing: 3 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 4 },
        { name: "Nicholas Moore", deck: "Welder Toolbox", placing: 5 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Harrison Hodges", deck: "Green's Reshiram & Charizard-GX", placing: 7 },
        { name: "Blake Davies", deck: "Froslass / Lucario-GX", placing: 8 }
    ]},
    /* { name: "Bendigo LC", date: moment("2019-09-15"), region: "VIC", attendance: "", type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "James Brown", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Benjamin Hall", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Michael Zirnsak", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Michael Kan", deck: "", placing: 4 }
    ]}, */
    { name: "Bendigo Cup", date: moment("2019-09-15"), region: "VIC", attendance: 28, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Nicholas Apostolou", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Damian Filiposki", deck: "Pikachu & Zekrom-GX", placing: 4 },
        { name: "Huy Nguyen", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Ben Anderson", deck: "Reshiram & Charizard-GX Toolbox", placing: 6 },
        { name: "Tyson Maggio", deck: "Blacephalon-GX / Naganadel", placing: 7 },
        { name: "Jacob Sparks", deck: "Blacephalon-GX / Naganadel", placing: 8 }
    ]},
    { name: "West City Cup", date: moment("2019-09-15"), region: "NZ", attendance: 25, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Louis Chi", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Yu Xiang", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Layton Rumble", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Eddie Teahu", deck: "Gardevoir & Sylveon-GX", placing: 4 },
        { name: "Ifran Nabi", deck: "Blacephalon-GX / Naganadel", placing: 5 },
        { name: "Ash Nassiri", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Matthew Chapman", deck: "Malamar / Giratina", placing: 7 },
        { name: "Brad Rumble", deck: "Whimsicott-GX", placing: 8 }
    ]},
    { name: "Penang Cup", date: moment("2019-09-14"), region: "MY", attendance: 60, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Keith Yong", deck: "Quagsire / Naganadel", placing: 1 },
        { name: "Izmir Armani Istal Zani", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Colin Tang", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Farhan Aziz", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Jit Min Lim", deck: "Pidgeotto Control", placing: 5 },
        { name: "Wei Jie Fo", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Yee Wei Chun", deck: "Pidgeotto Control", placing: 7 },
        { name: "Clifton Goh", deck: "Reshiram & Charizard-GX Toolbox", placing: 8 }
    ]},
    { name: "Seaford Cup", date: moment("2019-09-14"), region: "SA", attendance: 17, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "Carol Poyner", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Matthew Taverna", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-09-14"), region: "VIC", attendance: 26, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Tom Tutone", deck: "Weavile-GX Toolbox", placing: 1 },
        { name: "Jay Tyrrell", deck: "Quagsire / Naganadel", placing: 2 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Angus Johnson", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 },
        { name: "Steven Filiposki", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Meng Hon Chow", deck: "Weavile-GX Toolbox", placing: 6 },
        { name: "Ben Tutone", deck: "Malamar / Giratina", placing: 7 },
        { name: "Jack Fone", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Wellington LC", date: moment("2019-09-14"), region: "NZ", attendance: 11, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "Duncan Inkster", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Finn McKeefry", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Javier Boswell", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Eric Sanson", deck: "Blacephalon-GX / Naganadel", placing: 4 }
    ]},
    { name: "Baydragon Cup", date: moment("2019-09-08"), region: "NZ", attendance: 24, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Louis Chi", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Jiawei Sun", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Jackie Su", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Yu Xiang", deck: "Malamar / Giratina", placing: 4 },
        { name: "Ji Chen", deck: "Malamar / Ultra Necrozma-GX", placing: 5 },
        { name: "Eddie Teahu", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Kelvin Cheung", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Tommy Xie", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Cannington Cup", date: moment("2019-09-08"), region: "WA", attendance: 10, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Stephen Kirk", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Andrew Tandianus", deck: "Malamar / Giratina", placing: 3 },
        { name: "Terrence Wong", deck: "Spiritomb / Froslass", placing: 4 },
    ]},
    { name: "Maitland Cup", date: moment("2019-09-08"), region: "NSW", attendance: 24, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 1 },
        { name: "Paul Coletta", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Brent Tonisson", deck: "Reshiram & Charizard-GX Toolbox", placing: 5 },
        { name: "Mitchell Dowling", deck: "Beheeyem", placing: 6 },
        { name: "Chuyao Zhou", deck: "Beheeyem", placing: 7 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 8 },
    ]},
    { name: "Adelaide LC", date: moment("2019-09-08"), region: "SA", attendance: 22, type: "League Challenge", cycle: "September", format: "UPR-HIF",
    standings: [
        { name: "James Goreing", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Matthew Taverna", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Singapore Cup", date: moment("2019-09-07"), region: "SG", attendance: 63, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Wei Jie Fo", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Jit Min Lim", deck: "Pidgeotto Control", placing: 2 },
        { name: "Bryan Chan", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Tan Jun Hao", deck: "Gardevoir & Sylveon-GX", placing: 4 },
        { name: "Joshua Zheng", deck: "Reshiram & Charizard-GX Toolbox", placing: 5 },
        { name: "Titally Tan", deck: "Reshiram & Charizard-GX Toolbox", placing: 6 },
        { name: "Clifton Goh", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Jeremy Leong", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Newcastle Cup", date: moment("2019-09-07"), region: "NSW", attendance: 38, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 1 },
        { name: "Shane Quinn", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 4 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Lucas Hamilton-Foster", deck: "Green's Reshiram & Charizard-GX", placing: 6 },
        { name: "Damian Lang", deck: "Malamar / Garchomp & Giratina-GX", placing: 7 },
        { name: "Blake Lobina", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Melbourne SPE", date: moment("2019-08-31"), region: "VIC", attendance: 127, type: "Special Event", cycle: "N/A", format: "UPR-UNM",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Carol Poyner", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Aaron Stringfellow", deck: "Reshiram & Charizard-GX Toolbox", placing: 6 },
        { name: "Jay Tyrrell", deck: "Quagsire / Naganadel", placing: 7 },
        { name: "Joshua Bradley", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
        { name: "Ashton Bradley", deck: "Blacephalon-GX / Naganadel", placing: 9 },
        { name: "Sameer Sangwan", deck: "Reshiram & Charizard-GX Toolbox", placing: 10 },
        { name: "Darcy Ryan", deck: "Blacephalon-GX / Naganadel", placing: 11 },
        { name: "Jack Millar", deck: "Reshiram & Charizard-GX Toolbox", placing: 12 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 13 },
        { name: "Nicholas Apostolou", deck: "Reshiram & Charizard-GX Toolbox", placing: 14 },
        { name: "James Cox", deck: "Naganadel-GX Checkmate", placing: 15 },
        { name: "Michael Kan", deck: "Pikachu & Zekrom-GX", placing: 16 },
        { name: "Mikaere Newey", deck: "Blastoise / Keldeo-GX", placing: 17 },
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 18 },
        { name: "Clifton Goh", deck: "Pikachu & Zekrom-GX", placing: 19 },
        { name: "Klive Aw", deck: "Reshiram & Charizard-GX Toolbox", placing: 20 },
        { name: "York Robson", deck: "Malamar / Garchomp & Giratina-GX", placing: 21 },
        { name: "Alex Crockford", deck: "Pikachu & Zekrom-GX", placing: 22 },
        { name: "Anders Balle", deck: "Quagsire / Naganadel", placing: 23 },
        { name: "Jack Fone", deck: "Mewtwo & Mew-GX Toolbox", placing: 24 },
        { name: "Tripp May", deck: "Baby Blacephalon", placing: 25 },
        { name: "Robin Sangwan", deck: "Pikachu & Zekrom-GX", placing: 26 },
        { name: "Edward Mouanoutoua", deck: "Reshiram & Charizard-GX Toolbox", placing: 27 },
        { name: "Ehren Roebuck", deck: "Reshiram & Charizard-GX Toolbox", placing: 28 },
        { name: "Ying Hao Tou", deck: "Reshiram & Charizard-GX Toolbox", placing: 29 },
        { name: "Benjamin Hall", deck: "Reshiram & Charizard-GX Toolbox", placing: 30 },
        { name: "Corey Munro", deck: "Mewtwo & Mew-GX Toolbox", placing: 31 },
        { name: "Naomi Murn", deck: "Reshiram & Charizard-GX Toolbox", placing: 32 }
    ]},
    { name: "Courtside Cup", date: moment("2019-08-25"), region: "PH", attendance: 45, type: "League Cup", cycle: "Quarter 1", format: "UPR-UNM",
    standings: [
        { name: "Adrian Velasco", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Adrian Acuzar", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Alexander Jason Macaraniag", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Antoni Acuzar", deck: "Green's Reshiram & Charizard-GX", placing: 4 },
        { name: "Joshua Doctolero", deck: "Green's Reshiram & Charizard-GX", placing: 5 },
        { name: "Paul Neilmer Feliciano", deck: "Blacephalon-GX / Naganadel", placing: 6 },
        { name: "Kenneth Chan", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
        { name: "Carlo Neria", deck: "Green's Reshiram & Charizard-GX", placing: 8 }
    ]},
    { name: "Adelaide LC", date: moment("2019-08-25"), region: "SA", attendance: 19, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "Aaron van der Kolk", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Carol Poyner", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Callum Walker", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Jon Gameau", deck: "Weavile-GX Toolbox", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: moment("2019-08-25"), region: "QLD", attendance: 18, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "James Williams", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "John Bishop", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Aaron Stringfellow", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-08-24"), region: "QLD", attendance: 18, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "Nicholas Moore", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Ehren Roebuck", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Jack Millar", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-08-24"), region: "VIC", attendance: 25, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Angus Johnson", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Ashton Bradley", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Adam Crust", deck: "Blacephalon-GX / Naganadel", placing: 4 },
        { name: "Joseph Tran", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Damian Filiposki", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Henry Brand", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Nicholas Apostolou", deck: "Reshiram & Charizard-GX Toolbox", placing: 8 }
    ]},
    { name: "DC Open Flight 2", date: moment("2019-08-17"), region: "US", attendance: 624, type: "Special Event", cycle: "N/A", format: "UPR-UNM",
    standings: [
        { name: "Sameer Sangwan", deck: "Pikachu & Zekrom-GX", placing: 71 },
        { name: "Ben Anderson", deck: "Reshiram & Charizard-GX Toolbox", placing: 81 },
        { name: "Benjamin Hall", deck: "Reshiram & Charizard-GX Toolbox", placing: 107 },
        { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 116 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 126 }
    ]},
    { name: "DC Open Flight 1", date: moment("2019-08-17"), region: "US", attendance: 599, type: "Special Event", cycle: "N/A", format: "UPR-UNM",
    standings: [
        { name: "Nicholas Moore", deck: "Gardevoir & Sylveon-GX", placing: 54 },
        { name: "James Williams", deck: "Mewtwo & Mew-GX Toolbox", placing: 78 },
        { name: "David Patane", deck: "Malamar / Ultra Necrozma-GX", placing: 84 },
        { name: "Blake Davies", deck: "Malamar / Giratina", placing: 85 },
        { name: "Alex Crockford", deck: "Pikachu & Zekrom-GX", placing: 102 },
        { name: "Aaron Cole", deck: "Baby Blacephalon", placing: 120 },
        { name: "Mitch Knuckey", deck: "Malamar / Giratina", placing: 126 }
    ]},
    { name: "Penrith LC", date: moment("2019-08-11"), region: "NSW", attendance: 7, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Mehul Gajwani", deck: "Donphan / Florges", placing: 1 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Nicole Manasan", deck: "Zoroark-GX / Greninja & Zoroark-GX", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2019-08-11"), region: "NSW", attendance: 7, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Paul Coletta", deck: "Weezing Spread", placing: 1 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Shane Quinn", deck: "Vileplume Stall", placing: 3 },
        { name: "Mitchell Dowling", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2019-08-10"), region: "NSW", attendance: 14, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Jake Cruwys", deck: "Zoroark-GX Checkmate", placing: 2 },
        { name: "Shane Quinn", deck: "Vileplume Stall", placing: 3 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Kuala Lumpur Cup", date: moment("2019-08-10"), region: "MY", attendance: 43, type: "League Cup", cycle: "Quarter 1", format: "SUM-UNB",
    standings: [
        { name: "Melvyn Lee", deck: "Zoroark-GX / Persian", placing: 1 },
        { name: "Izmir Armani", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Jinn Chung", deck: "Zygarde-GX", placing: 3 },
        { name: "Fabian Kenel", deck: "Zoroark-GX / Silvally-GX", placing: 4 },
        { name: "Syahmi Razak", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Rinesh John", deck: "Baby Blacephalon", placing: 6 },
        { name: "Alex Chee", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
        { name: "Ismat Myron", deck: "Malamar / Ultra Necrozma-GX", placing: 8 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-07-27"), region: "QLD", attendance: 9, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Zachery Quince", deck: "Baby Blacephalon", placing: 1 },
        { name: "Aaron Stringfellow", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Matthew Burris", deck: "Vileplume Stall", placing: 3 },
        { name: "Blake Troy", deck: "Vileplume Stall", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-07-20"), region: "VIC", attendance: 21, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Vileplume Stall", placing: 1 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Nicholas Apostolou", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Michael Kan", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2019-07-14"), region: "NSW", attendance: 10, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Hugh Masters", deck: "Beast Box", placing: 1 },
        { name: "Shang Chua", deck: "Baby Blacephalon", placing: 2 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
        { name: "Mitchell Dowling", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2019-07-13"), region: "NSW", attendance: 15, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Anton Piccio", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "James Cox", deck: "Zoroark-GX / Dewgong", placing: 3 },
        { name: "Jake Cruwys", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: moment("2019-07-13"), region: "QLD", attendance: 13, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Harrison Hodges", deck: "Zapdos / Ultra Beasts", placing: 1 },
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Kyle Beaumont", deck: "Zapdos / Ultra Beasts", placing: 3 },
        { name: "Jack Millar", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Penrith LC", date: moment("2019-07-07"), region: "NSW", attendance: 15, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Brent Tonisson", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
        { name: "Paul Coletta", deck: "Baby Blacephalon", placing: 2 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Joshua Stone", deck: "Malamar / Ultra Necrozma-GX", placing: 4 }
    ]}
];

// export default tournaments;
module.exports = tournaments;
