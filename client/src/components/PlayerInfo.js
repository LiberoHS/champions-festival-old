import React from 'react';
import { Grid, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

const headerStyle = {
    fontFamily: 'Muli',
    fontSize: '16px'
};

const cellStyle = {
    fontFamily: 'Muli',
    fontSize: '20px'
};

// Player templating

const PlayerInfo = ({ currentPlayer, decks }) => {
    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target
    }
    return(
        <Grid item xs={12}>
            <Grid>
                <h2> {currentPlayer.name} </h2>
            </Grid>
            <Grid>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={headerStyle}>Date</TableCell>
                            <TableCell align="center" style={headerStyle}>Tournament</TableCell>
                            <TableCell align="center" style={headerStyle}>Cycle</TableCell>
                            <TableCell align="center" style={headerStyle}>Placing</TableCell>
                            <TableCell align="center" style={headerStyle}>Deck</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlayer.achievements.map((player, key) => {
                            var search = compareDecks(player);
                            if (search.hasOwnProperty('thumbnails')) {
                                var sprites = search.thumbnails.map((img, key) => {
                                return <img key={key} src={img} style={{height: '70px', width: '70px'}}  alt="rekt" />
                            })};

                            return(
                            <TableRow key={key}>
                                <TableCell align="center" style={cellStyle}>{player.date}</TableCell>
                                <TableCell align="center" style={cellStyle}>{player.tournament}</TableCell>
                                <TableCell align="center" style={cellStyle}>{player.cycle}</TableCell>
                                <TableCell component="th" align="center" style={cellStyle}>
                                    {player.placing}
                                </TableCell>
                                <TableCell align="center" style={cellStyle}>{player.deck}</TableCell>
                                <TableCell align="center">
                                <p>{sprites}</p>
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default PlayerInfo;
