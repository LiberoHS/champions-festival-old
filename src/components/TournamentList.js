import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';

const TournamentList = ({ setCurrentTournament, tournamentList }) => {
    const classes = useStyles();
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    const isNotTablet = useMediaQuery({ minWidth: 991 });
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
                            <TableCell align="left" style={headerStyle}>Date</TableCell>
                            <TableCell align="left" style={headerStyle}>Name</TableCell>
                            <TableCell align="left" style={headerStyle}>Region</TableCell>
                            {isNotMobile && <TableCell align="left" style={headerStyle}>Type</TableCell>}
                            {isNotMobile && <TableCell align="left" style={headerStyle}>Cycle</TableCell>}
                            {isNotTablet && <TableCell align="left" style={headerStyle}>Attendance</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tournamentList.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell align="left" style={cellStyle}>{item.date}</TableCell>
                                <TableCell component="th" align="left" style={cellStyle}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentTournament(item)}>{item.name}</Link>
                                </TableCell>
                                <TableCell align="left" style={cellStyle}>{item.region}</TableCell>
                                {isNotMobile && <TableCell align="left" style={cellStyle}>{item.type}</TableCell>}
                                {isNotMobile && <TableCell align="left" style={cellStyle}>{item.cycle}</TableCell>}
                                {isNotTablet && <TableCell align="left" style={cellStyle}>{item.attendance}</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default TournamentList;
