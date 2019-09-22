const players = [
{ name: "Aaron Cole",
achievements: [{ date: "22/09/19", tournament: "Cannington LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 2 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Baby Blacephalon", placing: 120 },
], points: 52 },
{ name: "Aaron Stringfellow",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 134 },
{ name: "Aaron van der Kolk",
achievements: [{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 1 },
], points: 15 },
{ name: "Adam Crust",
achievements: [{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 4 },
], points: 10 },
{ name: "Adrian Acuzar",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 2 },
], points: 40 },
{ name: "Adrian Velasco",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 50 },
{ name: "Alex Chee",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
], points: 25 },
{ name: "Alex Crockford",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 22 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 102 },
], points: 100 },
{ name: "Alexander Jason Macaraniag",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
], points: 32 },
{ name: "Anders Balle",
achievements: [{ date: "22/09/19", tournament: "Maitland LC", cycle: "September", deck: "Quagsire / Naganadel", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Quagsire / Naganadel", placing: 23 },
], points: 70 },
{ name: "Andrew Tandianus",
achievements: [{ date: "22/09/19", tournament: "Cannington LC", cycle: "September", deck: "Keldeo-GX / White Kyurem", placing: 3 },
{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 3 },
], points: 42 },
{ name: "Angus Johnson",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 5 },
{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 207 },
{ name: "Anton Piccio",
achievements: [{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 15 },
{ name: "Antoni Acuzar",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 4 },
], points: 32 },
{ name: "Ash Nassiri",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 6 },
], points: 25 },
{ name: "Ashton Bradley",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blacephalon-GX / Naganadel", placing: 9 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 3 },
], points: 90 },
{ name: "Ben Anderson",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
{ date: "17/08/19", tournament: "DC Open Flight 2", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 81 },
], points: 65 },
{ name: "Ben D. Hall",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 30 },
{ date: "17/08/19", tournament: "DC Open Flight 2", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 107 },
], points: 100 },
{ name: "Ben Tutone",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Malamar / Giratina", placing: 7 },
], points: 8 },
{ name: "Blake Davies",
achievements: [{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Froslass / Lucario-GX", placing: 8 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Malamar / Giratina", placing: 85 },
], points: 65 },
{ name: "Blake Lobina",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
], points: 50 },
{ name: "Blake Troy",
achievements: [{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Vileplume Stall", placing: 4 },
], points: 10 },
{ name: "Blake Wightman",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 7 },
], points: 25 },
{ name: "Brad Rumble",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Whimsicott-GX", placing: 8 },
], points: 25 },
{ name: "Brent Tonisson",
achievements: [{ date: "22/09/19", tournament: "Maitland LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 1 },
{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 5 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
], points: 187 },
{ name: "Bryan Chan",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 32 },
{ name: "Callum Walker",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 6 },
{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 35 },
{ name: "Carlo Neria",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
], points: 25 },
{ name: "Carol Poyner",
achievements: [{ date: "14/09/19", tournament: "Seaford Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
], points: 182 },
{ name: "Chengyong Luo",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
], points: 25 },
{ name: "Christian Hasbani",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 2 },
{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
], points: 140 },
{ name: "Chuyao Zhou",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Beheeyem", placing: 7 },
], points: 25 },
{ name: "Clifton Goh",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 8 },
{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 7 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 19 },
], points: 110 },
{ name: "Colin Tang",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 32 },
{ name: "Corey Grimshaw",
achievements: [{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Breloom", placing: 3 },
], points: 32 },
{ name: "Corey Munro",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 31 },
], points: 60 },
{ name: "Damian Filiposki",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 6 },
], points: 40 },
{ name: "Damian Lang",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Malamar / Garchomp & Giratina-GX", placing: 7 },
], points: 25 },
{ name: "Darcy Ryan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blacephalon-GX / Naganadel", placing: 11 },
], points: 80 },
{ name: "David Patane",
achievements: [{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Malamar / Ultra Necrozma-GX", placing: 84 },
], points: 40 },
{ name: "Dominic Chow",
achievements: [{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 40 },
{ name: "Duncan Inkster",
achievements: [{ date: "14/09/19", tournament: "Wellington LC", cycle: "September", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
], points: 15 },
{ name: "Eddie Teahu",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 4 },
{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 6 },
], points: 57 },
{ name: "Edward Mouanoutoua",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 2 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 27 },
], points: 100 },
{ name: "Ehren Roebuck",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 28 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 72 },
{ name: "Eric Sanson",
achievements: [{ date: "14/09/19", tournament: "Wellington LC", cycle: "September", deck: "Blacephalon-GX / Naganadel", placing: 4 },
], points: 10 },
{ name: "Fabian Kenel",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zoroark-GX / Silvally-GX", placing: 4 },
], points: 32 },
{ name: "Farhan Aziz",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
], points: 32 },
{ name: "Finn McKeefry",
achievements: [{ date: "14/09/19", tournament: "Wellington LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 12 },
{ name: "Harrison Hodges",
achievements: [{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 7 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zapdos / Ultra Beasts", placing: 1 },
], points: 40 },
{ name: "Henry Brand",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Mew & Mewtwo-GX Toolbox", placing: 7 },
], points: 252 },
{ name: "Hugh Masters",
achievements: [{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Beast Box", placing: 1 },
], points: 15 },
{ name: "Huy Nguyen",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 25 },
{ name: "Ifran Nabi",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 5 },
], points: 25 },
{ name: "Ismat Myron",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 8 },
], points: 25 },
{ name: "Izmir Armani",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 40 },
{ name: "Izmir Armani Istal Zani",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
], points: 40 },
{ name: "Jack Fone",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Mew & Mewtwo-GX Toolbox", placing: 8 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 24 },
], points: 68 },
{ name: "Jack Millar",
achievements: [{ date: "22/09/19", tournament: "Gold Coast LC", cycle: "September", deck: "Malamar / Giratina", placing: 2 },
{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 6 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 5 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 12 },
{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 172 },
{ name: "Jack Underwood",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Poipole Stall", placing: 7 },
], points: 25 },
{ name: "Jackie Su",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 3 },
], points: 32 },
{ name: "Jacob Sparks",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 8 },
], points: 25 },
{ name: "Jake Cruwys",
achievements: [{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Zoroark-GX Checkmate", placing: 2 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 22 },
{ name: "James Cox",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Naganadel-GX Checkmate", placing: 15 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 3 },
], points: 90 },
{ name: "James Goreing",
achievements: [{ date: "08/09/19", tournament: "Adelaide LC", cycle: "September", deck: "Gardevoir & Sylveon-GX", placing: 1 },
], points: 15 },
{ name: "James Williams",
achievements: [{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 78 },
], points: 55 },
{ name: "Javier Boswell",
achievements: [{ date: "14/09/19", tournament: "Wellington LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 10 },
{ name: "Jay Tyrell",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Quagsire / Naganadel", placing: 2 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Quagsire / Naganadel", placing: 7 },
], points: 112 },
{ name: "Jeremy Evans",
achievements: [{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
], points: 10 },
{ name: "Jeremy Leong",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
], points: 25 },
{ name: "Ji Chen",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 5 },
], points: 25 },
{ name: "Jiawei Sun",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 40 },
{ name: "Jinn Chung",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zygarde-GX", placing: 3 },
], points: 32 },
{ name: "Jit Min Lim",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Pidgeotto Control", placing: 5 },
{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pidgeotto Control", placing: 2 },
], points: 65 },
{ name: "John Bishop",
achievements: [{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 12 },
{ name: "Jon Gameau",
achievements: [{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Weavile-GX Toolbox", placing: 4 },
], points: 10 },
{ name: "Jordan Palmer",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
{ date: "14/09/19", tournament: "Seaford Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
{ date: "08/09/19", tournament: "Adelaide LC", cycle: "September", deck: "Malamar / Giratina", placing: 4 },
], points: 110 },
{ name: "Jordan Williams",
achievements: [{ date: "22/09/19", tournament: "Maitland LC", cycle: "September", deck: "Quagsire / Naganadel", placing: 4 },
], points: 10 },
{ name: "Joseph Tran",
achievements: [{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 8 },
{ name: "Joshua Bradley",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
], points: 100 },
{ name: "Joshua Doctolero",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 5 },
], points: 25 },
{ name: "Joshua Stone",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 4 },
], points: 55 },
{ name: "Joshua Zheng",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
], points: 25 },
{ name: "Kaiwen Cabbabe",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 1 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 1 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Vileplume Stall", placing: 1 },
], points: 294 },
{ name: "Keith Yong",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Quagsire / Naganadel", placing: 1 },
], points: 50 },
{ name: "Kelvin Cheung",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 7 },
], points: 25 },
{ name: "Kenneth Chan",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
], points: 25 },
{ name: "Klive Aw",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 20 },
], points: 60 },
{ name: "Kyle Beaumont",
achievements: [{ date: "22/09/19", tournament: "Gold Coast LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 3 },
{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Poipole Stall", placing: 1 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zapdos / Ultra Beasts", placing: 3 },
], points: 70 },
{ name: "Layton Rumble",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
], points: 32 },
{ name: "Louis Chi",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 1 },
], points: 100 },
{ name: "Louis Hutchinson",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Quagsire / Naganadel", placing: 8 },
], points: 25 },
{ name: "Louis Pozzacchio",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
], points: 32 },
{ name: "Lucas Hamilton-Foster",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 6 },
], points: 25 },
{ name: "Luke Schmitt",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 6 },
], points: 25 },
{ name: "Marco Giovannini",
achievements: [{ date: "22/09/19", tournament: "Cannington LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
], points: 10 },
{ name: "Matthew Bray",
achievements: [{ date: "22/09/19", tournament: "Cannington LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 1 },
{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 1 },
{ date: "17/08/19", tournament: "DC Open Flight 2", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 116 },
], points: 105 },
{ name: "Matthew Burris",
achievements: [{ date: "22/09/19", tournament: "Gold Coast LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 13 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "17/08/19", tournament: "DC Open Flight 2", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 126 },
{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Vileplume Stall", placing: 3 },
], points: 182 },
{ name: "Matthew Chapman",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 7 },
], points: 25 },
{ name: "Matthew Taverna",
achievements: [{ date: "14/09/19", tournament: "Seaford Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 4 },
{ date: "08/09/19", tournament: "Adelaide LC", cycle: "September", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
], points: 42 },
{ name: "Mehul Gajwani",
achievements: [{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Donphan / Florges", placing: 1 },
], points: 15 },
{ name: "Melvyn Lee",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zoroark-GX / Persian", placing: 1 },
], points: 50 },
{ name: "Meng Hon Chow",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Weavile-GX Toolbox", placing: 6 },
], points: 8 },
{ name: "Michael Kan",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 16 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 115 },
{ name: "Mikaere Newey",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blastoise / Keldeo-GX", placing: 17 },
], points: 60 },
{ name: "Mitch Knuckey",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
{ date: "14/09/19", tournament: "Seaford Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 3 },
{ date: "08/09/19", tournament: "Adelaide LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 18 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Malamar / Giratina", placing: 126 },
], points: 176 },
{ name: "Mitchell Dowling",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Beheeyem", placing: 6 },
{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Baby Blacephalon", placing: 4 },
], points: 35 },
{ name: "Naomi Murn",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 32 },
], points: 60 },
{ name: "Nicholas Apostolou",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 1 },
{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 14 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 8 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 198 },
{ name: "Nicholas Moore",
achievements: [{ date: "21/09/19", tournament: "Gold Coast Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
{ date: "17/08/19", tournament: "DC Open Flight 1", cycle: "N/A", deck: "Gardevoir & Sylveon-GX", placing: 54 },
], points: 90 },
{ name: "Nicole Manasan",
achievements: [{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Zoroark-GX / Greninja & Zoroark-GX", placing: 4 },
], points: 10 },
{ name: "Paul Coletta",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Baby Blacephalon", placing: 2 },
], points: 52 },
{ name: "Paul Neilmer Feliciano",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 6 },
], points: 25 },
{ name: "Rinesh John",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Baby Blacephalon", placing: 6 },
], points: 25 },
{ name: "Robin Sangwan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 26 },
], points: 60 },
{ name: "Ryan Bielak",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 3 },
], points: 32 },
{ name: "Sameer Sangwan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 10 },
{ date: "17/08/19", tournament: "DC Open Flight 2", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 71 },
], points: 120 },
{ name: "Shanan Kan",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
], points: 32 },
{ name: "Shane Quinn",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Vileplume Stall", placing: 3 },
], points: 82 },
{ name: "Shang Chua",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Baby Blacephalon", placing: 2 },
], points: 62 },
{ name: "Stan Lin",
achievements: [{ date: "21/09/19", tournament: "Top Ryde Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 6 },
], points: 25 },
{ name: "Stefan Cocks",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Quagsire / Naganadel", placing: 5 },
], points: 25 },
{ name: "Stephen Kirk",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 40 },
{ name: "Steven Filiposki",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 8 },
{ name: "Syahmi Razak",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 25 },
{ name: "Tan Jun Hao",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 4 },
], points: 32 },
{ name: "Te-Awhi Te Angina",
achievements: [{ date: "21/09/19", tournament: "Ormond Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 7 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 37 },
{ name: "Terrence Wong",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Spiritomb / Froslass", placing: 4 },
], points: 32 },
{ name: "Titally Tan",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
], points: 25 },
{ name: "Tom Tutone",
achievements: [{ date: "14/09/19", tournament: "Ormond LC", cycle: "September", deck: "Weavile-GX Toolbox", placing: 1 },
], points: 15 },
{ name: "Tommy Xie",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 8 },
], points: 25 },
{ name: "Tripp May",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Baby Blacephalon", placing: 25 },
], points: 60 },
{ name: "Tyson Maggio",
achievements: [{ date: "15/09/19", tournament: "Bendigo Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 7 },
], points: 25 },
{ name: "Wei Jie Fo",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 6 },
{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
], points: 75 },
{ name: "Wesley Sheng",
achievements: [{ date: "22/09/19", tournament: "Table Top Cup", cycle: "Quarter 1", deck: "Malamar / Garchomp & Giratina-GX", placing: 2 },
], points: 40 },
{ name: "Yee Wei Chun",
achievements: [{ date: "14/09/19", tournament: "Penang Cup", cycle: "Quarter 1", deck: "Pidgeotto Control", placing: 7 },
], points: 25 },
{ name: "Ying Hao Tou",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 29 },
{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
], points: 141 },
{ name: "Ying Tou Hao",
achievements: [{ date: "22/09/19", tournament: "Maitland LC", cycle: "September", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 12 },
{ name: "York Robson",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Malamar / Garchomp & Giratina-GX", placing: 21 },
], points: 60 },
{ name: "Yu Xiang",
achievements: [{ date: "15/09/19", tournament: "West City Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 4 },
], points: 72 },
{ name: "Zachery Quince",
achievements: [{ date: "22/09/19", tournament: "Gold Coast LC", cycle: "September", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Baby Blacephalon", placing: 1 },
], points: 30 },
];

module.exports = players;