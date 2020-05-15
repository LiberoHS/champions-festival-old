import React, { useState, useCallback} from 'react';
import Moment from 'react-moment';
import { Grid, Link, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup,  Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { SearchBar } from '../components';
import { useStyles } from './useStyles';
import useWindowDimensions from './windowDimensions.js'
import tournaments from '../data/tournaments.js';
import './TableGrid.css'

export default function TournamentList(props) {
    const classes = useStyles();
    const { width } = useWindowDimensions();
    const [tournamentList, setList] = useState(tournaments);
    const [filteredList, setFilteredList] = useState(tournaments);
    // filter states
    const [challengeSwitch, setChallenges] = useState(false);
    const [majorSwitch, setMajors] = useState(false);
    const [filter, setFilter] = useState(false);
    const [region, setRegion] = React.useState('all');

    // search bar
    async function handleChange(searchTerm) {
        setList(filteredList.filter((tournament, key) => {
            if (tournament.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0) {
                return tournament;
            }

            return 0;
        }));
    };

    // toggle filter checkboxes
    const toggleFilter = useCallback(() => {
        setFilter(!filter);
    });

    const toggleChallenges = useCallback(() => {
        setChallenges(!challengeSwitch);
    });
    
    const toggleMajors = useCallback(() => {
        setMajors(!majorSwitch);
    });

    const toggleRegions = (event) => {
        setRegion(event.target.value);
    };

    // set filters based on checkboxes
    function setFilters() {
        var filteredTournaments = tournaments;
        if (challengeSwitch) {
            filteredTournaments = filteredTournaments.filter((tournament, key) => {
                if (tournament.type !== 'League Challenge') {
                    return tournament;
                }

                return 0;
            });
        }

        if (majorSwitch) {
            filteredTournaments = filteredTournaments.filter((tournament, key) => {
                if (tournament.type === 'Regionals' || tournament.type === 'Special Event' || tournament.type === 'Internationals') {
                    return tournament;
                }

                return 0;
            });
        }

        if (region !== 'all' && region !== 'other') {
            filteredTournaments = filteredTournaments.filter((tournament, key) => {
                if (tournament.region === region) {
                    return tournament;
                }

                return 0;
            });
        } else if (region === 'other') {
            filteredTournaments = filteredTournaments.filter((tournament, key) => {
                if (tournament.region !== 'NSW' && tournament.region !== 'VIC' && tournament.region !== 'QLD' &&
                    tournament.region !== 'SA' && tournament.region !== 'WA' && tournament.region !== 'TAS' &&
                    tournament.region !== 'NZ') {
                    return tournament;
                }

                return 0;
            });
        }

        setFilteredList(filteredTournaments);
        setList(filteredTournaments);
    }

    // reset all filters to false
    function revertFilters() {
        setChallenges(false);
        setMajors(false);
        setList(tournaments);
        setFilteredList(tournaments);
        setRegion('all');
    }
    
    return (
        <Grid>
            <SearchBar onChange={handleChange} />
            <Grid className="button-container">
                {!filter && <Button variant="outlined" className="button" color="primary" size="small" onClick={toggleFilter}>Show Filters</Button>}
                {filter && <Button variant="outlined" className="button" color="primary" size="small" onClick={toggleFilter}>Hide Filters</Button>}
            </Grid>
            {filter && <Grid className="filter-container">
                <FormControl component="fieldset" className="form-container">
                    <FormLabel component="legend">Tournament Filters</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={
                            <Checkbox checked={challengeSwitch} onChange={toggleChallenges} value="checked" />
                        } label='No Challenges' />
                        <FormControlLabel control={
                            <Checkbox checked={majorSwitch} onChange={toggleMajors} value="checked" />
                        } label='Majors' />
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className="form-container">
                    <FormLabel component="legend">Region Filters</FormLabel>
                    <RadioGroup value={region} onChange={toggleRegions}>
                        <FormControlLabel value="all" control={<Radio />} label="All" />
                        <FormControlLabel value="NSW" control={<Radio />} label="NSW" />
                        <FormControlLabel value="VIC" control={<Radio />} label="VIC" />
                        <FormControlLabel value="QLD" control={<Radio />} label="QLD" />
                        <FormControlLabel value="SA" control={<Radio />} label="SA" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" className="form-container">
                    <FormLabel component="legend">Region Filters</FormLabel>
                    <RadioGroup value={region} onChange={toggleRegions}>
                        <FormControlLabel value="WA" control={<Radio />} label="WA" />
                        <FormControlLabel value="TAS" control={<Radio />} label="TAS" />
                        <FormControlLabel value="NZ" control={<Radio />} label="NZ" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Grid className="button-container">
                    <Button variant="outlined" className="button" color="secondary" size="small" onClick={setFilters}>Apply Filters</Button>
                    <Button variant="outlined" className="button" color="secondary" size="small" onClick={revertFilters}>Reset Filters</Button>
                </Grid>
            </Grid> }
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
                                    <Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTournament(item) }>{item.name}</Link>
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
