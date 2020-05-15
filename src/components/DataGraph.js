// calculates topDecks currCP with each week
// shows last 5 weeks
// uses slice to get the tournament range
// calculates topDecks currCP with specified range
// inputs onto table

// Colour formatting
// red: rgba(207,64,64,1)
// green: rgba(71,204,71,1)
// blue: rgba(76,116,237,1)
// yellow: rgba(242,239,73,1)
// pink: rgba(232,67,216,1)
// purple: rgba(167,61,224,1)

import React, { useState } from 'react';
import useWindowDimensions from './windowDimensions.js'
import { Line } from 'react-chartjs-2';
import { Button, Grid, Paper } from '@material-ui/core';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import decks from '../data/decks.js';
import './TableGrid.css'

var MyMethods = require('../data/report.js');
var lastSixWeeks = MyMethods.lastSixWeeks;
var DeckList = MyMethods.DeckList;

// defaults.global.maintainAspectRatio = false

const colorPalette = [
    {name: 'red', filled: 'rgba(207,64,64,1)', light: 'rgba(207,64,64,0.4)'},
    {name: 'green', filled: 'rgba(71,204,71,1)', light: 'rgba(71,204,71,0.4)'},
    {name: 'blue', filled: 'rgba(76,116,237,1)', light: 'rgba(76,116,237,0.4)'},
    {name: 'yellow', filled: 'rgba(242,239,73,1)', light: 'rgba(242,239,73,0.4)'},
    {name: 'purple', filled: 'rgba(167,61,224,1)', light: 'rgba(167,61,224,0.4)'},
    {name: 'pink', filled: 'rgba(232,67,216,1)', light: 'rgba(232,67,216,0.4)'}
];

const deck1 = DeckList[4][0].deck;
const deck2 = DeckList[4][1].deck;
const deck3 = DeckList[4][2].deck;
const deck4 = DeckList[4][3].deck;
const deck5 = DeckList[4][4].deck;
const deck6 = DeckList[4][5].deck;

const memes = DeckList[4].map((item) => { return item.deck });

var data = {
    labels: [0, 1, 2, 3, 4].map((i) => {
        return (lastSixWeeks[5 - i].dayEnd + ' - ' + lastSixWeeks[4 - i].dayStart)
    }),
    datasets: [
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) =>
        { return DeckList[i].find(data => data.deck === deck1) ? DeckList[i].findIndex(data => data.deck === deck1) + 1 : null})
    },
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) => 
        { return DeckList[i].find(data => data.deck === deck2) ? DeckList[i].findIndex(data => data.deck === deck2) + 1 : null })
    },
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) =>
        { return DeckList[i].find(data => data.deck === deck3) ? DeckList[i].findIndex(data => data.deck === deck3) + 1 : null })
    },
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) =>
        { return DeckList[i].find(data => data.deck === deck4) ? DeckList[i].findIndex(data => data.deck === deck4) + 1 : null })
    },
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) =>
        { return DeckList[i].find(data => data.deck === deck5) ? DeckList[i].findIndex(data => data.deck === deck5) + 1 : null })
    },
    {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1, 2, 3, 4].map((i) =>
        { return DeckList[i].find(data => data.deck === deck6) ? DeckList[i].findIndex(data => data.deck === deck6) + 1 : null })
    },
    ]
};

var options = {
    // maintainAspectRatio: false,
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Weeks',
            },
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Rank',
                // fontSize: '20',
            },
            ticks: {
                reverse: true,
                tickInterval: 1,
                beginAtZero: true,
                precision: 0,
                // fontSize: '16'
            }
        }],
        /* xAxes: [{
            ticks: {
                reverse: true,
                beginAtZero: true
            }
        }] */
    }
}


for (let i = 0; i < 6; i++) {
    data.datasets[i].label = memes[i];
    data.datasets[i].backgroundColor = colorPalette[i].light;
    data.datasets[i].borderColor = colorPalette[i].filled;
    data.datasets[i].pointBorderColor = colorPalette[i].filled;
    data.datasets[i].pointHoverBackgroundColor = colorPalette[i].filled;
    data.datasets[i].pointHoverBorderColor = colorPalette[i].filled;
}

export default function DataGraph() {
    const [weekData, setWeekData] = useState(4);
    const { width } = useWindowDimensions();

    function setData(value) {
        setWeekData(value);
    }

    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target;
    }

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
        },
        tableWrapper: {
            maxHeight: 800,
            minWidth: 100,
            overflow: 'auto',
        },
        button: {
            margin: theme.spacing(1),
            fontSize: '14px',
        },
    }));

    const classes = useStyles();

  return (
        <div>
          <div>
            <h3>Weekly Data</h3>
            <Line data={data} height={width > 992 ? '100%' : '500px' } options={options}/>
          </div>
          <div>
              <Grid className="button-container">
              {[0,1,2,3,4].map((i) => {
                  return(
                      <Button variant="outlined" className="button" value={i} color={weekData === i ? "secondary" : "primary"} onClick={() => setData(i)}>
                          {lastSixWeeks[5-i].dayEnd + ' - ' + lastSixWeeks[4-i].dayStart}</Button>
              )})}
          </Grid>
            <Grid className="grid-container">
                  <Grid item xs={11} className={width > 992 ? "desktop-table" : "mobile-table"}>
                    <h3>Weekly CP Decks</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" className="table-header">Deck</TableCell>
                                        <TableCell align="left" className="table-header"></TableCell>
                                        <TableCell align="left" className="table-header">Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {DeckList[weekData].map((deck, key) => {
                                    var search = compareDecks(deck);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                            return <img key={key} src={img} className={width > 961 ? "desktop-icon" : "mobile-icon"} alt="rekt" />
                                    })};
                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{deck.deck}</TableCell>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{sprites}</TableCell>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{deck.currCP}</TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        </div>
    );
};
