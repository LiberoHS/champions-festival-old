import React from 'react';
import useWindowDimensions from './windowDimensions.js'
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';
import './TableGrid.css'

const PlayerList = ({ setCurrentPlayer, playerList }) => {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    return (
        <Grid>
            <Grid className="grid-container">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="center" className="table-header">Name</TableCell>
                            <TableCell align="left" className="table-header">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerList.map((player, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" align="center" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentPlayer(player)}>{player.name}</Link>
                                </TableCell>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{player.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default PlayerList;
