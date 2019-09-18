// Started by Jeremy Lim on 03/09/2019
// Currently on v3.2.1 deployed, v3.3 local, unreleased

import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, Link, Switch, FormControlLabel, IconButton } from '@material-ui/core';
import { DataGraph, HomeMenu, PlayerInfo, PlayerList, SearchBar, TournamentInfo, TournamentList } from './components';
import decks from './data/decks.js';
import tournamentList from './data/tournaments.js';
import playerList from './data/players.js';
import topDecks from './data/topDecks.js';

const buttonStyle = {
    height: '25px',
    width: '40px',
    bottom: '10px'
};

// TO-DO LIST
// IMPORTANT - Fix margin styling for responsiveness
// Table paginations
// Sorting tournaments
// Need to refactor Challenges filter
// Need to refactor styling
// Filter functionality
// Data analytics (v4) (done)
// Date-time integration (done)
// Calculates the dataset (done)
// Line chart (done)
// Decklist integration (v5)
// BUG: (data-report.js) changing indexEnd of i+1 to i creates an error

class App extends React.Component {
    state = {
        tournamentList: tournamentList,
        decks: decks,
        playerList: playerList,
        topDecks: topDecks,

        currentTournament: null,
        currentPlayer: null,

        show: 'home',
        data: null,
        weekData: 4,

        checkedChallenge: false,
        checkedPoints: false,
        tracker: 0
    }

    // Changed states
    backButton = () => {
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
    }

    setCurrentTournament = (tournament) => {
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
    }

    homePage = () => {
        this.setState({ show: 'home', currentTournament: null });
    }

    tournamentList = () => {
        var filteredTournaments = tournamentList.filter((tournament, key) => {
            return (tournament.type !== 'League Challenge');
        });

        if (this.state.checkedChallenge === true) {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: filteredTournaments });
        } else {
            this.setState({ show: 'tournamentList', currentTournament: null, tournamentList: tournamentList });
        }
    }

    playerList = () => {
        this.setState({ show: 'playerList', currentPlayer: null, playerList: playerList });
    }

    dataAnalytics = () => {
        this.setState({ show: 'data' });
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
    }

    sortPoint = () => {
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
        playerList.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
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

    render () {
        const { tournamentList, currentTournament, playerList, currentPlayer,
        decks, topDecks, show, checkedChallenge, checkedPoints, weekData } = this.state;

        return (
            <Grid>
                <Grid container>
                    <Grid item xs={10}>
                        <nav className="nav-bar">
                            {show !== 'home' && <IconButton style={buttonStyle} onClick={this.backButton} aria-label="back">
                                <ArrowBackIosIcon />
                            </IconButton>}
                            <div className="nav-bar-items">
                                <ul>
                                <li><Link style={{cursor: 'pointer'}} onClick={this.homePage}>Home</Link></li>
                                <li><Link style={{cursor: 'pointer'}} onClick={this.tournamentList}>Tournaments</Link></li>
                                <li><Link style={{cursor: 'pointer'}} onClick={this.playerList}>Players</Link></li>
                                <li><Link style={{cursor: 'pointer'}} onClick={this.dataAnalytics}>Data Analytics</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </Grid>
                </Grid>
                <Grid style={{marginLeft: '5%', marginRight: '5%'}}>
                    {/* Search Bars width: '90%', height: '90%' */}
                    {show === 'tournamentList' && <SearchBar onFormSubmit={this.handleChange}/>}
                    {show === 'playerList' && <SearchBar onFormSubmit={this.handleChange}/>}

                    {/* SORT FUNCTIONALITY */}
                    {/* Home Menu */}
                    {show === 'home' && <HomeMenu
                    setCurrentTournament={this.setCurrentTournament}
                    tournaments={tournamentList}
                    decks={decks}
                    players={playerList}
                    topDecks={topDecks}/>}

                    {/* Tournament List */}
                    {show === 'tournamentList' && <FormControlLabel control={
                        <Switch checked={checkedChallenge} onChange={this.filterChallenges} value="checkedChallenge"/>
                    } label='No Challenges' />}
                    {show === 'tournamentList' && <TournamentList
                    setCurrentTournament={this.setCurrentTournament}
                    tournamentList={tournamentList}/>}

                    {/* Player List */}
                    {show === 'playerList' && <FormControlLabel control={
                        <Switch checked={checkedPoints} onChange={this.sortPoint} value="checkedPoints"/>
                    } label='Sort Points' />}
                    {show === 'playerList' && <PlayerList
                    setCurrentPlayer={this.setCurrentPlayer}
                    playerList={playerList}/>}

                    {/* Tournament Info */}
                    {show === 'tournament' && <TournamentInfo
                    currentTournament={currentTournament}
                    setCurrentPlayer={this.setCurrentPlayer}
                    decks={decks} />}

                    {/* Player Info */}
                    {show === 'player' && <PlayerInfo
                    currentPlayer={currentPlayer}
                    setCurrentPlayer={this.setCurrentPlayer}
                    setCurrentTournament={this.setCurrentTournament}
                    decks={decks}
                    tournamentList={tournamentList} />}

                    {/* Data Analytics */}
                    {/*<Grid style={{marginLeft: '10%', marginRight: '10%'}}>*/}
                    {show === 'data' && <DataGraph
                    weekData={weekData}
                    setData={this.setData}/>}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
        )
    }
}

export default App;
