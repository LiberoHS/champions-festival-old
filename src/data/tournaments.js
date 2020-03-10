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
    { name: "Spellbound LC", date: moment("2020-03-08"), region: "NZ", attendance: 13, type: "League Challenge", cycle: "March", format: "UPR-SWS",
    standings: [
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Johnny Jiang", deck: "Cinccino Mill", placing: 2 },
        { name: "Guysen Lang", deck: "ADP / Zacian V", placing: 3 },
        { name: "Mikaere Newey", deck: "Turbo Lapras V", placing: 4 }
    ]},
    { name: "Table Top LC", date: moment("2020-03-08"), region: "SA", attendance: 17, type: "League Challenge", cycle: "March", format: "UPR-SWS",
    standings: [
        { name: "Jordan Palmer", deck: "Ultimate Mewtwo & Mew-GX", placing: 1 },
        { name: "Sam Clayfield", deck: "Ultimate Mewtwo & Mew-GX", placing: 2 },
        { name: "Adrian Hammer", deck: "Baby Blacephalon", placing: 3 },
        { name: "Mitch Knuckey", deck: "ADP / Zacian V", placing: 4 }
    ]},
    { name: "Top Ryde Cup", date: moment("2020-03-08"), region: "NSW", attendance: 26, type: "League Cup", cycle: "Quarter 3", format: "UPR-SWS",
    standings: [
        { name: "Robert Spiller", deck: "ADP / Zacian V", placing: 1 },
        { name: "Jack Millar", deck: "Malamar / Giratina", placing: 2 },
        { name: "Anton Piccio", deck: "Baby Blacephalon", placing: 3 },
        { name: "Lucas Hamilton-Foster", deck: "ADP / Zacian V", placing: 4 },
        { name: "Nathan Canty-Seghers", deck: "Unown Hand / Salazzle", placing: 5 },
        { name: "Louis Pozzacchio", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Cherakee Brennan", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Alec Elhindi", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Cerberus LC", date: moment("2020-03-07"), region: "NZ", attendance: 8, type: "League Challenge", cycle: "March", format: "UPR-SWS",
    standings: [
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Johnny Jiang", deck: "Cinccino Mill", placing: 2 },
        { name: "Guysen Lang", deck: "ADP / Zacian V", placing: 3 },
        { name: "Mikaere Newey", deck: "Turbo Lapras V", placing: 4 }
    ]},
    { name: "Baydragon LC", date: moment("2020-02-29"), region: "NZ", attendance: 11, type: "League Challenge", cycle: "February", format: "UPR-SWS",
    standings: [
        { name: "York Robson", deck: "ADP / Zacian V", placing: 1 },
        { name: "Jiawei Sun", deck: "Cinccino Mill", placing: 2 },
        { name: "Mike Nolan", deck: "Turbo Lapras V", placing: 3 },
        { name: "Ivan Deng", deck: "Morpeko Dolls", placing: 4 }
    ]},
    /* { name: "Neo Tokyo LC", date: moment("2020-02-29"), region: "QLD", attendance: 4, type: "League Challenge", cycle: "February", format: "UPR-SWS",
    standings: [
        { name: "", deck: "Obstagoon", placing: 1 },
        { name: "Nicholas Moore", deck: "Malamar / Mewtwo & Mew-GX", placing: 2 },
        { name: "", deck: "Baby Blacephalon", placing: 3 },
        { name: "Matthew Burris", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Area 52 LC", date: moment("2020-02-28"), region: "TAS", attendance: "", type: "League Challenge", cycle: "February", format: "UPR-SWS",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "OCIC LC", date: moment("2020-02-23"), region: "VIC", attendance: 32, type: "League Challenge", cycle: "February", format: "UPR-SWS",
    standings: [
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Isaiah Bradner", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Yoshiyuki Yamaguchi", deck: "Zacian V", placing: 3 },
        { name: "Rowan Farren", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Brady Guy", deck: "", placing: 5 },
        { name: "Francesco Caterino", deck: "ADP / Zacian V", placing: 6 },
        { name: "Owyn Kamerman", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Pedro Eugenio Torres", deck: "ADP / Zacian V", placing: 8 }
    ]},
    { name: "OCIC Cup", date: moment("2020-02-22"), region: "VIC", attendance: 123, type: "League Cup", cycle: "Quarter 2", format: "UPR-SWS",
    standings: [
        { name: "Josh Lemmon", deck: "Magcargo-GX", placing: 1 },
        { name: "Eric Sanson", deck: "ADP / Zacian V", placing: 2 },
        { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Matthew Burris", deck: "ADP / Zacian V", placing: 4 },
        { name: "Brent Tonisson", deck: "Reshiram & Charizard-GX Toolbox", placing: 5 },
        { name: "Man Kin Ho", deck: "Malamar / Mewtwo & Mew-GX", placing: 6 },
        { name: "Mads Jensen", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Jesper Eriksen", deck: "ADP / Zacian V", placing: 8 }
    ]},
    { name: "Oceania International", date: moment("2020-02-21"), region: "VIC", attendance: 405, type: "Internationals", cycle: "N/A", format: "UPR-SWS",
    standings: [
        { name: "Nico Alabas", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Zach Lesage", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Tim Bartels", deck: "Obstagoon", placing: 3 },
        { name: "James Williams", deck: "Cinccino Mill", placing: 4 },
        { name: "Bert Wolters", deck: "ADP / Zacian V", placing: 5 },
        { name: "Ian Robb", deck: "ADP / Zacian V", placing: 6 },
        { name: "Tord Reklev", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Jack Millar", deck: "ADP / Zacian V", placing: 8 },
        { name: "Clifton Goh", deck: "ADP / Zacian V", placing: 9 },
        { name: "Soma Arai", deck: "Magcargo Mill", placing: 10 },
        { name: "Tan Yong Siang", deck: "Baby Blacephalon", placing: 11 },
        { name: "Andrew Tandianus", deck: "ADP / Zacian V", placing: 12 },
        { name: "Takuya Shomura", deck: "ADP / Zacian V", placing: 13 },
        { name: "Daniel Altavilla", deck: "Malamar / Giratina", placing: 14 },
        { name: "Jon Eng", deck: "Pikachu & Zekrom-GX", placing: 15 },
        { name: "Man Tsung Wong", deck: "ADP / Zacian V", placing: 16 },
        { name: "Chienwei Yu", deck: "ADP / Zacian V", placing: 17 },
        { name: "Pedro Pertusi", deck: "Malamar / Mewtwo & Mew-GX", placing: 18 },
        { name: "Yohei Takeda", deck: "Magcargo-GX", placing: 19 },
        { name: "Grant Manley", deck: "Malamar / Giratina", placing: 20 },
        { name: "Andre Chiasson", deck: "Pikachu & Zekrom-GX", placing: 21 },
        { name: "Yuki Ishii", deck: "ADP / Zacian V", placing: 22 },
        { name: "Peter Lo", deck: "ADP / Zacian V", placing: 23 },
        { name: "Colin Tang", deck: "Malamar / Mewtwo & Mew-GX", placing: 24 },
        { name: "Logan Madden", deck: "Pikachu & Zekrom-GX", placing: 25 },
        { name: "Fung Tsz Ping", deck: "Baby Blacephalon", placing: 26 },
        { name: "Christian Hasbani", deck: "ADP / Zacian V", placing: 27 },
        { name: "Benjamin Behrens", deck: "ADP / Zacian V", placing: 28 },
        { name: "Kenneth Chan", deck: "Pikachu & Zekrom-GX", placing: 29 },
        { name: "Tadashi Maeda", deck: "ADP / Zacian V", placing: 30 },
        { name: "Otavio Gouveia", deck: "ADP / Zacian V", placing: 31 },
        { name: "Robin Schulz", deck: "ADP / Zacian V", placing: 32 },
        { name: "Robert Spiller", deck: "ADP / Zacian V", placing: 33 },
        { name: "Raz Wolpe", deck: "ADP / Zacian V", placing: 34 },
        { name: "Corey Munro", deck: "ADP / Zacian V", placing: 35 },
        { name: "Louis Pozzacchio", deck: "Pikachu & Zekrom-GX", placing: 36 },
        { name: "Wo Pan Wong", deck: "Malamar / Mewtwo & Mew-GX", placing: 37 },
        { name: "Ricki Madsen", deck: "Lucario & Melmetal-GX / Zacian V", placing: 38 },
        { name: "Will Jenkins", deck: "ADP / Zacian V", placing: 39 },
        { name: "Koyo Taniguchi", deck: "ADP / Zacian V", placing: 40 },
        { name: "Mehdi Hafi", deck: "Mewtwo & Mew-GX Toolbox", placing: 41 },
        { name: "Sean Takemoto", deck: "Magcargo-GX", placing: 42 },
        { name: "Louis Chi", deck: "ADP / Zacian V", placing: 43 },
        { name: "Akira Soto", deck: "Malamar / Mewtwo & Mew-GX", placing: 44 },
        { name: "Brennan Kamerman", deck: "Baby Blacephalon", placing: 45 },
        { name: "Matty Masefield", deck: "ADP / Zacian V", placing: 46 },
        { name: "Miloslav Posledni", deck: "ADP / Zacian V", placing: 47 },
        { name: "Aaron Stringfellow", deck: "Cinccino Mill", placing: 48 }
    ]},
    { name: "West City Cup", date: moment("2020-02-16"), region: "NZ", attendance: 19, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Yu Xiang", deck: "Doll Stall", placing: 1 },
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Jiawei Sun", deck: "Garchomp & Giratina-GX / Mismagius", placing: 3 },
        { name: "Vincent Ma", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Cannington LC", date: moment("2020-02-16"), region: "WA", attendance: 3, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Aaron Cole", deck: "Baby Blacephalon", placing: 1 },
        { name: "Ramon Salkow", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Andrew Tandianus", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 }
    ]},
    /* { name: "Adelaide LC", date: moment("2020-02-16"), region: "SA", attendance: "", type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Maitland LC", date: moment("2020-02-16"), region: "NSW", attendance: 18, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Ying Hao Tou", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Corey Munro", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2020-02-15"), region: "NSW", attendance: 6, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Brent Tonisson", deck: "Malamar / Giratina", placing: 1 },
        { name: "Nick Bell", deck: "Baby Blacephalon", placing: 2 },
        { name: "Ying Hao Tou", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Jamie Harris", deck: "Green's Blacephalon-GX", placing: 4 }
    ]},
    { name: "Penrith LC", date: moment("2020-02-15"), region: "NSW", attendance: 13, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Shang Chua", deck: "Garchomp & Giratina-GX / Mismagius", placing: 2 },
        { name: "Lucas Hamilton-Foster", deck: "Mewtwo & Mew-GX / ADP", placing: 3 },
        { name: "Corey Munro", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    /* { name: "Seaford LC", date: moment("2020-02-15"), region: "SA", attendance: 15, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Gold Coast LC", date: moment("2020-02-15"), region: "QLD", attendance: "", type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Jack Millar", deck: "Malamar / Garchomp & Giratina-GX", placing: 1 },
        { name: "Matthew Burris", deck: "Garchomp & Giratina-GX / Mismagius", placing: 2 },
        { name: "Zachery Quince", deck: "Whimsicott-GX", placing: 3 },
        { name: "", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2020-02-15"), region: "VIC", attendance: 17, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Tord Reklev", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Corey Matthews", deck: "ADP / Bird Trio", placing: 4 }
    ]},
    { name: "West City LC", date: moment("2020-02-14"), region: "NZ", attendance: 9, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Vincent Ma", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Jiawei Sun", deck: "Garchomp & Giratina-GX / Mismagius", placing: 3 },
        { name: "Ifran Nabi", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    /* { name: "Greensborough LC", date: moment("2020-02-09"), region: "VIC", attendance: 9, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Table Top LC", date: moment("2020-02-09"), region: "SA", attendance: 4, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Mitchell Pengilly", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Michael Atkinson", deck: "Malamar / Giratina", placing: 3 },
        { name: "Carol Poyner", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "Spellbound LC", date: moment("2020-02-09"), region: "NZ", attendance: 11, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Jiawei Sun", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Johnny Jiang", deck: "Weavile-GX Toolbox", placing: 2 },
        { name: "Ranger Yap", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
        { name: "Matthew Chapman", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Cerberus LC", date: moment("2020-02-08"), region: "NZ", attendance: 10, type: "League Challenge", cycle: "February", format: "UPR-CEC",
    standings: [
        { name: "Duncan Inkster", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Finn McKeefry", deck: "Baby Blacephalon", placing: 2 },
        { name: "Kevin Young", deck: "Nuzzle Toolbox", placing: 3 },
        { name: "Eric Sanson", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Ballarat Cup", date: moment("2020-02-08"), region: "VIC", attendance: 25, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Edward Mouanoutoua", deck: "Baby Blacephalon / Pidgeotto", placing: 1 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Henry Brand", deck: "Garchomp & Giratina-GX / Mismagius", placing: 3 },
        { name: "Kaiwen Cabbabe", deck: "Pidgeotto Control", placing: 4 },
        { name: "Angus Johnson", deck: "Gardevoir & Sylveon-GX", placing: 5 },
        { name: "Adam Crust", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Jake Lazzari", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Canberra Cup", date: moment("2020-01-27"), region: "ACT", attendance: 28, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Brent Tonisson", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Anders Balle", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Nathan Canty-Seghers", deck: "Pidgeotto Control", placing: 3 },
        { name: "Joshua Stone", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 },
        { name: "Anton Piccio", deck: "Malamar / Garchomp & Giratina-GX", placing: 5 },
        { name: "Alec Elhindi", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Dylan Williams", deck: "Fossil Box", placing: 7 },
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Geelong LC", date: moment("2020-01-26"), region: "VIC", attendance: 6, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Darcy Ryan", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Angus Johnson", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Edward Mouanoutoua", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Marco Giovannini", deck: "Pidgeotto Control", placing: 4 }
    ]},
    { name: "Bendigo LC", date: moment("2020-01-26"), region: "VIC", attendance: 8, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Benjamin Hall", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Jacob Sparks", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Angus Levett", deck: "Gengar & Mimikyu-GX", placing: 4 }
    ]},
    /* { name: "Area 52 LC", date: moment("2020-01-26"), region: "TAS", attendance: "", type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Cannington LC", date: moment("2020-01-26"), region: "WA", attendance: 9, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Ramon Salkow", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Rhys Christian", deck: "Baby Blacephalon", placing: 2 },
        { name: "Steven Kirk", deck: "Malamar / Mewtwo & Mew-GX", placing: 3 },
        { name: "Aaron Cole", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2020-01-26"), region: "NSW", attendance: 23, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Shang Chua", deck: "Baby Blacephalon", placing: 1 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Christian Hasbani", deck: "Malamar / Garchomp & Giratina-GX", placing: 3 },
        { name: "Lucas Hamilton-Foster", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2020-01-25"), region: "NSW", attendance: 22, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Robert Spiller", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Brent Tonisson", deck: "Garchomp & Giratina-GX / Mismagius", placing: 2 },
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Jamie Harris", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: moment("2020-01-25"), region: "QLD", attendance: 14, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Duy Le", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Zachery Quince", deck: "Baby Blacephalon", placing: 3 },
        { name: "Jacques Rosseau", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    { name: "Cerberus LC", date: moment("2020-01-25"), region: "NZ", attendance: 7, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Jack Newman", deck: "Volcarona / Silvally-GX", placing: 1 },
        { name: "Duncan Inkster", deck: "ADP / Bird Trio", placing: 2 },
        { name: "Sarah Louise", deck: "Garchomp & Giratina-GX / Mismagius", placing: 3 },
        { name: "Amelia Hunter", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Table Top Cup", date: moment("2020-01-25"), region: "SA", attendance: 17, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Carol Poyner", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Stefan Cocks", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "James Goreing", deck: "ADP / Bird Trio", placing: 4 }
    ]},
    { name: "West City LC", date: moment("2020-01-24"), region: "NZ", attendance: 4, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Matthew Chapman", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Joseph Lee Ming Lau", deck: "Trevenant & Dusknoir-GX / Mismagius", placing: 2 },
        { name: "Ifran Nabi", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
        { name: "Ash Nassiri", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Baydragon LC", date: moment("2020-01-19"), region: "NZ", attendance: 7, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Ranger Yap", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
        { name: "Yu Xiang", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Jiawei Sun", deck: "Garchomp & Giratina-GX / Mismagius", placing: 3 },
        { name: "Ash Nassiri", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2020-01-19"), region: "QLD", attendance: 12, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Brett Laird", deck: "Malamar / Giratina", placing: 3 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Neo Tokyo Cup", date: moment("2020-01-18"), region: "QLD", attendance: 24, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Ying Hao Tou", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Zachery Quince", deck: "Doll Stall", placing: 4 },
        { name: "Nicholas Moore", deck: "Baby Blacephalon", placing: 5 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Aaron Stringfellow", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Lachlan Russell", deck: "Persian-GX Checkmate", placing: 8 }
    ]},
    { name: "Pokebar Cup", date: moment("2020-01-18"), region: "SG", attendance: 32, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Clifton Goh", deck: "Malamar / Giratina", placing: 1 },
        { name: "Sui Kai", deck: "ADP / Raichu & Alolan Raichu-GX", placing: 2 },
        { name: "Jeremy Leong", deck: "Malamar / Giratina", placing: 3 },
        { name: "Edmund Khoo", deck: "ADP / Bird Trio", placing: 4 },
        { name: "Lee Hwee Liang", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Levin Foo", deck: "ADP / Bird Trio", placing: 6 },
        { name: "Adrian Velasco", deck: "Green's Lucario & Melmetal-GX", placing: 7 },
        { name: "Alphonse Teh", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Bangkok Cup", date: moment("2020-01-18"), region: "TH", attendance: 24, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Thanat Ratanapisit", deck: "Malamar / Garchomp & Giratina-GX", placing: 1 },
        { name: "Bundit Thepsanongsuk", deck: "Baby Blacephalon", placing: 2 },
        { name: "Setawut Ratanadechapitak", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Yuki Ishii", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 },
        { name: "Aukarawat Somkaisri", deck: "Baby Blacephalon", placing: 5 },
        { name: "Akarin Sobhee", deck: "Garchomp & Giratina-GX / Mismagius", placing: 6 },
        { name: "Suwapitch Dharakul", deck: "Pikachu & Zekrom-GX", placing: 7 },
        { name: "Chawinnut Neamkasipong", deck: "Green's Reshiram & Charizard-GX", placing: 8 }
    ]},
    { name: "Seaford LC", date: moment("2020-01-18"), region: "SA", attendance: 16, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 1 },
        { name: "Sam Clayfield", deck: "Malamar / Giratina", placing: 2 },
        { name: "Carol Poyner", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Mitch Knuckey", deck: "Reshiram & Charizard-GX Toolbox", placing: 4 }
    ]},
    { name: "West City LC", date: moment("2020-01-12"), region: "NZ", attendance: 11, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Ivan Deng", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Johnny Jiang", deck: "Weavile-GX Toolbox", placing: 2 },
        { name: "York Robson", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Brad Rumble", deck: "Rowlet & Alolan Exeggutor-GX Toolbox", placing: 4 }
    ]},
    { name: "Table Top LC", date: moment("2020-01-12"), region: "SA", attendance: 5, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Adrian Hammer", deck: "Baby Blacephalon / Pidgeotto", placing: 2 },
        { name: "Carol Poyner", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Mitchell Pengilly", deck: "Pikachu & Zekrom-GX", placing: 4 },
    ]},
    { name: "Adelaide LC", date: moment("2020-01-12"), region: "SA", attendance: 15, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Matthew Taverna", deck: "Pidgeotto Control", placing: 1 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 2 },
        { name: "James Goreing", deck: "ADP / Bird Trio", placing: 3 },
        { name: "Scott Langford", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Greensborough LC", date: moment("2020-01-12"), region: "VIC", attendance: 10, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Marco Giovannini", deck: "Pidgeotto Control", placing: 3 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Project EXT Cup", date: moment("2020-01-12"), region: "SG", attendance: 24, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Clifton Goh", deck: "Malamar / Giratina", placing: 1 },
        { name: "Jeremy Leong", deck: "Malamar / Giratina", placing: 2 },
        { name: "Benjamin Teh", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Edmund Khoo", deck: "Fossil Box", placing: 4 },
        { name: "Yuan Jun Ting", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Kashvinder Singh", deck: "Malamar / Ultra Necrozma-GX", placing: 6 },
        { name: "Anselm Sim", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Nicholas Yong", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Hong Kong Cup", date: moment("2020-01-11"), region: "HK", attendance: 49, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Wing Yiu Cheung", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Cheuk Ho Cheung", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Pui Lam Lee", deck: "Trevenant & Dusknoir-GX / Mismagius", placing: 3 },
        { name: "Wo Pan Wong", deck: "ADP / Bird Trio", placing: 4 },
        { name: "Catherine Wong", deck: "Malamar / Giratina", placing: 5 },
        { name: "Man Kin Ho", deck: "Garchomp & Giratina-GX / Mismagius", placing: 6 },
        { name: "Cheuk Nam Pang", deck: "Blacephalon-GX / Naganadel", placing: 7 },
        { name: "Gary Keung", deck: "ADP / Bird Trio", placing: 8 }
    ]},
    { name: "Cerberus Cup", date: moment("2020-01-11"), region: "NZ", attendance: 10, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Duncan Inkster", deck: "ADP / Bird Trio", placing: 1 },
        { name: "Finn McKeefry", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Kenny Potter", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Eric Sanson", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    { name: "Seaford Cup", date: moment("2020-01-11"), region: "SA", attendance: 16, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 2 },
        { name: "Matthew Taverna", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Calvin Prosser", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2020-01-10"), region: "VIC", attendance: 14, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Vu Tung Ngo", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Kaiwen Cabbabe", deck: "Garchomp & Giratina-GX / Mismagius", placing: 2 },
        { name: "Jay Tyrrell", deck: "Quagsire / Naganadel", placing: 3 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Spellbound LC", date: moment("2020-01-05"), region: "NZ", attendance: 9, type: "League Challenge", cycle: "January", format: "UPR-CEC",
    standings: [
        { name: "Matthew Chapman", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Vincent Ma", deck: "Naganadel-GX Checkmate", placing: 2 },
        { name: "Brad Rumble", deck: "Green's Blastoise & Piplup-GX", placing: 3 },
        { name: "Jiawei Sun", deck: "Garchomp & Giratina-GX / Mismagius", placing: 4 }
    ]},
    { name: "Penang Cup", date: moment("2020-01-04"), region: "MY", attendance: 37, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Malik Hisyam", deck: "ADP / Bird Trio", placing: 1 },
        { name: "Aaron Kang", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Izmir Armani", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Luther Wong", deck: "ADP Control", placing: 4 },
        { name: "Ethan Lee", deck: "Gardevoir & Sylveon-GX", placing: 5 },
        { name: "Jacob Qian", deck: "Quagsire / Naganadel", placing: 6 },
        { name: "Yu Shaun Soh", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Keng Khai Saw", deck: "ADP / Bird Trio", placing: 8 }
    ]},
    { name: "Ormond Cup", date: moment("2020-01-04"), region: "VIC", attendance: 28, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Michael Kan", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Christopher Kan", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "James Brown", deck: "Malamar / Naganadel & Guzzlord-GX", placing: 3 },
        { name: "Angus Johnson", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Ashton Bradley", deck: "Gardevoir & Sylveon-GX", placing: 5 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Kaiwen Cabbabe", deck: "Malamar / Garchomp & Giratina-GX", placing: 8 }
    ]},
    { name: "Bendigo LC", date: moment("2019-12-29"), region: "VIC", attendance: 7, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Jacob Sparks", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Steven Filiposki", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 3 },
        { name: "Ben Young", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Area 52 LC", date: moment("2019-12-29"), region: "TAS", attendance: 4, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Matthew Oliver", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Sean Gressie", deck: "Green's Garchomp & Giratina-GX", placing: 2 },
        { name: "David Stevens", deck: "Malamar / Garchomp & Giratina-GX", placing: 3 },
        { name: "Christopher Mathers", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Area 52 Cup", date: moment("2019-12-28"), region: "TAS", attendance: 9, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "David Stevens", deck: "Malamar / Garchomp & Giratina-GX", placing: 1 },
        { name: "Ashley Kendall", deck: "Blacephalon-GX / Naganadel", placing: 2 },
        { name: "Liam Palmer", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Christopher Mathers", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-12-28"), region: "VIC", attendance: 18, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Ben Anderson", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Henry Brand", deck: "Garchomp & Giratina-GX / Mismagius", placing: 2 },
        { name: "Kaiwen Cabbabe", deck: "Malamar / Garchomp & Giratina-GX", placing: 3 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Top Ryde LC", date: moment("2019-12-28"), region: "NSW", attendance: 18, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Favio Perez", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Joshua Stone", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Anton Piccio", deck: "Malamar / Garchomp & Giratina-GX", placing: 4 }
    ]},
    { name: "Malaysia Cup", date: moment("2019-12-22"), region: "MY", attendance: 91, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Man Kin Ho", deck: "Garchomp & Giratina-GX / Mismagius", placing: 1 },
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Samuel Chok Mun Chiun", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Mung King Chan", deck: "Malamar / Giratina", placing: 4 },
        { name: "Chen Jinn Chung", deck: "Reshiram & Charizard-GX Toolbox", placing: 5 },
        { name: "Clifton Goh", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Chi Shing Lai", deck: "Garchomp & Giratina-GX / Mismagius", placing: 7 },
        { name: "Nicholas Yong Soon Hong", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Baydragon LC", date: moment("2019-12-22"), region: "NZ", attendance: 7, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Matthew Chapman", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Brad Rumble", deck: "Green's Blastoise & Piplup-GX", placing: 2 },
        { name: "Vincent Ma", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Mikaere Newey", deck: "Green's Beast Box", placing: 4 }
    ]},
    { name: "Cannington LC", date: moment("2019-12-22"), region: "WA", attendance: 8, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Stephen Kurt", deck: "Malamar / Trevenant & Dusknoir-GX", placing: 1 },
        { name: "Terrence Wong", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Dave Timlin", deck: "Aerodactyl-GX", placing: 3 },
        { name: "Aaron Cole", deck: "Tangrowth / Absol", placing: 4 }
    ]},
    { name: "Maitland LC", date: moment("2019-12-22"), region: "NSW", attendance: 7, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Jeremy Evans", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Cherakee Brennan", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Drew Duffey", deck: "Reshiram & Zekrom-GX", placing: 3 },
        { name: "Nathan Canty-Seghers", deck: "Nuzzle Toolbox", placing: 4 }
    ]},
    { name: "Newcastle LC", date: moment("2019-12-21"), region: "NSW", attendance: 14, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Brett Newton", deck: "Malamar / Giratina", placing: 2 },
        { name: "Corey Munro", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "James Cox", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Malaysia Regionals", date: moment("2019-12-21"), region: "MY", attendance: 282, type: "Regionals", cycle: "N/A", format: "UPR-CEC",
    standings: [
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Syahmi Razak", deck: "ADP / Bird Trio", placing: 2 },
        { name: "Tan Jun Hao", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Lee Keng Fai", deck: "Garchomp & Giratina-GX / Mismagius", placing: 5 },
        { name: "Yee Wei Chun", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 6 },
        { name: "Cameron Shenoy", deck: "Persian-GX Checkmate", placing: 7 },
        { name: "Wo Pan Wong", deck: "Garchomp & Giratina-GX / Mismagius", placing: 8 },
        { name: "Levin Fo", deck: "Mewtwo & Mew-GX Toolbox", placing: 9 },
        { name: "Malik Hisyam", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 10 },
        { name: "Afiq Samsudin", deck: "Green's Charizard & Braixen-GX", placing: 11 },
        { name: "Lai Chi Shing", deck: "Garchomp & Giratina-GX / Mismagius", placing: 12 },
        { name: "Peter Lo", deck: "Garchomp & Giratina-GX / Mismagius", placing: 13 },
        { name: "Farhan Aziz", deck: "ADP / Bird Trio", placing: 14 },
        { name: "Chen Hong Yu", deck: "Arceus & Dialga & Palkia-GX / Spiritomb", placing: 15 },
        { name: "Adrian Velasco", deck: "Green's Lucario & Melmetal-GX", placing: 16 },
        { name: "Lin Wei Yu", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 17 },
        { name: "Muhammad Shafiq", deck: "Gardevoir & Sylveon-GX", placing: 18 },
        { name: "Joey Ho", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 19 },
        { name: "Shaun Soh", deck: "Mewtwo & Mew-GX Toolbox", placing: 20 },
        { name: "Ng Zi Zheng", deck: "Mewtwo & Mew-GX Toolbox", placing: 21 },
        { name: "Melvyn Lee", deck: "Mewtwo & Mew-GX Toolbox", placing: 22 },
        { name: "Colin Tang", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 23 },
        { name: "Chew Jin Jian", deck: "Reshiram & Charizard-GX Toolbox", placing: 24 },
        { name: "Klive Aw", deck: "Arceus & Dialga & Palkia-GX / Spiritomb", placing: 25 },
        { name: "Jeffery Tee", deck: "Pikachu & Zekrom-GX", placing: 26 },
        { name: "Law Ping Ki", deck: "Mewtwo & Mew-GX Toolbox", placing: 27 },
        { name: "Fung Tsz Ping", deck: "Mewtwo & Mew-GX Toolbox", placing: 28 },
        { name: "Kaiwen Cabbabe", deck: "Malamar / Giratina", placing: 29 },
        { name: "Rinesh John", deck: "Reshiram & Charizard-GX Toolbox", placing: 30 },
        { name: "Phang Xun Yi", deck: "Baby Blacephalon", placing: 31 },
        { name: "Hairul Haify", deck: "ADP / Pheromosa & Buzzwole-GX", placing: 32 }
    ]},
    { name: "Penrith Cup", date: moment("2019-12-15"), region: "NSW", attendance: 14, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Alec Elhindi", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Joshua Stone", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Christian Hasbani", deck: "Malamar / Ultra Necrozma-GX", placing: 4 }
    ]},
    { name: "Top Ryde Cup", date: moment("2019-12-15"), region: "NSW", attendance: 17, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Anton Piccio", deck: "Green's Lucario & Melmetal-GX", placing: 1 },
        { name: "Jack Underwood", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Favio Perez", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Ellis Longhurst", deck: "Granbull", placing: 4 }
    ]},
    { name: "Gold Coast Cup", date: moment("2019-12-15"), region: "QLD", attendance: 13, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "James Williams", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Zachery Quince", deck: "Doll Stall", placing: 3 },
        { name: "Jacques Rosseau", deck: "Doll Stall", placing: 4 }
    ]},
    /* { name: "Dan Solo LC", date: moment("2019-12-15"), region: "TAS", attendance: "", type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]},
    { name: "Burnie LC", date: moment("2019-12-15"), region: "TAS", attendance: "", type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Greensborough LC", date: moment("2019-12-15"), region: "VIC", attendance: 14, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Christopher Kan", deck: "Gardevoir & Sylveon-GX", placing: 1 },
        { name: "Ben Anderson", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Corey Matthews", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 4 }
    ]},
    { name: "Baydragon Cup", date: moment("2019-12-15"), region: "NZ", attendance: 21, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Ifran Nabi", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
        { name: "Jiawei Sun", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Vighnesh Murthy", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Lawson Maric", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Cannington Cup", date: moment("2019-12-15"), region: "WA", attendance: 15, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Andrew Tandianus", deck: "Poipole Stall", placing: 1 },
        { name: "Aiden Hoare", deck: "Malamar / Giratina", placing: 2 },
        { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Daniel Ross-Brown", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 }
    ]},
    { name: "Adelaide LC", date: moment("2019-12-15"), region: "SA", attendance: 14, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 1 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 2 },
        { name: "Adrian Hammer", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Callum Walker", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Malaysia Cup", date: moment("2019-12-14"), region: "MY", attendance: 53, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Low Kien Yi", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 1 },
        { name: "Keith Yong", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Malik Hisyam", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Colin Tang", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 },
        { name: "Lee Keng Fai", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 5 },
        { name: "Aaron Lim", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Ethan Lee", deck: "Gardevoir & Sylveon-GX", placing: 7 },
        { name: "Kent Ng", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 8 }
    ]},
    { name: "Seaford LC", date: moment("2019-12-14"), region: "SA", attendance: 14, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Aaron van der Kolk", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 2 },
        { name: "Stephan Cocks", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Matthew Taverna", deck: "Pidgeotto Control", placing: 4 }
    ]},
    /* { name: "Geelong LC", date: moment("2019-12-14"), region: "VIC", attendance: "", type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]}, */
    { name: "Geelong Cup", date: moment("2019-12-14"), region: "VIC", attendance: 24, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Ashton Bradley", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Ben Tutone", deck: "Malamar / Giratina", placing: 3 },
        { name: "Michael Kan", deck: "Malamar / Giratina", placing: 4 },
        { name: "Henry Brand", deck: "Garchomp & Giratina-GX / Mismagius", placing: 5 },
        { name: "Hudson Moore", deck: "Gardevoir & Sylveon-GX", placing: 6 },
        { name: "Steven Filiposki", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 7 },
        { name: "Marco Giovannini", deck: "Malamar / Giratina", placing: 8 }
    ]},
    { name: "Neo Tokyo LC", date: moment("2019-12-14"), region: "QLD", attendance: 5, type: "League Challenge", cycle: "December", format: "BW-CEC",
    standings: [
        { name: "Liam Mulheron", deck: "Malamar / Gourgeist", placing: 1 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Aaron Stringfellow", deck: "Rowlet & Alolan Exeggutor-GX Toolbox", placing: 4 }
    ]},
    { name: "Hobart Cup", date: moment("2019-12-14"), region: "TAS", attendance: 5, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Jaime McDonald", deck: "Nuzzle Toolbox", placing: 1 },
        { name: "David Stevens", deck: "Malamar / Giratina", placing: 2 },
        { name: "Joshua Sparks", deck: "Welder Toolbox", placing: 3 },
        { name: "Christopher Mathers", deck: "Blacephalon-GX / Naganadel", placing: 4 }
    ]},
    /* { name: "Hobart LC", date: moment("2019-12-12"), region: "TAS", attendance: "", type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "", deck: "", placing: 1 },
        { name: "", deck: "", placing: 2 },
        { name: "", deck: "", placing: 3 },
        { name: "", deck: "", placing: 4 }
    ]},
    { name: "Brisbane LC", date: moment("2019-12-08"), region: "QLD", attendance: "", type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Rowan Farren", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Christian Hasbani", deck: "Malamar / Ultra Necrozma-GX", placing: 2 },
        { name: "Corey Munro", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "", deck: "", placing: 4 },
        { name: "", deck: "", placing: 5 },
        { name: "", deck: "", placing: 6 },
        { name: "", deck: "", placing: 7 },
        { name: "", deck: "", placing: 8 }
    ]}, */
    { name: "Singapore LC", date: moment("2019-12-08"), region: "SG", attendance: 22, type: "League Challenge", cycle: "December", format: "UPR-CEC",
    standings: [
        { name: "Law Ping Ki", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Ethan Lee", deck: "Gardevoir & Sylveon-GX", placing: 2 },
        { name: "Kashvinder Singh Mann", deck: "Charizard TEU / Ninetales", placing: 3 },
        { name: "Wong Lai Shan", deck: "Malamar / Giratina", placing: 4 }
    ]},
    { name: "Singapore Cup", date: moment("2019-12-08"), region: "SG", attendance: 53, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Lee Pui Lam", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 1 },
        { name: "Joshua Myles Lim", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Law Ping Ki", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Luther Wong", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Samuel Chok Mun Chiun", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Melvyn Lee", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Ethan Lee", deck: "Gardevoir & Sylveon-GX", placing: 7 },
        { name: "Benjamin Teh", deck: "Arceus & Dialga & Palkia-GX / Spiritomb", placing: 8 }
    ]},
    { name: "Singapore SPE", date: moment("2019-12-07"), region: "SG", attendance: 120, type: "Special Event", cycle: "N/A", format: "UPR-CEC",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Adrian Velasco", deck: "Green's Lucario & Melmetal-GX", placing: 2 },
        { name: "Lee Keng Fai", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Clifton Goh", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 },
        { name: "Edwin Kan Jia Ju", deck: "Malamar / Giratina", placing: 5 },
        { name: "Ho Man Kin", deck: "Garchomp & Giratina-GX / Mismagius", placing: 6 },
        { name: "Tan Yong Siang", deck: "ADP / Pheromosa & Buzzwole-GX", placing: 7 },
        { name: "Edmund Khoo", deck: "Gardevoir & Sylveon-GX", placing: 8 },
        { name: "Nicholas Yong Soon Hong", deck: "Mewtwo & Mew-GX Toolbox", placing: 9 },
        { name: "Klive Aw", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 10 },
        { name: "Colin Tang", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 11 },
        { name: "Tan Jun Hao", deck: "Gardevoir & Sylveon-GX", placing: 12 },
        { name: "Law Ping Ki", deck: "Mewtwo & Mew-GX Toolbox", placing: 13 },
        { name: "Farhan Aziz", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 14 },
        { name: "Keith Yong", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 15 },
        { name: "Melvyn Lee", deck: "Mewtwo & Mew-GX Toolbox", placing: 16 },
        { name: "Syamil Sani", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 17 },
        { name: "Jeremy Leong", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 18 },
        { name: "Ying Hao Tou", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 19 },
        { name: "Wong Lai Shan", deck: "Malamar / Giratina", placing: 20 },
        { name: "Ho Wai Kiat", deck: "Mewtwo & Mew-GX Toolbox", placing: 21 },
        { name: "Lee Pui Lam", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 22 },
        { name: "Wong Sui Kai", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 23 },
        { name: "Lin Kai Ming", deck: "Reshiram & Charizard-GX Toolbox", placing: 24 },
        { name: "Samuel Chok Mun Chiun", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 25 },
        { name: "Chen Tze Kang", deck: "Malamar / Ultra Necrozma-GX", placing: 26 },
        { name: "Luther Wong", deck: "Baby Blacephalon / Pidgeotto", placing: 27 },
        { name: "Wong Wei Kit", deck: "Baby Blacephalon / Pidgeotto", placing: 28 },
        { name: "Reuben Fong", deck: "Reshiram & Charizard-GX Toolbox", placing: 29 },
        { name: "Vo Nguyen", deck: "Baby Blacephalon / Pidgeotto", placing: 30 },
        { name: "Kenneth Chan", deck: "Malamar / Giratina", placing: 31 },
        { name: "Quah Hee Aun", deck: "Baby Blacephalon / Pidgeotto", placing: 32 }
    ]},
    { name: "Brisbane Regionals", date: moment("2019-12-07"), region: "QLD", attendance: 152, type: "Regionals", cycle: "N/A", format: "UPR-CEC",
    standings: [
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Angus Johnson", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Jordan Palmer", deck: "Malamar / Giratina", placing: 4 },
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Aaron van der Kolk", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 7 },
        { name: "Henry Brand", deck: "Garchomp & Giratina-GX / Mismagius", placing: 8 },
        { name: "Michael Kan", deck: "Reshiram & Charizard-GX Toolbox", placing: 9 },
        { name: "Max Kennedy", deck: "Baby Blacephalon / Pidgeotto", placing: 10 },
        { name: "Lachlan Russell", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 11 },
        { name: "Darcy Ryan", deck: "Gardevoir & Sylveon-GX", placing: 12 },
        { name: "Ashton Bradley", deck: "Gardevoir & Sylveon-GX", placing: 13 },
        { name: "Corey Brown", deck: "Green's Lucario & Melmetal-GX", placing: 14 },
        { name: "Christian Hasbani", deck: "Reshiram & Charizard-GX Toolbox", placing: 15 },
        { name: "James Cox", deck: "Malamar / Giratina", placing: 16 },
        { name: "Max McInnis", deck: "Reshiram & Charizard-GX Toolbox", placing: 17 },
        { name: "Jeremy Evans", deck: "Mewtwo & Mew-GX Toolbox", placing: 18 },
        { name: "Haoyuan Liu", deck: "Blacephalon-GX / Naganadel", placing: 19 },
        { name: "Andrew Tan", deck: "Reshiram & Charizard-GX Toolbox", placing: 20 },
        { name: "Rowan Farren", deck: "Mewtwo & Mew-GX Toolbox", placing: 21 },
        { name: "Corey Grimshaw", deck: "Doll Stall", placing: 22 },
        { name: "Benjamin Hall", deck: "Malamar / Giratina", placing: 23 },
        { name: "Matthew Williams", deck: "Baby Blacephalon / Pidgeotto", placing: 24 },
        { name: "Jiawei Sun", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 25 },
        { name: "Sam Clayfield", deck: "Mewtwo & Mew-GX Toolbox", placing: 26 },
        { name: "Anton Piccio", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 27 },
        { name: "Corey Munro", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 28 },
        { name: "Duy Le", deck: "Mewtwo & Mew-GX Toolbox", placing: 29 },
        { name: "Edward Mouanoutoua", deck: "Reshiram & Charizard-GX Toolbox", placing: 30 },
        { name: "Dongxu Li", deck: "Gardevoir & Sylveon-GX", placing: 31 },
        { name: "Joshua Crisp", deck: "Reshiram & Charizard-GX Toolbox", placing: 32 }
    ]},
    /* { name: "Gold Coast LC", date: moment("2019-12-06"), region: "QLD", attendance: "", type: "League Challenge", cycle: "November", format: "UPR-CEC",
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
    { name: "Adelaide Cup", date: moment("2019-12-01"), region: "SA", attendance: 20, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Callum Walker", deck: "Baby Blacephalon / Pidgeotto", placing: 1 },
        { name: "Calvin Prosser", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Sam Clayfield", deck: "Mewtwo & Mew-GX Toolbox", placing: 3 },
        { name: "Jordan Palmer", deck: "Malamar / Ultra Necrozma-GX", placing: 4 }
    ]},
    { name: "Bendigo Cup", date: moment("2019-12-01"), region: "VIC", attendance: 18, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Luke Schmitt", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Steven Filiposki", deck: "Baby Blacephalon / Pidgeotto", placing: 2 },
        { name: "Michael Kan", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Maitland Cup", date: moment("2019-12-01"), region: "NSW", attendance: 30, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Lucas Hamilton-Foster", deck: "Green's Charizard & Braixen-GX", placing: 2 },
        { name: "Christian Hasbani", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "James Cox", deck: "Malamar / Giratina", placing: 4 },
        { name: "Brent Tonisson", deck: "Malamar / Giratina", placing: 5 },
        { name: "Favio Perez", deck: "Mewtwo & Mew-GX Toolbox", placing: 6 },
        { name: "Cherakee Brennan", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 7 },
        { name: "Shang Chua", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Newcastle Cup", date: moment("2019-11-30"), region: "NSW", attendance: 32, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Christian Hasbani", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Louis Pozzacchio", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Brendan Schofield", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Lucas Hamilton-Foster", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 },
        { name: "Ruben Cortez", deck: "Blacephalon-GX / Naganadel", placing: 5 },
        { name: "Ying Hao Tou", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 6 },
        { name: "Jack Millar", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 7 },
        { name: "Jeremy Evans", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 }
    ]},
    { name: "Hong Kong Cup", date: moment("2019-11-30"), region: "HK", attendance: 42, type: "League Cup", cycle: "Quarter 2", format: "UPR-CEC",
    standings: [
        { name: "Wo Pan Wong", deck: "Baby Blacephalon / Pidgeotto", placing: 1 },
        { name: "Ka Ho Chau", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Vincent Yuen", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Peter Lo", deck: "Blacephalon-GX / Naganadel", placing: 4 },
        { name: "Mung King Chan", deck: "Mewtwo & Mew-GX Toolbox", placing: 5 },
        { name: "Fung Ching Lam", deck: "Baby Blacephalon / Pidgeotto", placing: 6 },
        { name: "Ngai Hei Easy Chan", deck: "Blacephalon-GX / Naganadel", placing: 7 },
        { name: "Siu Chun Lee", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 8 }
    ]},
    { name: "Spellbound LC", date: moment("2019-11-24"), region: "NZ", attendance: 18, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Yu Xiang", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "York Robson", deck: "Reshiram & Charizard-GX Toolbox", placing: 2 },
        { name: "Jiawei Sun", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Layton Rumble", deck: "Arceus & Dialga & Palkia-GX / Spiritomb", placing: 4 }
    ]},
    { name: "Cannington LC", date: moment("2019-11-24"), region: "WA", attendance: 4, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Terrence Wong", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 1 },
        { name: "Steve Kirk", deck: "Baby Blacephalon / Pidgeotto", placing: 2 },
        { name: "Ranon Salkow", deck: "Reshiram & Charizard-GX Toolbox", placing: 3 },
        { name: "Dave Timlin", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Area 52 LC", date: moment("2019-11-24"), region: "TAS", attendance: 7, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Christopher Mathers", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "David Stevens", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Morgan Febey", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Jacob Gilham", deck: "Weezing Spread", placing: 4 }
    ]},
    { name: "Adelaide LC", date: moment("2019-11-24"), region: "SA", attendance: 18, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Callan Kudra-Harding", deck: "Baby Blacephalon / Pidgeotto", placing: 1 },
        { name: "Sam Clayfield", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Jordan Palmer", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Scott Langford", deck: "Mewtwo & Mew-GX Toolbox", placing: 4 }
    ]},
    { name: "Seaford LC", date: moment("2019-11-23"), region: "SA", attendance: 16, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Jordan Palmer", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 1 },
        { name: "Sam Clayfield", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Adrian Hammer", deck: "Baby Blacephalon / Pidgeotto", placing: 3 },
        { name: "Matthew Taverna", deck: "Beheeyem", placing: 4 }
    ]},
    { name: "Ormond LC", date: moment("2019-11-23"), region: "VIC", attendance: 30, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Luke Schmitt", deck: "Mewtwo & Mew-GX Toolbox", placing: 1 },
        { name: "Damian Filiposki", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Meng Hon Chow", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Benjamin Hall", deck: "Baby Blacephalon / Pidgeotto", placing: 4 },
        { name: "Jake Lazzari", deck: "Green's Charizard & Braixen-GX", placing: 5 },
        { name: "Edward Mouanoutoua", deck: "Baby Blacephalon / Pidgeotto", placing: 6 },
        { name: "Kaiwen Cabbabe", deck: "Reshiram & Charizard-GX Toolbox", placing: 7 },
        { name: "Ben Tutone", deck: "Malamar / Garchomp & Giratina-GX", placing: 8 }
    ]},
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
        { name: "William Farmilo", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Christopher Mathers", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Matthew Oliver", deck: "Gardevoir & Sylveon-GX", placing: 4 }
    ]},
    { name: "Geelong LC", date: moment("2019-11-16"), region: "VIC", attendance: 11, type: "League Challenge", cycle: "November", format: "UPR-CEC",
    standings: [
        { name: "Te-Awhi Te Angina", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 2 },
        { name: "Benjamin Hall", deck: "Gardevoir & Sylveon-GX", placing: 3 },
        { name: "Luke Schmitt", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 4 }
    ]},
    { name: "Latin America International", date: moment("2019-11-15"), region: "BR", attendance: 726, type: "Internationals", cycle: "N/A", format: "UPR-CEC",
    standings: [
        { name: "Robin Schulz", deck: "Reshiram & Charizard-GX Toolbox", placing: 1 },
        { name: "Bryan de Vries", deck: "Mewtwo & Mew-GX Toolbox", placing: 2 },
        { name: "Giovanni Peragallo", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 3 },
        { name: "Lucas Gusso", deck: "Blacephalon-GX / Naganadel", placing: 4 },
        { name: "Ondrej Skubal", deck: "Doll Stall", placing: 5 },
        { name: "Gustavo Wada", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 6 },
        { name: "Victor Vieira", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 7 },
        { name: "Matthew Burris", deck: "Mewtwo & Mew-GX Toolbox", placing: 8 },
        { name: "Manuel Jorach", deck: "Baby Blacephalon / Pidgeotto", placing: 9 },
        { name: "Alessandro Cremascoli", deck: "Pidgeotto Control", placing: 10 },
        { name: "Owyn Kamerman", deck: "Baby Blacephalon / Pidgeotto", placing: 11 },
        { name: "Pedro Eugenio Torres", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 12 },
        { name: "Claudio Ferla", deck: "Gardevoir & Sylveon-GX", placing: 13 },
        { name: "Igor Costa", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 14 },
        { name: "Eder Jarillo", deck: "Reshiram & Charizard-GX Toolbox", placing: 15 },
        { name: "Tommi Lahtela", deck: "Doll Stall", placing: 16 },
        { name: "Rafael Yuiti", deck: "Mewtwo & Mew-GX Toolbox", placing: 17 },
        { name: "Douglas Castro", deck: "Pidgeotto Control", placing: 18 },
        { name: "Vitor Lugon", deck: "Pidgeotto Control", placing: 19 },
        { name: "Fabien Pujol", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 20 },
        { name: "Joao Santos", deck: "Blacephalon-GX / Naganadel", placing: 21 },
        { name: "Jimmy Pendarvis", deck: "Naganadel & Guzzlord-GX / Mismagius", placing: 22 },
        { name: "Daniel Abramovici", deck: "Charizard & Braixen-GX / Omastar", placing: 23 },
        { name: "Lucas Fabiano Maiola", deck: "Mewtwo & Mew-GX Toolbox", placing: 24 },
        { name: "Dyego Rathje", deck: "Malamar / Trevenant & Dusknoir-GX", placing: 25 },
        { name: "Brent Tonisson", deck: "Mewtwo & Mew-GX Toolbox", placing: 26 },
        { name: "Patricia Gonzalez Walsh", deck: "Pidgeotto Control", placing: 27 },
        { name: "Stephane Ivanoff", deck: "Quagsire / Silvally-GX", placing: 28 },
        { name: "Otavio Gouveia", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 29 },
        { name: "Rahul Reddy", deck: "Mewtwo & Mew-GX Toolbox", placing: 30 },
        { name: "Emildo Andrade", deck: "Baby Blacephalon", placing: 31 },
        { name: "Pedro Giovannetti Marques Ricardo", deck: "Baby Blacephalon / Pidgeotto", placing: 32 },
        { name: "Diego Cassiraga", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 33 },
        { name: "Francesco Pasquale Caterino", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 34 },
        { name: "Rafael Santos", deck: "Baby Blacephalon / Pidgeotto", placing: 35 },
        { name: "Fabio Andrade", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 36 },
        { name: "Renato Christian", deck: "Malamar / Trevenant & Dusknoir-GX", placing: 37 },
        { name: "Gabriel Pino", deck: "Mewtwo & Mew-GX Toolbox", placing: 38 },
        { name: "Bruno Sermann", deck: "Gardevoir & Sylveon-GX", placing: 39 },
        { name: "Mateus Nathan Penido", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 40 },
        { name: "James Cox", deck: "Mewtwo & Mew-GX Toolbox", placing: 41 },
        { name: "Vinicius Moschen", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 42 },
        { name: "Fabian Huerta", deck: "Pikachu & Zekrom-GX", placing: 43 },
        { name: "Romulo Vianna Zappelli de Oliveira", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 44 },
        { name: "Tiago Marins", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 45 },
        { name: "Alejo Salvador", deck: "Pidgeotto Control", placing: 46 },
        { name: "Andressa Nakahata Medrado", deck: "Mewtwo & Mew-GX Toolbox", placing: 47 },
        { name: "Giovani Rossato", deck: "Reshiram & Charizard-GX Toolbox", placing: 48 },
        { name: "Jon Eng", deck: "Mewtwo & Mew-GX Toolbox", placing: 49 },
        { name: "William Azevedo", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 50 },
        { name: "Matias Matricardi", deck: "Mewtwo & Mew-GX Toolbox", placing: 51 },
        { name: "Jimmy Marcus Munk", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 52 },
        { name: "Samuel Alves", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 53 },
        { name: "Vinicius La Padula", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 54 },
        { name: "Guilherme da Mata Pinho", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 55 },
        { name: "Leonardo Braga", deck: "Pikachu & Zekrom-GX", placing: 56 },
        { name: "Lucas Freitas", deck: "Quagsire / Naganadel", placing: 57 },
        { name: "Jack Millar", deck: "Mewtwo & Mew-GX Toolbox", placing: 58 },
        { name: "Mehdi Hafi", deck: "Reshiram & Charizard-GX Toolbox", placing: 59 },
        { name: "Jelle van Kampen", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 60 },
        { name: "Rodrigo Nunez", deck: "Pikachu & Zekrom-GX", placing: 61 },
        { name: "Antonio Vitor Jardim", deck: "Pidgeotto Control", placing: 62 },
        { name: "Alex Schemanske", deck: "Reshiram & Charizard-GX Toolbox", placing: 63 },
        { name: "Maximiliano Lofredo", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 64 },
        { name: "Jose Orellana", deck: "Mewtwo & Mew-GX Toolbox", placing: 65 },
        { name: "Jean Claude Valdivieso", deck: "Green's Reshiram & Charizard-GX", placing: 66 },
        { name: "Joao Vidal", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 67 },
        { name: "Samuel Moro Jacques", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 68 },
        { name: "Gustavo Pastorin", deck: "Gardevoir & Sylveon-GX", placing: 69 },
        { name: "Mauricio Ricardo Reyes Rodriguez", deck: "Reshiram & Charizard-GX Toolbox", placing: 70 },
        { name: "Luigi Profeti", deck: "Gardevoir & Sylveon-GX", placing: 71 },
        { name: "Pedro Provenzi", deck: "Doll Stall", placing: 72 },
        { name: "Andre Pimenta", deck: "Charizard TEU / Salazzle", placing: 73 },
        { name: "Stian Nilsso", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 74 },
        { name: "Diego Falcao", deck: "Reshiram & Charizard-GX Toolbox", placing: 75 },
        { name: "Gabriel Chighini", deck: "Baby Blacephalon", placing: 76 },
        { name: "Pedro Henrique Alves", deck: "Malamar / Giratina", placing: 77 },
        { name: "Damian Riquel", deck: "Malamar / Solgaleo & Lunala-GX", placing: 78 },
        { name: "Darin O'Meara", deck: "Pidgeotto Control", placing: 79 },
        { name: "Vinicius Gomes", deck: "Mewtwo & Mew-GX Toolbox", placing: 80 },
        { name: "Jorge Recabal", deck: "Baby Blacephalon / Pidgeotto", placing: 81 },
        { name: "Gabriel Andrade", deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", placing: 82 },
        { name: "Rodrigo Ciulla", deck: "Mewtwo & Mew-GX Toolbox", placing: 83 },
        { name: "Gabriel Kim", deck: "Mewtwo & Mew-GX Toolbox", placing: 84 },
        { name: "Andre Porto", deck: "Green's Arceus & Dialga & Palkia-GX", placing: 85 },
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
