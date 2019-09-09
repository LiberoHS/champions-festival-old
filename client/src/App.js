// Started by Jeremy Lim on 03/09/2019

import React from 'react';
import { Grid, Switch, FormControlLabel } from '@material-ui/core';
import { PlayerInfo, SearchBar, TournamentInfo, TournamentList } from './components';
import decks from './data/decks.js';
import tournamentList from './data/tournaments.js';
import players from './data/players.js';

// HOME PAGE
// Top performing decks this week
// Top performing players
// Latest tournament
// Upcoming tournaments

// TO-DO LIST
// Sorting tournaments
// Player functionality
// Data analytics
// Need to refactor Challenges filter
// Filter functionality for Cups

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
        tournamentList: tournamentList,
        decks: decks,
        players: players,
        currentTournament: null,
        currentPlayer: null,
        show: 'home',
        data: null,
        checkedChallenge: false
    }

    // Changed states
    setCurrentTournament = (tournament) => {
        this.setState({ currentTournament: tournament, show: 'tournament' });
    }

    setCurrentPlayer = (player) => {
        this.setState({ currentPlayer: players[players.findIndex(x => x.name === player.name)], show: 'player' });
    }

    homePage = () => {
        this.setState({ show: 'home', currentTournament: null });
    }

    tournamentList = () => {
        var filteredList = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            this.setState({ show: 'list', currentTournament: null, tournamentList: filteredList });
        } else {
            this.setState({ show: 'list', currentTournament: null, tournamentList: tournamentList });
        }
    }

    // Filter for search bar (WIP for refactoring)
    handleChange = async (searchTerm) => {
        var searchedList;
        var filteredList = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            searchedList = filteredList.filter((tournament, key) => {
                if(tournament.name.toLowerCase().search(searchTerm.toLowerCase()) === 0) {
                    return tournament;
                }

                return 0;
            });

            this.setState({ show: 'list', currentTournament: null, tournamentList: filteredList });
        } else {
            searchedList = tournamentList.filter((tournament, key) => {
                if(tournament.name.toLowerCase().search(searchTerm.toLowerCase()) === 0) {
                    return tournament;
                }

                return 0;
            });

            this.setState({ show: 'list', currentTournament: null, tournamentList: tournamentList });
        }

        this.setState({ show: 'list', currentTournament: null, tournamentList: searchedList });
    }

    // Filter out League Challenges (WIP for refactoring)
    filterChallenges = () => {
        var filteredList = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            this.setState({ show: 'list', currentTournament: null, tournamentList: tournamentList, checkedChallenge: false });
        } else {
            this.setState({ show: 'list', currentTournament: null, tournamentList: filteredList, checkedChallenge: true });
        }
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
        const { tournamentList, currentTournament, currentPlayer, decks, show, checkedChallenge } = this.state;
        return (
            <Grid>
                <Grid>
                    <Grid>
                        <button onClick={this.homePage}>Home</button>
                        <button onClick={this.tournamentList}>Tournaments</button>
                    </Grid>
                </Grid>
                <Grid>
                    {show === 'list' && <SearchBar onFormSubmit={this.handleChange}/>}
                    {/* SORT FUNCTIONALITY */}
                    {show === 'list' && <FormControlLabel control={
                        <Switch checked={checkedChallenge} onChange={this.filterChallenges} value="checkedChallenge"/>
                    } label='No Challenges' />}
                    {show === 'list' && <TournamentList setCurrentTournament={this.setCurrentTournament} tournamentList={tournamentList}/>}
                </Grid>
                <Grid>
                    {show === 'tournament' && <TournamentInfo currentTournament={currentTournament} setCurrentPlayer={this.setCurrentPlayer} decks={decks} />}
                </Grid>
                <Grid>
                    {show === 'player' && <PlayerInfo currentPlayer={currentPlayer} setCurrentPlayer={this.setCurrentPlayer} decks={decks} />}
                </Grid>
            </Grid>
        )
    }
}

export default App;
