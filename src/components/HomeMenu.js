import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Paper } from '@material-ui/core';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

const tableGrid = {
    margin: '20px',
    width: '450px',
    height: '700px',
    backgroundColor: 'white'
};

const text = {
    margin: '15px',
    padding: '10px'
}

const HomeMenu = ({ setCurrentTournament, tournaments, decks }) => {
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

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        tableWrapper: {
            maxHeight: 600,
            minWidth: 100,
            overflow: 'auto',
        },
    });

    const classes = useStyles();

    var newestFormat = tournaments[0].format;
    var currFormat = tournaments.filter((tournament, key) => {
        return (tournament.format === 'UPR-UNM' || tournament.format === newestFormat);
    });

    if (currFormat.length < 5) {
        currFormat = tournaments.filter((tournament, key) => {
            return (key < 5);
        });
    }

    return (
        <Grid>
            <Grid container>
                <Grid item xs={11} style={tableGrid}>
                    <h3 style={text}>Latest Tournament Winners | UPR-UNM and {newestFormat}</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" style={headerStyle}>Date</TableCell>
                                        <TableCell align="left" style={headerStyle}>Tournament</TableCell>
                                        <TableCell align="left" style={headerStyle}>Name</TableCell>
                                        {isNotMobile && <TableCell align="left" style={headerStyle}>Deck</TableCell>}
                                        {isNotMobile && <TableCell align="left"></TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {currFormat.map((tournament, key) => {
                                    var search = compareDecks(tournament.standings[0]);
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
                                        <TableCell align="left" style={cellStyle}>{tournament.date}</TableCell>
                                        <TableCell component="th" align="left" style={cellStyle}>
                                            <Link style={{cursor: 'pointer'}} onClick={() => setCurrentTournament(tournament)}>{tournament.name}</Link>
                                        </TableCell>
                                        <TableCell align="left" style={cellStyle}>{tournament.standings[0].name}</TableCell>
                                        {isNotMobile && <TableCell align="left" style={cellStyle}>{tournament.standings[0].deck}</TableCell>}
                                        {isNotMobile && <TableCell align="left">
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
        </Grid>
    )
}

export default HomeMenu;
