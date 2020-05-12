import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, Switch, FormControlLabel, IconButton } from '@material-ui/core';
import { DataGraph, Footer, HomeMenu, NavBar, PlayerInfo, PlayerList, SearchBar, TableGrid, TournamentInfo, TournamentList } from '../components';

const buttonStyle = {
    height: '25px',
    width: '40px',
    bottom: '10px'
};

export default function Content() {
    const [show, setShow] = useState('home');
    const [tournament, setTournament] = useState(null);
    const [player, setPlayer] = useState(null);
    const footerCopyright = "Created by Jeremy Lim © 2020";

    // changes the current tab on the page
    function setCurrentTab(tab) {
        setShow(tab);
    }

    function setCurrentTournament(tournament) {
        setTournament(tournament);
        setShow('tournamentInfo');
    }

    function setCurrentPlayer(player) {
        setPlayer(player);
        setShow('playerInfo');
    }

    return (
        <Grid>
            <Grid container>
                <Grid item xs={10}>
                    <nav className="nav-bar">
                        <NavBar show={show} setCurrentTab={setCurrentTab} ></NavBar>
                    </nav>
                </Grid>
            </Grid>
            <Grid style={{ marginLeft: '5%', marginRight: '5%' }}>

                {/* Home Menu */}
                {show === 'home' && <HomeMenu
                    setCurrentTournament={setCurrentTournament} />}

                {/* TESTING */}
                {show === 'test' && <TableGrid tournamentList={[]}></TableGrid>}

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