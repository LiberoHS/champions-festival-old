import React from 'react';
import { Grid, Paper } from '@material-ui/core';

// Tournament templating
const Tournament = ({ currentTournament }) => {
    const standingsMap = currentTournament.standings.map((item, key) => {
        return (
            <Grid>
                <Paper>
                    <h1> {key+1} {item.player} {item.deck} </h1>
                </Paper>
            </Grid>
        )
    });
    return (
            <Grid item xs={12}>
                <Paper>
                    <h1> {currentTournament.name} </h1>
                    <h2> <b>Date:</b> {currentTournament.date} </h2>
                    <h2> <b>Number of players:</b> {currentTournament.attendance} </h2>
                    <h2> <b>Type of event:</b> {currentTournament.type} </h2>
                    <h2> <b>Format:</b> {currentTournament.format} </h2>
                </Paper>
                <Paper style={{ display: 'flex', alignItems: 'center' }}>
                    <p>{standingsMap}</p>
                </Paper>
            </Grid>
    )
}

export default Tournament;
