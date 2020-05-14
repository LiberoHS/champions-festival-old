import React from 'react';
import Moment from 'react-moment';
import useWindowDimensions from './windowDimensions.js'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Paper } from '@material-ui/core';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import decks from '../data/decks.js';
import tournaments from '../data/tournaments.js';
import players from '../data/players.js';
import topDecks from '../data/topDecks.js';

const text = {
    margin: '15px',
    padding: '10px'
}

export default function HomeMenu(props) {
    const { width } = useWindowDimensions();
    let playerList = players;
    playerList.sort(function (a, b) {
        return b.points - a.points;
    });

    playerList = playerList.filter((player, key) => {
        return (key < 10);
    });

    let headerStyle = {};
    let cellStyle = {};
    let tableGrid = {};
    let flexContainer = {};

    if (width > 992) {
        headerStyle = {
            color: 'white',
            fontFamily: 'Muli',
            fontSize: '16px'
        };
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '20px'
        };
        tableGrid = {
            margin: '20px',
            width: '40%',
            height: '80%',
            backgroundColor: 'white'
        };
        flexContainer = {
            display: 'flex',
            flex: 1
        }
    } else {
        headerStyle = {
            color: 'white',
            fontFamily: 'Muli',
            fontSize: '12px'
        };
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '16px'
        };
        tableGrid = {
            margin: '10px',
            width: '95%',
            height: '90%',
            backgroundColor: 'white'
        };
    }

    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target;
    }

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        tableWrapper: {
            maxHeight: 800,
            minWidth: 100,
            overflow: 'auto',
        },
    });

    const classes = useStyles();

    var newestFormat = tournaments[0].format;
    var currFormat = tournaments.filter((tournament, key) => {
        return key < 5;
    });

    return (
        <Grid>
            <Grid container>
                <Grid item xs={11} style={tableGrid}>
                    <h3 style={text}>Latest Tournament Winners | {newestFormat}</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" style={headerStyle}>Date</TableCell>
                                        <TableCell align="left" style={headerStyle}>Tournament</TableCell>
                                        <TableCell align="left" style={headerStyle}>Name</TableCell>
                                        {width > 768 && <TableCell align="left" style={headerStyle}>Deck</TableCell>}
                                        {width > 768 && <TableCell align="left"></TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {currFormat.slice(0,5).map((tournament, key) => {
                                    var search = compareDecks(tournament.standings[0]);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                            if (width > 992) {
                                                return <img key={key} src={img} style={{height: '75px', width: '75px'}}  alt="rekt" />
                                            } else {
                                                return <img key={key} src={img} style={{height: '50px', width: '50px'}}  alt="rekt" />
                                            }
                                    })};

                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" style={cellStyle}><Moment format="DD/MM/YY">{tournament.date}</Moment></TableCell>
                                        <TableCell component="th" align="left" style={cellStyle}>
                                            <Link style={{cursor: 'pointer'}} onClick={() => props.setCurrentTournament(tournament)}>{tournament.name}</Link>
                                        </TableCell>
                                        <TableCell align="left" style={cellStyle}>{tournament.standings[0].name}</TableCell>
                                        {width > 768 && <TableCell align="left" style={cellStyle}>{tournament.standings[0].deck}</TableCell>}
                                        {width > 768 && <TableCell align="left">
                                        <p>{sprites}</p>
                                        </TableCell>}
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
                {/* <Grid container flex>
                    <Grid item xs={3} style={tableGrid}>
                        <h2 style={text}>Upcoming Tournaments</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="left">Coming Soon in v3!</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={tableGrid}>
                        <h2 style={text}>Top Performing Decks of the Week</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="left">Coming Soon in v4!</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} style={tableGrid}>
                        <h2 style={text}>Top Performing Players</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="left">Coming Soon in v3!</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid> */}
            </Grid>
            <Grid style={flexContainer}>
                <Grid item xs={11} style={tableGrid}>
                    <h3 style={text}>Top Performing Decks</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" style={headerStyle}>Deck</TableCell>
                                        <TableCell align="left" style={headerStyle}></TableCell>
                                        <TableCell align="left" style={headerStyle}>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {topDecks.slice(0,5).map((deck, key) => {
                                    var search = compareDecks(deck);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                            if (width > 992) {
                                                return <img key={key} src={img} style={{height: '75px', width: '75px'}}  alt="rekt" />
                                            } else {
                                                return <img key={key} src={img} style={{height: '50px', width: '50px'}}  alt="rekt" />
                                            }
                                    })};
                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" style={cellStyle}>{deck.deck}</TableCell>
                                        <TableCell align="left" style={cellStyle}>{sprites}</TableCell>
                                        <TableCell align="left" style={cellStyle}>{deck.currCP}</TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={11} style={tableGrid}>
                    <h3 style={text}>Top Performing Players</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" style={headerStyle}>Name</TableCell>
                                        <TableCell align="left" style={headerStyle}>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {players.slice(0,10).map((player, key) => {
                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" style={cellStyle}>{player.name}</TableCell>
                                        <TableCell align="left" style={cellStyle}>{player.points}</TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}