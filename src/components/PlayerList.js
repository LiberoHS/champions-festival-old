import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';

const PlayerList = ({ setCurrentPlayer, playerList }) => {
    const classes = useStyles();
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    const headerStyle = {
        color: 'white',
        fontFamily: 'Muli',
        fontSize: '16px'
    };

    let cellStyle = {};

    if (isNotMobile) {
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '20px'
        };
    } else {
        cellStyle = {
            fontFamily: 'Muli',
            fontSize: '16px'
        };
    }

    return (
        <Grid>
            <Grid className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="center" style={headerStyle}>Name</TableCell>
                            <TableCell align="left" style={headerStyle}>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerList.map((player, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" align="center" style={cellStyle}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentPlayer(player)}>{player.name}</Link>
                                </TableCell>
                                <TableCell align="left" style={cellStyle}>{player.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default PlayerList;
