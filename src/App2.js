// Started by Jeremy Lim on 03/09/2019
// Currently on v4.1 deployed, v4.1 local, released

import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, Link, Switch, FormControlLabel, IconButton } from '@material-ui/core';
import { DataGraph, Footer, HomeMenu, NavBar, PlayerInfo, PlayerList, SearchBar, TableGrid, TournamentInfo, TournamentList } from './components';
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
// Filter functionality -> filter by region and format
// Decklist integration (v5)
// BUG: (data-report.js) changing indexEnd of i+1 to i creates an error
// BUG: Search bar cannot handle empty inputs

// class App extends React.Component {
function App() {
    state = {
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
    }

    // Changed states for back button
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

    // changes the current tab on the page
    setCurrentTab = (tab) => {
        if (tab === 'home') {
            this.setState({ show: 'home', currentTournament: null });
        } else if (tab === 'tournaments') {
            this.setState({ show: 'tournamentList' })
            this.tournamentList();
        } else if (tab === 'players') {
            this.setState({ show: 'playerList', currentPlayer: null, playerList: playerList });
        } else if (tab === 'data') {
            this.setState({ show: 'data' });
        }
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

        const tournamentCols = [
            { name: 'date', title: 'Date' },
            { name: 'name', title: 'Name' },
            { name: 'region', title: 'Region' },
            { name: 'type', title: 'Type' },
            { name: 'cycle', title: 'Cycle' },
            { name: 'attendance', title: 'Attendance' },
        ]
        const footerCopyright = "Created by Jeremy Lim © 2020";

        return (
            <Grid>
                <Grid container>
                    <Grid item xs={10}>
                        <nav className="nav-bar">
                            {show !== 'home' && <IconButton style={buttonStyle} onClick={this.backButton} aria-label="back">
                                <ArrowBackIosIcon />
                            </IconButton>}
                            <NavBar setCurrentTab={this.setCurrentTab} ></NavBar>
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
                    {/* TESTING */}
                    {show === 'test' && <TableGrid tournamentList={[]}></TableGrid>}

                    {/* Tournament List */}
                    {show === 'tournamentList' && <FormControlLabel control={
                        <Switch checked={checkedChallenge} onChange={this.filterChallenges} value="checkedChallenge"/>
                    } label='No Challenges' />}
                    {show === 'tournamentList' && <TournamentList
                    setCurrentTournament={this.setCurrentTournament}/>}

                    {/* Player List */}
                    {show === 'playerList' && <FormControlLabel control={
                        <Switch checked={checkedPoints} onChange={this.sortPoint} value="checkedPoints"/>
                    } label='Sort Points' />}
                    {show === 'playerList' && <PlayerList
                    setCurrentPlayer={this.setCurrentPlayer}/>}

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
                <Grid>
                    <Footer children={footerCopyright} />
                </Grid>
            </Grid>
        )
    }
}

export default App;
