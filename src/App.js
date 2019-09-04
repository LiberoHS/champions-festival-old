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

class App extends React.Component {
    state = {
        tournamentList: [
            { name: 'Newcastle LC', attendance: '14', type: 'League Challenge', format: 'SUM-UNB', date: '10/08/19',
            standings: [
                { name: 'Ying Hao Tou', deck: 'Ability Reshiram & Charizard-GX' },
                { name: 'Jake Cruwys', deck: 'Zoroark-GX Checkmate' },
                { name: 'Shane Quinn', deck: 'Vileplume Stall' },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX' },
            ]},
            { name: 'Penrith LC', attendance: '7', type: 'League Challenge', format: 'SUM-UNB', date: '11/08/19',
            standings: [
                { name: 'Mehul Gajwani', deck: 'Unown Hand / Donphan' },
                { name: 'Ying Hao Tou', deck: 'Green\'s Reshiram & Charizard-GX' },
                { name: 'Joshua Stone', deck: 'Pikachu & Zekrom-GX' },
                { name: 'Nicole Manasan', deck: 'Zoroark-GX / Greninja & Zoroark-GX' },
            ]},
            { name: 'Melbourne SPE', attendance: '127', type: 'Special Event', format: 'UPR-UNM', date: '31/08/19',
            standings: [
                { name: 'Kaiwen Cabbabe', deck: 'Pikachu & Zekrom-GX' },
                { name: 'Angus Johnson', deck: 'Ability Reshiram & Charizard-GX' },
                { name: 'Carol Poyner', deck: 'Green\'s Reshiram & Charizard-GX' },
                { name: 'Henry Brand', deck: 'Mew & Mewtwo-GX Toolbox' },
                { name: 'Brent Tonisson', deck: 'Pikachu & Zekrom-GX' },
                { name: 'Aaron Stringfellow', deck: 'Ability Reshiram & Charizard-GX' },
                { name: 'Jay Tyrell', deck: 'Quagsire / Naganadel' },
                { name: 'Joshua Bradley', deck: 'Green\'s Reshiram & Charizard-GX' }
            ]},
        ],
        currentTournament: null,
        showTournament: false,
        showList: false
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

    render () {
        const { tournamentList, currentTournament } = this.state;
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
                    {this.state.showTournament && <Tournament currentTournament={currentTournament} />}
                </Grid>
            </Grid>
        )
    }
}

export default App;
