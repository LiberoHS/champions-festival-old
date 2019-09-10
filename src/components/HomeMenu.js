import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

const headerStyle = {
    color: 'white',
    fontFamily: 'Muli',
    fontSize: '16px'
};

const cellStyle = {
    fontFamily: 'Muli',
    fontSize: '20px'
};

const wip = {
    fontFamily: 'Muli',
    fontSize: '48px',
}

const tableGrid = {
    margin: '50px',
    width: '450px',
    height: '700px',
    backgroundColor: 'white'
};

const text = {
    margin: '15px',
    padding: '10px'
}

const HomeMenu = ({ tournaments, decks }) => {
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
            overflow: 'auto',
        },
    });

    const classes = useStyles();

    return (
        <Grid>
            <Grid container>
                <Grid item xs={11} style={tableGrid}>
                    <h2 style={text}>Latest Tournament</h2>
                    <h3 style={text}>{tournaments[0].name} | {tournaments[0].date}</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="center" style={headerStyle}>Placing</TableCell>
                                        <TableCell align="center" style={headerStyle}>Name</TableCell>
                                        <TableCell align="center" style={headerStyle}>Deck</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {tournaments[0].standings.map((player, key) => {
                                    var search = compareDecks(player);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                        return <img key={key} src={img} style={{height: '70px', width: '70px'}}  alt="rekt" />
                                    })};

                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="center" style={cellStyle}>{player.placing}</TableCell>
                                        <TableCell align="center" style={cellStyle}>{player.name}</TableCell>
                                        <TableCell align="center" style={cellStyle}>{player.deck}</TableCell>
                                        <TableCell align="center">
                                        <p>{sprites}</p>
                                        </TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
                <Grid container>
                    <Grid item xs={3} style={tableGrid}>
                        <h2 style={text}>Upcoming Tournaments</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="center">Coming Soon in v3!</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={tableGrid}>
                        <h2 style={text}>Top Performing Decks of the Week</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="center">Coming Soon in v4!</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} style={tableGrid}>
                        <h2 style={text}>Top Performing Players</h2>
                        <Paper className={classes.root}>
                            <div className={classes.tableWrapper}>
                                <p style={wip} align="center">Coming Soon in v3!</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeMenu;
