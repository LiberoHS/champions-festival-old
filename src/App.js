import React from 'react';
import { Grid } from '@material-ui/core';
import { Tournament } from './components';

// HOME PAGE

// FOR TOURNAMENT LIST
// Tournament Name (Include Quarters)
// Number of Players
// Date of Tournament

// FOR TOURNAMENT DATA
// Tournament Name (Include Quarters)
// Number of Players
// Date of Tournament
// Top 4/8 Players+Decks

class App extends React.Component {
    state = {
        data: [
            { player: 'Bob', deck: 'MewMew' }, { player: 'Bob1', deck: 'MewMew1' }, { player: 'Bob2', deck: 'MewMew2' }
        ]
    }
    render () {
        return (
            <Grid>
                <Grid>
                    {/* HOME PAGE */}
                </Grid>
                <Grid>
                    <Tournament playerData={this.state.data} />
                </Grid>
            </Grid>
        )
    }
}

export default App;
