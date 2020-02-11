const topDecks = [
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 147, totalCP: 8239 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 124, totalCP: 953 },
{ deck: "Pikachu & Zekrom-GX", currCP: 107, totalCP: 3547 },
{ deck: "Gardevoir & Sylveon-GX", currCP: 102, totalCP: 2387 },
{ deck: "Pidgeotto Control", currCP: 74, totalCP: 1465 },
{ deck: "Baby Blacephalon / Pidgeotto", currCP: 60, totalCP: 1571 },
{ deck: "Baby Blacephalon", currCP: 59, totalCP: 720 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 35, totalCP: 4492 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 35, totalCP: 407 },
{ deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", currCP: 32, totalCP: 4640 },
{ deck: "Fossil Box", currCP: 25, totalCP: 57 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 22, totalCP: 512 },
{ deck: "Weavile-GX Toolbox", currCP: 12, totalCP: 112 },
{ deck: "Malamar / Giratina", currCP: 10, totalCP: 2155 },
{ deck: "Nuzzle Toolbox", currCP: 10, totalCP: 70 },
{ deck: "Blacephalon-GX / Naganadel", currCP: 10, totalCP: 1508 },
{ deck: "Gengar & Mimikyu-GX", currCP: 10, totalCP: 10 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 10, totalCP: 10 },
{ deck: "Volcarona / Silvally-GX", currCP: 0, totalCP: 15 },
{ deck: "ADP / Bird Trio", currCP: 0, totalCP: 533 },
{ deck: "Trevenant & Dusknoir-GX / Mismagius", currCP: 0, totalCP: 69 },
{ deck: "Doll Stall", currCP: 0, totalCP: 718 },
{ deck: "Persian-GX Checkmate", currCP: 0, totalCP: 125 },
{ deck: "ADP / Raichu & Alolan Raichu-GX", currCP: 0, totalCP: 40 },
{ deck: "Green's Lucario & Melmetal-GX", currCP: 0, totalCP: 452 },
{ deck: "Green's Reshiram & Charizard-GX", currCP: 0, totalCP: 817 },
{ deck: "Rowlet & Alolan Exeggutor-GX Toolbox", currCP: 0, totalCP: 20 },
{ deck: "Quagsire / Naganadel", currCP: 0, totalCP: 649 },
{ deck: "Naganadel-GX Checkmate", currCP: 0, totalCP: 92 },
{ deck: "Green's Blastoise & Piplup-GX", currCP: 0, totalCP: 22 },
{ deck: "ADP Control", currCP: 0, totalCP: 32 },
{ deck: "Malamar / Naganadel & Guzzlord-GX", currCP: 0, totalCP: 32 },
{ deck: "Naganadel & Guzzlord-GX / Mismagius", currCP: 0, totalCP: 655 },
{ deck: "Green's Garchomp & Giratina-GX", currCP: 0, totalCP: 12 },
{ deck: "Green's Beast Box", currCP: 0, totalCP: 10 },
{ deck: "Malamar / Trevenant & Dusknoir-GX", currCP: 0, totalCP: 305 },
{ deck: "Aerodactyl-GX", currCP: 0, totalCP: 20 },
{ deck: "Tangrowth / Absol", currCP: 0, totalCP: 10 },
{ deck: "Reshiram & Zekrom-GX", currCP: 0, totalCP: 10 },
{ deck: "Green's Charizard & Braixen-GX", currCP: 0, totalCP: 128 },
{ deck: "Arceus & Dialga & Palkia-GX / Spiritomb", currCP: 0, totalCP: 185 },
{ deck: "ADP / Pheromosa & Buzzwole-GX", currCP: 0, totalCP: 160 },
{ deck: "Granbull", currCP: 0, totalCP: 32 },
{ deck: "Poipole Stall", currCP: 0, totalCP: 125 },
{ deck: "Green's Arceus & Dialga & Palkia-GX", currCP: 0, totalCP: 1070 },
{ deck: "Malamar / Gourgeist", currCP: 0, totalCP: 15 },
{ deck: "Welder Toolbox", currCP: 0, totalCP: 246 },
{ deck: "Charizard TEU / Ninetales", currCP: 0, totalCP: 10 },
{ deck: "Weezing Spread", currCP: 0, totalCP: 35 },
{ deck: "Beheeyem", currCP: 0, totalCP: 90 },
{ deck: "Dusk Mane Necrozma-GX / Magnezone", currCP: 0, totalCP: 20 },
{ deck: "Charizard & Braixen-GX / Omastar", currCP: 0, totalCP: 160 },
{ deck: "Quagsire / Silvally-GX", currCP: 0, totalCP: 160 },
{ deck: "Charizard TEU / Salazzle", currCP: 0, totalCP: 100 },
{ deck: "Malamar / Solgaleo & Lunala-GX", currCP: 0, totalCP: 100 },
{ deck: "Green's Ultra Beasts", currCP: 0, totalCP: 12 },
{ deck: "Mewtwo & Mew-GX / Magnezone", currCP: 0, totalCP: 12 },
{ deck: "Turtonator / Naganadel", currCP: 0, totalCP: 22 },
{ deck: "Marshadow & Machamp-GX / Mismagius", currCP: 0, totalCP: 25 },
{ deck: "Mewtwo & Mew-GX / Shedinja", currCP: 0, totalCP: 62 },
{ deck: "Whimsicott-GX", currCP: 0, totalCP: 50 },
{ deck: "Gengar & Mimikyu-GX / Omastar", currCP: 0, totalCP: 12 },
{ deck: "Aegislash", currCP: 0, totalCP: 10 },
{ deck: "Keldeo-GX / White Kyurem", currCP: 0, totalCP: 10 },
{ deck: "Breloom", currCP: 0, totalCP: 32 },
{ deck: "Froslass / Lucario-GX", currCP: 0, totalCP: 25 },
{ deck: "Spiritomb / Froslass", currCP: 0, totalCP: 32 },
{ deck: "Blastoise / Keldeo-GX", currCP: 0, totalCP: 60 },
{ deck: "Donphan / Florges", currCP: 0, totalCP: 15 },
{ deck: "Zoroark-GX / Greninja & Zoroark-GX", currCP: 0, totalCP: 10 },
{ deck: "Vileplume Stall", currCP: 0, totalCP: 55 },
{ deck: "Zoroark-GX Checkmate", currCP: 0, totalCP: 12 },
{ deck: "Zoroark-GX / Persian", currCP: 0, totalCP: 50 },
{ deck: "Zygarde-GX", currCP: 0, totalCP: 32 },
{ deck: "Zoroark-GX / Silvally-GX", currCP: 0, totalCP: 32 },
{ deck: "Zoroark-GX / Dewgong", currCP: 0, totalCP: 40 },
{ deck: "Beast Box", currCP: 0, totalCP: 15 },
{ deck: "Zapdos / Ultra Beasts", currCP: 0, totalCP: 25 },
];

module.exports = topDecks;