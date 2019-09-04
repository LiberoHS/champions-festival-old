import React from 'react';
import { Grid, Paper, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

// Tournament templating

const Tournament = ({ currentTournament, decks }) => {
    return(
        <Grid item xs={12}>
        <Paper>
            <h2> {currentTournament.name} </h2>
            <p> <b>Date:</b> {currentTournament.date} </p>
            <p> <b>Number of players:</b> {currentTournament.attendance} </p>
            <p> <b>Type of event:</b> {currentTournament.type} </p>
            <p> <b>Format:</b> {currentTournament.format} </p>
        </Paper>
        <Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Placing</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Deck</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentTournament.standings.map((player, key) => (
                        <TableRow key={key}>
                            <TableCell align="center">{key+1}</TableCell>
                            <TableCell component="th" align="center">
                                {player.name}
                            </TableCell>
                            <TableCell align="center">{player.deck}</TableCell>
                            <TableCell align="center"><img src={decks[0].thumbnails[0]}></img><p>{console.log(decks[0])}</p></TableCell>
                        </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Grid>
        </Grid>
    )
}

// decks.filter(deck => { return (deck.archetype === player.deck) } ).thumbnails

export default Tournament;
