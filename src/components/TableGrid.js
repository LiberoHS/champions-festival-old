import React from 'react';
import Moment from 'react-moment';
import useWindowDimensions from './windowDimensions.js'
import { Grid, Link, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
// import { useStyles } from './useStyles';
import './TableGrid.css'

export default function TableGrid(props) {
    // const classes = useStyles();
    const { width } = useWindowDimensions();
    
    return (
        <Grid className="grid-container">
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#424242' }}>
                        <TableCell align="left" className="table-header">Date</TableCell>
                        <TableCell align="left" className="table-header">Name</TableCell>
                        <TableCell align="left" className="table-header">Region</TableCell>
                        {width > 768 && <TableCell align="left" className="table-header">Type</TableCell>}
                        {width > 768 && <TableCell align="left" className="table-header">Cycle</TableCell>}
                        {width > 961 && <TableCell align="left" className="table-header">Attendance</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tournamentList.map((item, key) => (
                        <TableRow key={key}>
                            <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}><Moment format="DD/MM/YY">{item.date}</Moment></TableCell>
                            <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                <Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTournament(item)}>{item.name}</Link>
                            </TableCell>
                            <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.region}</TableCell>
                            {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.type}</TableCell>}
                            {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.cycle}</TableCell>}
                            {width > 961 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{item.attendance}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    )
}

// export default function TableGrid(props) {
//     const rows = props.rows;
//     const columns = props.columns;

//     return(
//     <Paper>
//         <Grid
//             rows={rows}
//             columns={columns}
//         >
//             <Table />
//             <TableHeaderRow />
//         </Grid>
//     </Paper>
//     )
// }