// Started by Jeremy Lim on 03/09/2019

import React from 'react';
import { Grid } from '@material-ui/core';
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
            { name: 'Newcastle LC', region: 'NSW', attendance: '14', type: 'League Challenge', format: 'SUM-UNB', date: '10/08/19',
            standings: [
                { name: 'Ying Hao Tou', deck: 'Ability Reshiram & Charizard-GX', placing: 1 },
                { name: 'Jake Cruwys', deck: 'Zoroark-GX Checkmate', placing: 2 },
                { name: 'Shane Quinn', deck: 'Vileplume Stall', placing: 3 },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX', placing: 4 },
            ]},
            { name: 'Penrith LC', region: 'NSW', attendance: '7', type: 'League Challenge', format: 'SUM-UNB', date: '11/08/19',
            standings: [
                { name: 'Mehul Gajwani', deck: 'Unown Hand / Donphan', placing: 1 },
                { name: 'Ying Hao Tou', deck: 'Green\'s Reshiram & Charizard-GX', placing: 2 },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX', placing: 3 },
                { name: 'Nicole Manasan', deck: 'Zoroark-GX / Greninja & Zoroark-GX', placing: 4 },
            ]},
            { name: 'Melbourne SPE', region: 'VIC', attendance: '127', type: 'Special Event', format: 'UPR-UNM', date: '31/08/19',
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
                { name: 'Tripp May', deck: 'Green\'s Blacephalon', placing: 25 },
                { name: 'Robin Sangwan', deck: 'Pikachu & Zekrom-GX', placing: 26 },
                { name: 'Edward Mouanoutoua', deck: 'Ability Reshiram & Charizard-GX', placing: 27 },
                { name: 'Ehren Roebuck', deck: 'Ability Reshiram & Charizard-GX', placing: 28 },
                { name: 'Ying Hao Tou', deck: 'Ability Reshiram & Charizard-GX', placing: 29 },
                { name: 'Ben D. Hall', deck: 'Ability Reshiram & Charizard-GX', placing: 30 },
                { name: 'Corey Munro', deck: 'Mew & Mewtwo-GX Toolbox', placing: 31 },
                { name: 'Naomi Murn', deck: 'Ability Reshiram & Charizard-GX', placing: 32 }
            ]},
            { name: 'Q1 Newcastle Cup', region: 'NSW', attendance: '', type: 'League Cup', format: 'UPR-UNM', date: '07/09/19',
            standings: [
            ]},
            { name: 'Q1 Maitland Cup', region: 'NSW', attendance: '', type: 'League Cup', format: 'UPR-UNM', date: '08/09/19',
            standings: [
            ]}
        ],
        decks: [
            { archetype: 'Pikachu & Zekrom-GX', thumbnails: ['../assets/sprites/31.png', '../assets/sprites/720.png'] },
            { archetype: 'Green\'s Reshiram & Charizard-GX', thumbnails: ['../assets/sprites/719.png', '../assets/sprites/14.png']},
            { archetype: 'Ability Reshiram & Charizard-GX', thumbnails: ['../assets/sprites/719.png', '../assets/sprites/14.png']},
            { archetype: 'Mew & Mewtwo-GX Toolbox', thumbnails: ['../assets/sprites/156.png', '../assets/sprites/155.png']}
        ],
        currentTournament: null,
        showTournament: false,
        showList: false,
        data: null
    }

    setCurrentTournament = (tournament) => {
        this.setState({ currentTournament: tournament, showTournament: true, showList: false });
    }

    homePage = () => {
        this.setState({ showTournament: false, showList: false });
    }

    tournamentList = () => {
        this.setState({ showTournament: false, showList: true });
    }

    tournamentInfo = () => {
        this.setState({ showTournament: true, showList: false });
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
                    {this.state.showList && <TournamentList setCurrentTournament={this.setCurrentTournament} tournamentList={tournamentList}/>}
                </Grid>
                <Grid>
                    {this.state.showTournament && <Tournament currentTournament={currentTournament} decks={decks} />}
                </Grid>
            </Grid>
        )
    }
}

export default App;
