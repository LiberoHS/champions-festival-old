import React, { useState } from 'react';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import { Grid, Switch, FormControlLabel, IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { DataGraph, Footer, HomeMenu, NavBar, PlayerInfo, PlayerList, TournamentInfo, TournamentList } from '../components';

export default function Content() {
    const [show, setShow] = useState('home');
    const [tournament, setTournament] = useState(null);
    const [player, setPlayer] = useState(null);
    const footerCopyright = "Created by Jeremy Lim © 2020";

    // changes the current tab on the page
    function setCurrentTab(tab) {
        setShow(tab);
    }

    // sets the selected tournament for TournamentInfo component
    function setCurrentTournament(tournament) {
        setTournament(tournament);
        setShow('tournamentInfo');
    }

    // sets the selected player for PlayerInfo component
    function setCurrentPlayer(player) {
        setPlayer(player);
        setShow('playerInfo');
    }

    return (
        <Grid>
            <Grid item xs={10}>
                {show !== 'test' && <NavBar show={show} setCurrentTab={setCurrentTab} ></NavBar>}
            </Grid>
            <Grid style={{ marginLeft: '5%', marginRight: '5%' }}>

                {/* Home Menu */}
                {show === 'home' && <HomeMenu
                    setCurrentTournament={setCurrentTournament}
                    setCurrentPlayer={setCurrentPlayer} />}

                {/* Tournament List */}
                {show === 'tournamentList' && <TournamentList setCurrentTournament={setCurrentTournament}/>}

                {/* Player List */}
                {show === 'playerList' && <PlayerList setCurrentPlayer={setCurrentPlayer} />}

                {/* Tournament Info */}
                {show === 'tournamentInfo' && <TournamentInfo
                    tournament={tournament}
                    setCurrentPlayer={setCurrentPlayer} />}

                {/* Player Info */}
                {show === 'playerInfo' && <PlayerInfo
                    player={player}
                    setCurrentTournament={setCurrentTournament}/>}

                {/* Data Analytics */}
                {show === 'data' && <DataGraph/>}
            </Grid>
            <Grid>
                <Footer children={footerCopyright} />
            </Grid>
        </Grid>
    )
}