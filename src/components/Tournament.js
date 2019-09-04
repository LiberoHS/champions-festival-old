import React from 'react';
import { Grid, Paper, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

// Tournament templating
const Tournament = ({ currentTournament }) => {
    return (
            <Grid item xs={12}>
                <Paper>
                    <h1> {currentTournament.name} </h1>
                    <h2> <b>Date:</b> {currentTournament.date} </h2>
                    <h2> <b>Number of players:</b> {currentTournament.attendance} </h2>
                    <h2> <b>Type of event:</b> {currentTournament.type} </h2>
                    <h2> <b>Format:</b> {currentTournament.format} </h2>
                </Paper>
                <Grid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Placing</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Deck</TableCell>
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
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
    )
}

export default Tournament;
