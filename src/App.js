// Started by Jeremy Lim on 03/09/2019
// Currently on v4.1 deployed, v4.1 local, released

import React from 'react';
import { Content } from './components';

// TO-DO LIST
// IMPORTANT - Fix margin styling for responsiveness
// Table paginations
// Sorting tournaments
// Need to refactor Challenges filter (done)
// Need to refactor styling (done)
// Filter functionality -> filter by region and format <-- nah (done)
// Decklist integration (v5)
// BUG: (data-report.js) changing indexEnd of i+1 to i creates an error
// BUG: Search bar cannot handle empty inputs (done)

function App() {
    // EXPRESS BACKEND
    /* componentDidMount() {
        topDecks.sort(function (a, b) {
            return b.currCP - a.currCP;
        });

        this.setState({ playerList: playerList, topDecks: topDecks });

        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }; */

    /*
    sortPoint = () => {
        if (this.state.checkedPoints === true) {
            playerList.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

            this.setState({ playerList: playerList, checkedPoints: false });
        } else if (this.state.checkedPoints === false) {
            playerList.sort(function (a, b) {
                return b.points - a.points;
            });

            this.setState({ playerList: playerList, checkedPoints: true });
        }
    }
    */

    return(
        <Content></Content>
    )
}

export default App;
