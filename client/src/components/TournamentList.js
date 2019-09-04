import React from 'react';
import { Grid, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';

const TournamentList = ({ setCurrentTournament, tournamentList }) => {
    return (
        <Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Attendance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tournamentList.map((item, key) => (
                        <TableRow key={key}>
                            <TableCell align="center">{item.date}</TableCell>
                            <TableCell component="th" align="center">
                                <button onClick={() => setCurrentTournament(item)}> {item.name}</button>
                            </TableCell>
                            <TableCell align="center">{item.type}</TableCell>
                            <TableCell align="center">{item.attendance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    )
}

export default TournamentList;
