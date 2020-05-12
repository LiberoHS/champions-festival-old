import React from 'react';
import Moment from 'react-moment';
import useWindowDimensions from './windowDimensions.js'
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';
import decks from '../data/decks.js';
import playerList from '../data/players.js';
import './TableGrid.css'

// Tournament templating

export default function TournamentInfo(props) {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    const tournament = props.tournament;

    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target
    }

    function comparePlayers(name) {
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].name === name) {
                return playerList[i];
            }
        }

        return name
    }

    return(
        <Grid item xs={12}>
            <Grid style={{padding: '10px'}}>
                <h3> {tournament.name} ({tournament.region}) </h3>
                <p> <b>Date:</b> <Moment format="DD/MM/YY">{tournament.date}</Moment> </p>
                <p> <b>Number of players:</b> {tournament.attendance} </p>
                <p> <b>Cycle:</b> {tournament.cycle}</p>
                <p> <b>Type of event:</b> {tournament.type} </p>
                <p> <b>Format:</b> {tournament.format} </p>
            </Grid>
            <Grid className="grid-container">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="left" className="table-header">Placing</TableCell>
                            <TableCell align="left" className="table-header">Name</TableCell>
                            <TableCell align="left" className="table-header">Deck</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tournament.standings.map((player, key) => {
                            var search = compareDecks(player);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                    if (width > 961) {
                                        return <img key={key} src={img} style={{height: '75px', width: '75px'}}  alt="rekt" />
                                    } else {
                                        return <img key={key} src={img} style={{height: '50px', width: '50px'}}  alt="rekt" />
                                    }
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{player.placing}</TableCell>
                                <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                        <Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentPlayer(comparePlayers(player.name))}>{player.name}</Link>
                                </TableCell>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{player.deck}</TableCell>
                                <TableCell align="left">
                                <p>{sprites}</p>
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}