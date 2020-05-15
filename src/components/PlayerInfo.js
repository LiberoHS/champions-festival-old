import React from 'react';
import useWindowDimensions from './windowDimensions.js'
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
// import { useStyles } from './useStyles';
import tournamentList from '../data/tournaments.js';
import decks from '../data/decks.js';
import './TableGrid.css'

// Player templating

export default function PlayerInfo(props) {
    // const classes = useStyles();
    const { width } = useWindowDimensions();
    const player = props.player;
    
    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target;
    }

    function compareTournaments(name, date) {
        for (var i = 0; i < tournamentList.length; i++) {
            if (tournamentList[i].name === name && tournamentList[i].date.format("DD/MM/YY") === date) {
                return tournamentList[i];
            }
        }

        return name
    }

    return(
        <Grid item xs={12}>
            <Grid>
                <h3> {player.name} </h3>
                <p> <b>Points:</b> {player.points}</p>
            </Grid>
            <Grid className="grid-container">
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="left" className="table-header">Date</TableCell>
                            <TableCell align="left" className="table-header">Tournament</TableCell>
                            <TableCell align="left" className="table-header">Deck</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left" className="table-header">Placing</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {player.achievements.map((achievement, key) => {
                            var search = compareDecks(achievement);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                    return <img key={key} src={img} className={width > 961 ? "desktop-icon" : "mobile-icon"} alt="rekt" />
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{achievement.date}</TableCell>
                                <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => props.setCurrentTournament(compareTournaments(achievement.tournament, achievement.date))}>{achievement.tournament}</Link>
                                </TableCell>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{achievement.deck}</TableCell>
                                <TableCell align="left">
                                <p>{sprites}</p>
                                </TableCell>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                    {achievement.placing}
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}