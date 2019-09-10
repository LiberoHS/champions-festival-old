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

// Tournament templating

const TournamentInfo = ({ setCurrentPlayer, currentTournament, decks }) => {
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
            <Grid>
                <h2> {currentTournament.name} </h2>
                <p> <b>Date:</b> {currentTournament.date} </p>
                <p> <b>Number of players:</b> {currentTournament.attendance} </p>
                <p> <b>Cycle:</b> {currentTournament.cycle}</p>
                <p> <b>Type of event:</b> {currentTournament.type} </p>
                <p> <b>Format:</b> {currentTournament.format} </p>
            </Grid>
            <Grid>
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
                        {currentTournament.standings.map((player, key) => {
                            var search = compareDecks(player);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                return <img key={key} src={img} style={{height: '70px', width: '70px'}}  alt="rekt" />
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="center" style={cellStyle}>{player.placing}</TableCell>
                                <TableCell component="th" align="center">
                                    <button onClick={() => setCurrentPlayer(player)}> {player.name}</button>
                                </TableCell>
                                <TableCell align="center" style={cellStyle}>{player.deck}</TableCell>
                                <TableCell align="center">
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
