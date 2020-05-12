// Started by Jeremy Lim on 03/09/2019
// Currently on v4.1 deployed, v4.1 local, released

import React, { useState, useEffect } from 'react';
import { Content } from './components';

// TO-DO LIST
// IMPORTANT - Fix margin styling for responsiveness
// Table paginations
// Sorting tournaments
// Need to refactor Challenges filter
// Need to refactor styling
// Filter functionality -> filter by region and format
// Decklist integration (v5)
// BUG: (data-report.js) changing indexEnd of i+1 to i creates an error
// BUG: Search bar cannot handle empty inputs

// class App extends React.Component {
function App() {
    
    /* state = {
        tournamentList: tournamentList,
        decks: decks,
        playerList: playerList,
        topDecks: topDecks,

        currentTournament: null,
        currentPlayer: null,

        show: 'test',
        data: null,
        weekData: 4,

        checkedChallenge: false,
        checkedPoints: false,
        tracker: 0
    } */

    // Changed states for back button
    /* backButton = () => {
        var filteredTournaments = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.show === 'tournamentList' || this.state.show === 'playerList') {
            this.setState({ show: 'home', currentTournament: null })
        } else if (this.state.show === 'tournament') {
            if (this.state.checkedChallenge === true) {
                this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: filteredTournaments });
            } else {
                this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: tournamentList });
            }
        } else if (this.state.show === 'player') {
            if (this.state.tracker === 1) {
                this.setState({ show: 'tournament', currentPlayer: null })
            } else if (this.state.tracker === 2) {
                this.setState({ show: 'playerList', currentPlayer: null })
            } else {
                this.setState({ show: 'home', currentPlayer: null })
            }
        } else if (this.state.show === 'data') {
            this.setState({ show: 'home' })
        }
    } */

    /* setCurrentTournament = (tournament) => {
        this.setState({ currentTournament: tournament, show: 'tournament' });
    }

    setCurrentPlayer = (player) => {
        this.setState({ currentPlayer: playerList[playerList.findIndex(x => x.name === player.name)], show: 'player' });
        if (this.state.show === 'tournament') {
            this.setState({ tracker: 1 });
        } else if (this.state.show === 'playerList') {
            this.setState({ tracker: 2 });
        }
    }

    setData = (value) => {
        this.setState({ weekData: value });
    } */

   /*  tournamentList = () => {
        var filteredTournaments = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: filteredTournaments });
        } else {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: tournamentList });
        }
    }

    // Filter for search bar (WIP for refactoring)
    handleChange = async (searchTerm) => {
        var searchedList;
        var searchedPlayers;
        var filteredTournaments = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.show === 'tournamentList') {
            if (this.state.checkedChallenge === true) {
                searchedList = filteredTournaments.filter((tournament, key) => {
                    if(tournament.name.toLowerCase().search(searchTerm.toLowerCase()) === 0) {
                        return tournament;
                    }

                    return 0;
                });

                this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: filteredTournaments });
            } else {
                searchedList = tournamentList.filter((tournament, key) => {
                    if(tournament.name.toLowerCase().search(searchTerm.toLowerCase()) === 0) {
                        return tournament;
                    }

                    return 0;
                });
            }

            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: searchedList });
        } else if (this.state.show === 'playerList') {
            searchedPlayers = playerList.filter((player, key) => {
                if(player.name.toLowerCase().search(searchTerm.toLowerCase()) === 0) {
                    return player;
                }

                return 0;
            });

            this.setState({ show: 'playerList', currentPlayer: null, playerList: searchedPlayers });
        }
    }

    // Filter out League Challenges (WIP for refactoring)
    filterChallenges = () => {
        var filteredTournaments = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: tournamentList, checkedChallenge: false });
        } else {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: filteredTournaments, checkedChallenge: true });
        }
    } */

    /* sortPoint = () => {
        if (this.state.checkedPoints === true) {
            playerList.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

            this.setState({ playerList: playerList, checkedPoints: false });
        } else if (this.state.checkedPoints === false) {
            playerList.sort(function (a, b) {
                return b.points - a.points;
            });

            this.setState({ playerList: playerList, checkedPoints: true });
        }
    }

    // EXPRESS BACKEND
    componentDidMount() {
        topDecks.sort(function (a, b) {
            return b.currCP - a.currCP;
        });

        this.setState({ playerList: playerList, topDecks: topDecks});

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

    const tournamentCols = [
        { name: 'date', title: 'Date' },
        { name: 'name', title: 'Name' },
        { name: 'region', title: 'Region' },
        { name: 'type', title: 'Type' },
        { name: 'cycle', title: 'Cycle' },
        { name: 'attendance', title: 'Attendance' },
    ] */

    return(
        <Content></Content>
    )
}

export default App;
