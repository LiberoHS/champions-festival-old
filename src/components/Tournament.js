import React from 'react';
import { Grid, Paper } from '@material-ui/core';

// Tournament templating
const Tournament = ({ playerData }) => {
    const map = playerData.map((item, key) => {
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
                    <h1>Tournament</h1>
                </Paper>
                <Paper style={{ display: 'flex', alignItems: 'center' }}>
                    <h1>{map}</h1>
                </Paper>
            </Grid>
    )
}

export default Tournament;
