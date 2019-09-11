// Template for tournament input
/* { name: "", date: "", region: "", attendance: "", type: "", cycle: "", format: "",
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

const tournaments = [
    { name: "Baydragon Cup", date: "08/09/19", region: "NZ", attendance: 24, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
         { name: "Louis Chi", deck: "Pikachu & Zekrom-GX", placing: 1 },
         { name: "Jiawei Sun", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
         { name: "Jackie Su", deck: "Blacephalon-GX / Naganadel", placing: 3 },
         { name: "Yu Xiang", deck: "Malamar / Giratina", placing: 4 },
         { name: "Ji Chen", deck: "Malamar / Ultra Necrozma-GX", placing: 5 },
         { name: "Eddie Teahu", deck: "Gardevoir & Sylveon-GX", placing: 6 },
         { name: "Kelvin Cheung", deck: "Pikachu & Zekrom-GX", placing: 7 },
         { name: "Tommy Xie", deck: "Mew & Mewtwo-GX Toolbox", placing: 8 }
    ]},
    { name: "Cannington Cup", date: "08/09/19", region: "WA", attendance: 10, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
         { name: "Matthew Bray", deck: "Pikachu & Zekrom-GX", placing: 1 },
         { name: "Stephen Kirk", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
         { name: "Andrew Tandianus", deck: "Malamar / Giratina", placing: 3 },
         { name: "Terrence Wong", deck: "Spiritomb / Froslass", placing: 4 },
    ]},
    { name: "Maitland Cup", date: "08/09/19", region: "NSW", attendance: 24, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 1 },
        { name: "Paul Coletta", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
        { name: "Ying Hao Tou", deck: "Ability Reshiram & Charizard-GX", placing: 3 },
        { name: "Henry Brand", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
        { name: "Brent Tonisson", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
        { name: "Mitchell Dowling", deck: "Beheeyem", placing: 6 },
        { name: "Chuyao Zhou", deck: "Beheeyem", placing: 7 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 8 },
    ]},
    { name: "Singapore Cup", date: "07/09/19", region: "SG", attendance: 63, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Wei Jie Fo", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
        { name: "Jit Min Lim", deck: "Pidgeotto Control", placing: 2 },
        { name: "Bryan Chan", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Tan Jun Hao", deck: "Gardevoir & Sylveon-GX", placing: 4 },
        { name: "Joshua Zheng", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
        { name: "Titally Tan", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
        { name: "Clifton Goh", deck: "Ability Reshiram & Charizard-GX", placing: 7 },
        { name: "Jeremy Leong", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Newcastle Cup", date: "07/09/19", region: "NSW", attendance: 38, type: "League Cup", cycle: "Quarter 1", format: "UPR-HIF",
    standings: [
        { name: "Christian Hasbani", deck: "Malamar / Giratina", placing: 1 },
        { name: "Shane Quinn", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
        { name: "Henry Brand", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 4 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Lucas Hamilton-Foster", deck: "Green's Reshiram & Charizard-GX", placing: 6 },
        { name: "Damian Lang", deck: "Malamar / Garchomp & Giratina-GX", placing: 7 },
        { name: "Blake Lobina", deck: "Pikachu & Zekrom-GX", placing: 8 }
    ]},
    { name: "Melbourne SPE", date: "31/08/19", region: "VIC", attendance: 127, type: "Special Event", cycle: "N/A", format: "UPR-UNM",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Pikachu & Zekrom-GX", placing: 1 },
        { name: "Angus Johnson", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
        { name: "Carol Poyner", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Henry Brand", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
        { name: "Brent Tonisson", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Aaron Stringfellow", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
        { name: "Jay Tyrell", deck: "Quagsire / Naganadel", placing: 7 },
        { name: "Joshua Bradley", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
        { name: "Ashton Bradley", deck: "Blacephalon-GX / Naganadel", placing: 9 },
        { name: "Sameer Sangwan", deck: "Ability Reshiram & Charizard-GX", placing: 10 },
        { name: "Darcy Ryan", deck: "Blacephalon-GX / Naganadel", placing: 11 },
        { name: "Jack Millar", deck: "Ability Reshiram & Charizard-GX", placing: 12 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 13 },
        { name: "Nicholas Apostolou", deck: "Ability Reshiram & Charizard-GX", placing: 14 },
        { name: "James Cox", deck: "Naganadel-GX Checkmate", placing: 15 },
        { name: "Michael Kan", deck: "Pikachu & Zekrom-GX", placing: 16 },
        { name: "Mikaere Newey", deck: "Blastoise / Keldeo-GX", placing: 17 },
        { name: "Mitch Knuckey", deck: "Ability Reshiram & Charizard-GX", placing: 18 },
        { name: "Clifton Goh", deck: "Pikachu & Zekrom-GX", placing: 19 },
        { name: "Klive Aw", deck: "Ability Reshiram & Charizard-GX", placing: 20 },
        { name: "York Robson", deck: "Malamar / Garchomp & Giratina-GX", placing: 21 },
        { name: "Alex Crockford", deck: "Pikachu & Zekrom-GX", placing: 22 },
        { name: "Anders Balle", deck: "Quagsire / Naganadel", placing: 23 },
        { name: "Jack Fone", deck: "Mew & Mewtwo-GX Toolbox", placing: 24 },
        { name: "Tripp May", deck: "Baby Blacephalon", placing: 25 },
        { name: "Robin Sangwan", deck: "Pikachu & Zekrom-GX", placing: 26 },
        { name: "Edward Mouanoutoua", deck: "Ability Reshiram & Charizard-GX", placing: 27 },
        { name: "Ehren Roebuck", deck: "Ability Reshiram & Charizard-GX", placing: 28 },
        { name: "Ying Hao Tou", deck: "Ability Reshiram & Charizard-GX", placing: 29 },
        { name: "Ben D. Hall", deck: "Ability Reshiram & Charizard-GX", placing: 30 },
        { name: "Corey Munro", deck: "Mew & Mewtwo-GX Toolbox", placing: 31 },
        { name: "Naomi Murn", deck: "Ability Reshiram & Charizard-GX", placing: 32 }
    ]},
    { name: "Adelaide LC", date: "25/08/19", region: "SA", attendance: 19, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Aaron van der Kolk", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Carol Poyner", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Callum Walker", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Jon Gameau", deck: "Weavile-GX Toolbox", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: "25/08/19", region: "QLD", attendance: 18, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "James Williams", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
        { name: "John Bishop", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Aaron Stringfellow", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
        { name: "Jack Millar", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Neo Tokyo LC", date: "24/08/19", region: "QLD", attendance: 18, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "Nicholas Moore", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
        { name: "Ehren Roebuck", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
        { name: "Matthew Burris", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Jack Millar", deck: "Ability Reshiram & Charizard-GX", placing: 4 }
    ]},
    { name: "Ormond LC", date: "24/08/19", region: "VIC", attendance: 25, type: "League Challenge", cycle: "August", format: "UPR-UNM",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Blacephalon-GX / Naganadel", placing: 1 },
        { name: "Angus Johnson", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Ashton Bradley", deck: "Blacephalon-GX / Naganadel", placing: 3 },
        { name: "Adam C", deck: "Blacephalon-GX / Naganadel", placing: 4 },
        { name: "Joseph Tran", deck: "Pikachu & Zekrom-GX", placing: 5 },
        { name: "Damian Filiposki", deck: "Pikachu & Zekrom-GX", placing: 6 },
        { name: "Henry Brand", deck: "Mew & Mewtwo-GX Toolbox", placing: 7 },
        { name: "Nicholas Apostolou", deck: "Ability Reshiram & Charizard-GX", placing: 8 }
    ]},
    { name: "Penrith LC", date: "11/08/19", region: "NSW", attendance: 7, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Mehul Gajwani", deck: "Donphan / Florges", placing: 1 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Nicole Manasan", deck: "Zoroark-GX / Greninja & Zoroark-GX", placing: 4 }
    ]},
    { name: "Newcastle LC", date: "10/08/19", region: "NSW", attendance: 14, type: "League Challenge", cycle: "August", format: "SUM-UNB",
    standings: [
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
        { name: "Jake Cruwys", deck: "Zoroark-GX Checkmate", placing: 2 },
        { name: "Shane Quinn", deck: "Vileplume Stall", placing: 3 },
        { name: "Joshua Stone", deck: "Pikachu & Zekrom-GX", placing: 4 }
    ]},
    { name: "Neo Tokyo LC", date: "27/07/19", region: "QLD", attendance: 9, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Zachery Quince", deck: "Baby Blacephalon", placing: 1 },
        { name: "Aaron Stringfellow", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
        { name: "Matthew Burris", deck: "Vileplume Stall", placing: 3 },
        { name: "Blake Troy", deck: "Vileplume Stall", placing: 4 }
    ]},
    { name: "Ormond LC", date: "20/07/19", region: "VIC", attendance: 21, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Kaiwen Cabbabe", deck: "Vileplume Stall", placing: 1 },
        { name: "Te-Awhi Te Angina", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Nicholas Apostolou", deck: "Pikachu & Zekrom-GX", placing: 3 },
        { name: "Michael Kan", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Maitland LC", date: "14/07/19", region: "NSW", attendance: 10, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Hugh Masters", deck: "Beast Box", placing: 1 },
        { name: "Shang Chua", deck: "Baby Blacephalon", placing: 2 },
        { name: "Jeremy Evans", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
        { name: "Mitchell Dowling", deck: "Baby Blacephalon", placing: 4 }
    ]},
    { name: "Newcastle LC", date: "13/07/19", region: "NSW", attendance: 15, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Anton Piccio", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
        { name: "James Cox", deck: "Zoroark-GX / Dewgong", placing: 3 },
        { name: "Jake Cruwys", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Gold Coast LC", date: "13/07/19", region: "QLD", attendance: 13, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Harrison Hodges", deck: "Zapdos / Ultra Beasts", placing: 1 },
        { name: "Aaron Stringfellow", deck: "Pikachu & Zekrom-GX", placing: 2 },
        { name: "Kyle Beaumont", deck: "Zapdos / Ultra Beasts", placing: 3 },
        { name: "Jack Millar", deck: "Zoroark-GX / Dewgong", placing: 4 }
    ]},
    { name: "Penrith LC", date: "07/07/19", region: "NSW", attendance: 15, type: "League Challenge", cycle: "July", format: "SUM-UNB",
    standings: [
        { name: "Brent Tonisson", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
        { name: "Paul Coletta", deck: "Baby Blacephalon", placing: 2 },
        { name: "Ying Hao Tou", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
        { name: "Joshua Stone", deck: "Malamar / Ultra Necrozma-GX", placing: 4 }
    ]}
];

// export default tournaments;
module.exports = tournaments;
