import React from 'react';
import Moment from 'react-moment';
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { useStyles } from './useStyles';
import useWindowDimensions from './windowDimensions.js'
import './TableGrid.css'

const TournamentList = ({ setCurrentTournament, tournamentList }) => {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    return (
        <Grid>
            <Grid className="grid-container">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor: '#424242'}}>
                            <TableCell align="left" className="table-header">Date</TableCell>
                            <TableCell align="left" className="table-header">Name</TableCell>
                            <TableCell align="left" className="table-header">Region</TableCell>
                            {width > 768 && <TableCell align="left" className="table-header">Type</TableCell>}
                            {width > 768 && <TableCell align="left" className="table-header">Cycle</TableCell>}
                            {width > 961 && <TableCell align="left" className="table-header">Attendance</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tournamentList.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}><Moment format="DD/MM/YY">{item.date}</Moment></TableCell>
                                <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                    <Link style={{cursor: 'pointer'}} onClick={() => setCurrentTournament(item)}>{item.name}</Link>
                                </TableCell>
                                <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.region}</TableCell>
                                {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.type}</TableCell>}
                                {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.cycle}</TableCell>}
                                {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.attendance}</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default TournamentList;
