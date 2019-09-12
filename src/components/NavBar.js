import React from 'react';
import { Grid, Link } from '@material-ui/core';

const NavBar = (state) => {
    return(
        <Grid>
            <nav className="navbar navbar-dark bg-dark mb-3">
                <Link onClick={state.homePage}>Home</Link>
                <Link onClick={state.tournamentList}>Tournaments</Link>
                <Link>Coming Soon in v4!</Link>
            </nav>
        </Grid>
    )
}

export default NavBar;
