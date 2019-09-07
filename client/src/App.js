// Started by Jeremy Lim on 03/09/2019

import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Tournament, TournamentList } from './components';

// HOME PAGE
// Tournament Table with clickable links

// FOR TOURNAMENT LIST
// Tournament Name (Include Quarters)
// Number of Players
// Date of Tournament

// FOR TOURNAMENT DATA
// Tournament Name (Include Quarters)
// Number of Players
// Date of Tournament
// Top 4/8 Players+Decks

// TO-DO LIST
// Will have database in another folder
// Sorting tournaments
// Player functionality
// Data analytics
// Feature to filter out Challenges (and Cups)

// class Player {
//     constructor(name) {
//         this.name = name;
//         this.achievements = [];
//     }
//
//     addAchievement(tournament, deck, placing) {
//         this.achievements.push({tournament: tournament, deck: deck, placing: placing})
//     }
//
//     deleteAchievement(tournament) {
//         function remove(arr, value) {
//             return arr.filter(function(ele){
//                 return ele != value;
//             });
//         }
//         for (let i = 0; i < this.achievements.length; i++) {
//             if (this.achievements[i].tournament === tournament) {
//                 this.achievements[i].remove()
//             }
//         }
//     }
// }
//
// class Tournament {
//     constructor(name, attendance, type, format, date) {
//         this.name = name;
//         this.attendance = attendance;
//         this.type = type;
//         this.format = format;
//         this.date = date;
//         this.standings = [];
//     }
//
//     addPlayer(player, deck) {
//         this.standings.push({name: player, deck: deck});
//     }
//
//     deletePlayer(player, deck) {
//
//     }
//
// }

class App extends React.Component {
    state = {
        tournamentList: [
            { name: 'Cannington Cup', date: '08/09/19', region: 'WA', attendance: '', type: 'League Cup', cycle: 'Quarter 1', format: 'UPR-UNM',
            standings: [
            ]},
            { name: 'Maitland Cup', date: '08/09/19', region: 'NSW', attendance: '', type: 'League Cup', cycle: 'Quarter 1', format: 'UPR-UNM',
            standings: [
            ]},
            { name: 'Singapore Cup', date: '07/09/19', region: 'SG', attendance: '63', type: 'League Cup', cycle: 'Quarter 1', format: 'UPR-UNM',
            standings: [
            ]},
            { name: 'BattleAxe Cup', date: '07/09/19', region: 'TAS', attendance: '', type: 'League Cup', cycle: 'Quarter 1', format: 'UPR-UNM',
            standings: [
            ]},
            { name: 'Newcastle Cup', date: '07/09/19', region: 'NSW', attendance: '38', type: 'League Cup', cycle: 'Quarter 1', format: 'UPR-UNM',
            standings: [
                { name: 'Henry Brand', deck: 'Mew & Mewtwo-GX Toolbox', placing: '' },
                { name: 'Brent Tonisson', deck: 'Pikachu & Zekrom-GX', placing: '' },
                { name: 'Jack Millar', deck: 'Pikachu & Zekrom-GX', placing: '' },
                { name: 'Christian Hasbani', deck: 'Malamar / Giratina', placing: '' },
                { name: 'Lucas Hamilton-Foster', deck: 'Green\'s Reshiram & Charizard-GX', placing: '' },
                { name: 'Shane Quinn', deck: 'Mew & Mewtwo-GX Toolbox', placing: '' },
                { name: 'Damian Lang', deck: 'Malamar / Garchomp & Giratina-GX', placing: '' },
                { name: 'Blake Lobina', deck: 'Pikachu & Zekrom-GX', placing: '' },
            ]},
            { name: 'Melbourne SPE', date: '31/08/19', region: 'VIC', attendance: '127', type: 'Special Event', cycle: 'N/A', format: 'UPR-UNM',
            standings: [
                { name: 'Kaiwen Cabbabe', deck: 'Pikachu & Zekrom-GX', placing: 1 },
                { name: 'Angus Johnson', deck: 'Ability Reshiram & Charizard-GX', placing: 2 },
                { name: 'Carol Poyner', deck: 'Green\'s Reshiram & Charizard-GX', placing: 3 },
                { name: 'Henry Brand', deck: 'Mew & Mewtwo-GX Toolbox', placing: 4 },
                { name: 'Brent Tonisson', deck: 'Pikachu & Zekrom-GX', placing: 5 },
                { name: 'Aaron Stringfellow', deck: 'Ability Reshiram & Charizard-GX', placing: 6 },
                { name: 'Jay Tyrell', deck: 'Quagsire / Naganadel', placing: 7 },
                { name: 'Joshua Bradley', deck: 'Green\'s Reshiram & Charizard-GX', placing: 8 },
                { name: 'Ashton Bradley', deck: 'Blacephalon-GX / Naganadel', placing: 9 },
                { name: 'Sameer Sangwan', deck: 'Ability Reshiram & Charizard-GX', placing: 10 },
                { name: 'Darcy Ryan', deck: 'Blacephalon-GX / Naganadel', placing: 11 },
                { name: 'Jack Millar', deck: 'Ability Reshiram & Charizard-GX', placing: 12 },
                { name: 'Matthew Burris', deck: 'Pikachu & Zekrom-GX', placing: 13 },
                { name: 'Nicholas Apostolou', deck: 'Ability Reshiram & Charizard-GX', placing: 14 },
                { name: 'James Cox', deck: 'Naganadel-GX Checkmate', placing: 15 },
                { name: 'Michael Kan', deck: 'Pikachu & Zekrom-GX', placing: 16 },
                { name: 'Mikaere Newey', deck: 'Blastoise / Keldeo-GX', placing: 17 },
                { name: 'Mitch Knuckey', deck: 'Ability Reshiram & Charizard-GX', placing: 18 },
                { name: 'Clifton Goh', deck: 'Pikachu & Zekrom-GX', placing: 19 },
                { name: 'Klive Aw', deck: 'Ability Reshiram & Charizard-GX', placing: 20 },
                { name: 'York Robson', deck: 'Malamar / Garchomp & Giratina-GX', placing: 21 },
                { name: 'Alex Crockford', deck: 'Pikachu & Zekrom-GX', placing: 22 },
                { name: 'Anders Balle', deck: 'Quagsire / Naganadel', placing: 23 },
                { name: 'Jack Fone', deck: 'Mew & Mewtwo-GX Toolbox', placing: 24 },
                { name: 'Tripp May', deck: 'Baby Blacephalon', placing: 25 },
                { name: 'Robin Sangwan', deck: 'Pikachu & Zekrom-GX', placing: 26 },
                { name: 'Edward Mouanoutoua', deck: 'Ability Reshiram & Charizard-GX', placing: 27 },
                { name: 'Ehren Roebuck', deck: 'Ability Reshiram & Charizard-GX', placing: 28 },
                { name: 'Ying Hao Tou', deck: 'Ability Reshiram & Charizard-GX', placing: 29 },
                { name: 'Ben D. Hall', deck: 'Ability Reshiram & Charizard-GX', placing: 30 },
                { name: 'Corey Munro', deck: 'Mew & Mewtwo-GX Toolbox', placing: 31 },
                { name: 'Naomi Murn', deck: 'Ability Reshiram & Charizard-GX', placing: 32 }
            ]},
            { name: 'Adelaide LC', date: '25/08/19', region: 'SA', attendance: '19', type: 'League Challenge', cycle: 'August', format: 'SUM-UNB',
            standings: [
                { name: 'Aaron van der Kolk', deck: 'Blacephalon-GX / Naganadel', placing: 1 },
                { name: 'Carol Poyner', deck: 'Green\'s Reshiram & Charizard-GX', placing: 2 },
                { name: 'Callum Walker', deck: 'Pikachu & Zekrom-GX', placing: 3 },
                { name: '', deck: 'Weavile-GX Toolbox', placing: 4 }
            ]},
            { name: 'Gold Coast LC', date: '25/08/19', region: 'QLD', attendance: '18', type: 'League Challenge', cycle: 'August', format: 'UPR-UNM',
            standings: [
                { name: 'James Williams', deck: 'Ability Reshiram & Charizard-GX', placing: 1 },
                { name: 'John Bishop', deck: 'Pikachu & Zekrom-GX', placing: 2 },
                { name: 'Aaron Stringfellow', deck: 'Mew & Mewtwo-GX Toolbox', placing: 3 },
                { name: 'Jack Millar', deck: 'Pikachu & Zekrom-GX', placing: 4 }
            ]},
            { name: 'Ormond LC', date: '24/08/19', region: 'VIC', attendance: '25', type: 'League Challenge', cycle: 'August', format: 'UPR-UNM',
            standings: [
                { name: 'Kaiwen Cabbabe', deck: 'Blacephalon-GX / Naganadel', placing: 1 },
                { name: 'Angus Johnson', deck: 'Pikachu & Zekrom-GX', placing: 2 },
                { name: 'Ashton Bradley', deck: 'Blacephalon-GX / Naganadel', placing: 3 },
                { name: 'Adam C', deck: 'Blacephalon-GX / Naganadel', placing: 4 },
                { name: 'Joseph Tran', deck: 'Pikachu & Zekrom-GX', placing: 5 },
                { name: 'Damian Filiposki', deck: 'Pikachu & Zekrom-GX', placing: 6 },
                { name: 'Henry Brand', deck: 'Mew & Mewtwo-GX Toolbox', placing: 7 },
                { name: 'Nicholas Apostolou', deck: 'Ability Reshiram & Charizard-GX', placing: 8 }
            ]},
            { name: 'Penrith LC', date: '11/08/19', region: 'NSW', attendance: '7', type: 'League Challenge', cycle: 'August', format: 'SUM-UNB',
            standings: [
                { name: 'Mehul Gajwani', deck: 'Unown Hand / Donphan', placing: 1 },
                { name: 'Ying Hao Tou', deck: 'Green\'s Reshiram & Charizard-GX', placing: 2 },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX', placing: 3 },
                { name: 'Nicole Manasan', deck: 'Zoroark-GX / Greninja & Zoroark-GX', placing: 4 }
            ]},
            { name: 'Newcastle LC', date: '10/08/19', region: 'NSW', attendance: '14', type: 'League Challenge', cycle: 'August', format: 'SUM-UNB',
            standings: [
                { name: 'Ying Hao Tou', deck: 'Ability Reshiram & Charizard-GX', placing: 1 },
                { name: 'Jake Cruwys', deck: 'Zoroark-GX Checkmate', placing: 2 },
                { name: 'Shane Quinn', deck: 'Vileplume Stall', placing: 3 },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX', placing: 4 }
            ]},
            { name: 'Neo Tokyo LC', date: '27/07/19', region: 'QLD', attendance: '9', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Zachery Quince', deck: 'Baby Blacephalon', placing: 1 },
                { name: 'Aaron Stringfellow', deck: 'Ability Reshiram & Charizard-GX', placing: 2 },
                { name: 'Matthew Burris', deck: 'Vileplume Stall', placing: 3 },
                { name: 'Blake Troy', deck: 'Vileplume Stall', placing: 4 }
            ]},
            { name: 'Ormond LC', date: '20/07/19', region: 'VIC', attendance: '21', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Kaiwen Cabbabe', deck: 'Vileplume Stall', placing: 1 },
                { name: 'Te-Awhi Te Angina', deck: 'Pikachu & Zekrom-GX', placing: 2 },
                { name: 'Nicholas Apostolou', deck: 'Pikachu & Zekrom-GX', placing: 3 },
                { name: 'Michael Kan', deck: 'Zoroark-GX / Dewgong', placing: 4 }
            ]},
            { name: 'Maitland LC', date: '14/07/19', region: 'NSW', attendance: '10', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Hugh Masters', deck: 'Beast Box', placing: 1 },
                { name: 'Shang Chua', deck: 'Baby Blacephalon', placing: 2 },
                { name: 'Jeremy Evans', deck: 'Malamar / Ultra Necrozma-GX', placing: 3 },
                { name: 'Mitchell Dowling', deck: 'Baby Blacephalon', placing: 4 }
            ]},
            { name: 'Newcastle LC', date: '13/07/19', region: 'NSW', attendance: '15', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Anton Piccio', deck: 'Ability Reshiram & Charizard-GX', placing: 1 },
                { name: 'Ying Hao Tou', deck: 'Green\'s Reshiram & Charizard-GX', placing: 2 },
                { name: 'James Cox', deck: 'Zoroark-GX / Dewgong', placing: 3 },
                { name: 'Jake Cruwys', deck: 'Zoroark-GX / Dewgong', placing: 4 }
            ]},
            { name: 'Gold Coast LC', date: '13/07/19', region: 'QLD', attendance: '13', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Harrison Hodges', deck: 'Zapdos / Ultra Beasts', placing: 1 },
                { name: 'Aaron Stringfellow', deck: 'Pikachu & Zekrom-GX', placing: 2 },
                { name: 'Kyle Beaumont', deck: 'Zapdos / Ultra Beasts', placing: 3 },
                { name: 'Jack Millar', deck: 'Zoroark-GX / Dewgong', placing: 4 }
            ]},
            { name: 'Penrith LC', date: '07/07/19', region: 'NSW', attendance: '15', type: 'League Challenge', cycle: 'July', format: 'SUM-UNB',
            standings: [
                { name: 'Brent Tonisson', deck: 'Malamar / Ultra Necrozma-GX', placing: 1 },
                { name: 'Paul Coletta', deck: 'Baby Blacephalon', placing: 2 },
                { name: 'Ying Hao Tou', deck: 'Green\'s Reshiram & Charizard-GX', placing: 3 },
                { name: 'Joshua Stone', deck: 'Malamar / Ultra Necrozma-GX', placing: 4 }
            ]}
        ],
        decks: [
            { archetype: 'Weavile-GX Toolbox', thumbnails: ['./assets/sprites/502.png'] },
            { archetype: 'Pikachu & Zekrom-GX', thumbnails: ['./assets/sprites/31.png','./assets/sprites/720.png'] },
            { archetype: 'Green\'s Reshiram & Charizard-GX', thumbnails: ['./assets/sprites/719.png','./assets/sprites/14.png','./assets/sprites/852.png'] },
            { archetype: 'Ability Reshiram & Charizard-GX', thumbnails: ['./assets/sprites/719.png','./assets/sprites/14.png'] },
            { archetype: 'Mew & Mewtwo-GX Toolbox', thumbnails: ['./assets/sprites/156.png','./assets/sprites/155.png'] },
            { archetype: 'Blacephalon-GX / Naganadel', thumbnails: ['./assets/sprites/1156.png','./assets/sprites/1155.png'] },
            { archetype: 'Baby Blacephalon', thumbnails: ['./assets/sprites/1156.png'] },
            { archetype: 'Quagsire / Naganadel', thumbnails: ['./assets/sprites/198.png','./assets/sprites/1155.png'] },
            { archetype: 'Naganadel-GX Checkmate', thumbnails: ['./assets/sprites/1155.png'] },
            { archetype: 'Unown Hand / Donphan', thumbnails: ['./assets/sprites/211.png','./assets/sprites/262.png'] },
            { archetype: 'Zoroark-GX / Greninja & Zoroark-GX', thumbnails: ['./assets/sprites/637.png','./assets/sprites/742.png'] },
            { archetype: 'Blastoise / Keldeo-GX', thumbnails: ['./assets/sprites/16.png','./assets/sprites/726.png'] },
            { archetype: 'Malamar / Garchomp & Giratina-GX', thumbnails: ['./assets/sprites/811.png','./assets/sprites/486.png','./assets/sprites/534.png'] },
            { archetype: 'Malamar / Ultra Necrozma-GX', thumbnails: ['./assets/sprites/811.png','./assets/sprites/1151.png'] },
            { archetype: 'Malamar / Giratina', thumbnails: ['./assets/sprites/811.png','./assets/sprites/533.png'] },
            { archetype: 'Vileplume Stall', thumbnails: ['./assets/sprites/51.png'] },
            { archetype: 'Zoroark-GX Checkmate', thumbnails: ['./assets/sprites/637.png','./assets/sprites/1155.png'] },
            { archetype: 'Zoroark-GX / Dewgong', thumbnails: ['./assets/sprites/637.png','./assets/sprites/93.png'] },
            { archetype: 'Zapdos / Ultra Beasts', thumbnails: ['./assets/sprites/150.png','./assets/sprites/1128.png','./assets/sprites/1127.png'] },
            { archetype: 'Beast Box', thumbnails: ['./assets/sprites/1155.png','./assets/sprites/1128.png','./assets/sprites/1157.png'] }
        ],
        currentTournament: null,
        show: null,
        data: null
    }

    setCurrentTournament = (tournament) => {
        this.setState({ currentTournament: tournament, show: 'tournament' });
    }

    homePage = () => {
        this.setState({ show: null });
    }

    tournamentList = () => {
        this.setState({ show: 'list' });
    }

    // EXPRESS BACKEND
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render () {
        const { tournamentList, currentTournament, decks} = this.state;
        return (
            <Grid>
                <Grid>
                    <Grid>
                        <button onClick={this.homePage}>Home</button>
                        <button onClick={this.tournamentList}>Tournaments</button>
                    </Grid>
                </Grid>
                <Grid>
                    {/* SORT FUNCTIONALITY */}
                    {/* FILTER FUNCTIONALITY */}
                    {this.state.show === 'list' && <TournamentList setCurrentTournament={this.setCurrentTournament} tournamentList={tournamentList}/>}
                </Grid>
                <Grid>
                    {this.state.show === 'tournament' && <Tournament currentTournament={currentTournament} decks={decks} />}
                </Grid>
            </Grid>
        )
    }
}

export default App;
