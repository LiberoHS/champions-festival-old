import React from 'react';
import { Grid, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
        this.handleSubmit(event);
    }

    handleSubmit = (event) => {
        const { onFormSubmit } = this.props;

        onFormSubmit(event.target.value);

        event.preventDefault();
    }

    render() {
        return (
            <Grid elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Grid>
        )
    }
}

export default SearchBar;
