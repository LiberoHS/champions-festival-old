import React from 'react';
import Moment from 'react-moment';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';
import { useMediaQuery } from 'react-responsive';

// Tournament templating

const TournamentInfo = ({ setCurrentPlayer, currentTournament, decks }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    const headerStyle = {
        color: 'white',
        fontFamily: 'Muli',
        fontSize: '16px'
    };

    let cellStyle = {};

    if (isNotMobile) {
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '20px'
        };
    } else {
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '16px'
        };
    }

    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target
    }

    return(
        <Grid item xs={12}>
            <Grid style={{padding: '10px'}}>
                <h3> {currentTournament.name} ({currentTournament.region}) </h3>
                <p> <b>Date:</b> <Moment format="DD/MM/YY">{currentTournament.date}</Moment> </p>
                <p> <b>Number of players:</b> {currentTournament.attendance} </p>
                <p> <b>Cycle:</b> {currentTournament.cycle}</p>
                <p> <b>Type of event:</b> {currentTournament.type} </p>
                <p> <b>Format:</b> {currentTournament.format} </p>
            </Grid>
            <Grid className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="left" style={headerStyle}>Placing</TableCell>
                            <TableCell align="left" style={headerStyle}>Name</TableCell>
                            <TableCell align="left" style={headerStyle}>Deck</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentTournament.standings.map((player, key) => {
                            var search = compareDecks(player);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                    if (isDesktop) {
                                        return <img key={key} src={img} style={{height: '75px', width: '75px'}}  alt="rekt" />
                                    } else {
                                        return <img key={key} src={img} style={{height: '50px', width: '50px'}}  alt="rekt" />
                                    }
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="left" style={cellStyle}>{player.placing}</TableCell>
                                <TableCell component="th" align="left" style={cellStyle}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentPlayer(player)}>{player.name}</Link>
                                </TableCell>
                                <TableCell align="left" style={cellStyle}>{player.deck}</TableCell>
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

export default TournamentInfo;
