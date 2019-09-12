import React from 'react';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';
import { useMediaQuery } from 'react-responsive';

// Player templating

const PlayerInfo = ({ setCurrentTournament, currentPlayer, decks, tournamentList }) => {
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

        return target;
    }

    function compareTournaments(name, date) {
        for (var i = 0; i < tournamentList.length; i++) {
            if (tournamentList[i].name === name && tournamentList[i].date === date) {
                return tournamentList[i];
            }
        }

        return name
    }

    return(
        <Grid item xs={12}>
            <Grid>
                <h3> {currentPlayer.name} </h3>
            </Grid>
            <Grid className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="left" style={headerStyle}>Date</TableCell>
                            <TableCell align="left" style={headerStyle}>Tournament</TableCell>
                            <TableCell align="left" style={headerStyle}>Deck</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left" style={headerStyle}>Placing</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlayer.achievements.map((achievement, key) => {
                            var search = compareDecks(achievement);
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
                                <TableCell align="left" style={cellStyle}>{achievement.date}</TableCell>
                                <TableCell component="th" align="left" style={cellStyle}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentTournament(compareTournaments(achievement.tournament, achievement.date))}>{achievement.tournament}</Link>
                                </TableCell>
                                <TableCell align="left" style={cellStyle}>{achievement.deck}</TableCell>
                                <TableCell align="left">
                                <p>{sprites}</p>
                                </TableCell>
                                <TableCell align="left" style={cellStyle}>
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

export default PlayerInfo;
