import React from 'react';
import { Grid, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

const headerStyle = {
    color: 'white',
    fontFamily: 'Muli',
    fontSize: '16px'
};

const cellStyle = {
    fontFamily: 'Muli',
    fontSize: '20px'
};

// Player templating

const PlayerInfo = ({ setCurrentTournament, currentPlayer, decks, tournamentList }) => {
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
                <h2> {currentPlayer.name} </h2>
            </Grid>
            <Grid>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="center" style={headerStyle}>Date</TableCell>
                            <TableCell align="center" style={headerStyle}>Tournament</TableCell>
                            <TableCell align="center" style={headerStyle}>Deck</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center" style={headerStyle}>Placing</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlayer.achievements.map((achievement, key) => {
                            var search = compareDecks(achievement);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                return <img key={key} src={img} style={{height: '70px', width: '70px'}}  alt="rekt" />
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="center" style={cellStyle}>{achievement.date}</TableCell>
                                <TableCell component="th" align="center">
                                    <button onClick={() => setCurrentTournament(compareTournaments(achievement.tournament, achievement.date))}> {achievement.tournament}</button>
                                </TableCell>
                                <TableCell align="center" style={cellStyle}>{achievement.deck}</TableCell>
                                <TableCell align="center">
                                <p>{sprites}</p>
                                </TableCell>
                                <TableCell align="center" style={cellStyle}>
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
