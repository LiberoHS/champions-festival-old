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

const TournamentList = ({ setCurrentTournament, tournamentList }) => {
    return (
        <Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={headerStyle}>Date</TableCell>
                        <TableCell align="center" style={headerStyle}>Name</TableCell>
                        <TableCell align="center" style={headerStyle}>Region</TableCell>
                        <TableCell align="center" style={headerStyle}>Type</TableCell>
                        <TableCell align="center" style={headerStyle}>Cycle</TableCell>
                        <TableCell align="center" style={headerStyle}>Attendance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tournamentList.map((item, key) => (
                        <TableRow key={key}>
                            <TableCell align="center" style={cellStyle}>{item.date}</TableCell>
                            <TableCell component="th" align="center">
                                <button onClick={() => setCurrentTournament(item)}> {item.name}</button>
                            </TableCell>
                            <TableCell align="center" style={cellStyle}>{item.region}</TableCell>
                            <TableCell align="center" style={cellStyle}>{item.type}</TableCell>
                            <TableCell align="center" style={cellStyle}>{item.cycle}</TableCell>
                            <TableCell align="center" style={cellStyle}>{item.attendance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    )
}

export default TournamentList;
