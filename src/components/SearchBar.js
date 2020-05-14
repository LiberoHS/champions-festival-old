import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function SearchBar(props) {
    function handleChange(event) {
        const { onChange } = props;
        onChange(event.target.value);
        event.preventDefault();
    }

    return (
        <Grid elevation={6} style={{ padding: '25px' }}>
            <TextField fullWidth label="Search..." onChange={handleChange} variant="outlined" />
        </Grid>
    )
}