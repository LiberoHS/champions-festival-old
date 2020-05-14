import React, { useState } from 'react';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { SearchBar } from '../components';
import { useStyles } from './useStyles';
import useWindowDimensions from './windowDimensions.js'
import players from '../data/players.js';
import './TableGrid.css'

export default function PlayerList(props) {
    const classes = useStyles();
    const { width } = useWindowDimensions();
    // const [player, setPlayer] = useState(null);
    const [playerList, setList] = useState(players);
    async function handleChange(searchTerm) {
        setList(players.filter((player, key) => {
            if (player.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0) {
                return player;
            }

            return 0;
        }));
    };

    return (
        <Grid>
            <SearchBar onChange={handleChange} />
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
                                    <Link style={{cursor: 'pointer'}} onClick={() => props.setCurrentPlayer(player) }>{player.name}</Link>
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