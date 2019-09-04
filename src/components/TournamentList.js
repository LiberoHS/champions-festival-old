import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const TournamentList = ({ setCurrentTournament, tournamentList }) => {
    const tournamentMap = tournamentList.map((item, key) => {
        return (
            <Grid>
                <Paper>
                    <button onClick={() => setCurrentTournament(item)}> {item.date} {item.name} {item.attendance} </button>
                </Paper>
            </Grid>
        )
    });
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center' }}>
                <h1>{tournamentMap}</h1>
            </Paper>
        </Grid>
    )
}

export default TournamentList;
