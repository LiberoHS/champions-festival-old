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

import React from 'react';
import {Line} from 'react-chartjs-2';

var MyMethods = require('../data/report.js');
var lastSixWeeks = MyMethods.lastSixWeeks;
var DeckList = MyMethods.DeckList;


const colorPalette = [
    {name: 'red', filled: 'rgba(207,64,64,1)', light: 'rgba(207,64,64,0.4)'},
    {name: 'green', filled: 'rgba(71,204,71,1)', light: 'rgba(71,204,71,0.4)'},
    {name: 'blue', filled: 'rgba(76,116,237,1)', light: 'rgba(76,116,237,0.4)'},
    {name: 'yellow', filled: 'rgba(242,239,73,1)', light: 'rgba(242,239,73,0.4)'},
    {name: 'purple', filled: 'rgba(167,61,224,1)', light: 'rgba(167,61,224,0.4)'},
];

const deck1 = DeckList[4][0].deck;
const deck2 = DeckList[4][1].deck;
const deck3 = DeckList[4][2].deck;
const deck4 = DeckList[4][3].deck;
const deck5 = DeckList[4][4].deck;

const memes = [deck1,deck2,deck3,deck4,deck5];

var data = {
  labels: ['17-18 Aug','24-25 Aug','31 Aug-1 Sep', '7-8 Sep', '14-15 Sep'],
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
            width: 1000,
            height: 1000,
            data: [
                DeckList[0].find(data => data.deck === deck1) ? DeckList[0].find(data => data.deck === deck1).currCP : 0,
                DeckList[1].find(data => data.deck === deck1) ? DeckList[1].find(data => data.deck === deck1).currCP : 0,
                DeckList[2].find(data => data.deck === deck1) ? DeckList[2].find(data => data.deck === deck1).currCP : 0,
                DeckList[3].find(data => data.deck === deck1) ? DeckList[3].find(data => data.deck === deck1).currCP : 0,
                DeckList[4].find(data => data.deck === deck1) ? DeckList[4].find(data => data.deck === deck1).currCP : 0,
            ]},
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
          width: 1000,
          height: 1000,
          data: [
              DeckList[0].find(data => data.deck === deck2) ? DeckList[0].find(data => data.deck === deck2).currCP : 0,
              DeckList[1].find(data => data.deck === deck2) ? DeckList[1].find(data => data.deck === deck2).currCP : 0,
              DeckList[2].find(data => data.deck === deck2) ? DeckList[2].find(data => data.deck === deck2).currCP : 0,
              DeckList[3].find(data => data.deck === deck2) ? DeckList[3].find(data => data.deck === deck2).currCP : 0,
              DeckList[4].find(data => data.deck === deck2) ? DeckList[4].find(data => data.deck === deck2).currCP : 0,
          ]
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
          width: 1000,
          height: 1000,
          data: [
              DeckList[0].find(data => data.deck === deck3) ? DeckList[0].find(data => data.deck === deck3).currCP : 0,
              DeckList[1].find(data => data.deck === deck3) ? DeckList[1].find(data => data.deck === deck3).currCP : 0,
              DeckList[2].find(data => data.deck === deck3) ? DeckList[2].find(data => data.deck === deck3).currCP : 0,
              DeckList[3].find(data => data.deck === deck3) ? DeckList[3].find(data => data.deck === deck3).currCP : 0,
              DeckList[4].find(data => data.deck === deck3) ? DeckList[4].find(data => data.deck === deck3).currCP : 0,
          ]
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
          width: 1000,
          height: 1000,
          data: [
              DeckList[0].find(data => data.deck === deck4) ? DeckList[0].find(data => data.deck === deck4).currCP : 0,
              DeckList[1].find(data => data.deck === deck4) ? DeckList[1].find(data => data.deck === deck4).currCP : 0,
              DeckList[2].find(data => data.deck === deck4) ? DeckList[2].find(data => data.deck === deck4).currCP : 0,
              DeckList[3].find(data => data.deck === deck4) ? DeckList[3].find(data => data.deck === deck4).currCP : 0,
              DeckList[4].find(data => data.deck === deck4) ? DeckList[4].find(data => data.deck === deck4).currCP : 0,
          ]
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
          width: 1000,
          height: 1000,
          data: [
              DeckList[0].find(data => data.deck === deck5) ? DeckList[0].find(data => data.deck === deck5).currCP : 0,
              DeckList[1].find(data => data.deck === deck5) ? DeckList[1].find(data => data.deck === deck5).currCP : 0,
              DeckList[2].find(data => data.deck === deck5) ? DeckList[2].find(data => data.deck === deck5).currCP : 0,
              DeckList[3].find(data => data.deck === deck5) ? DeckList[3].find(data => data.deck === deck5).currCP : 0,
              DeckList[4].find(data => data.deck === deck5) ? DeckList[4].find(data => data.deck === deck5).currCP : 0,
          ]
        },
  ]
};

for (let i = 0; i < 5; i++) {
    data.datasets[i].label = memes[i];
    data.datasets[i].backgroundColor = colorPalette[i].light;
    data.datasets[i].borderColor = colorPalette[i].filled;
    data.datasets[i].pointBorderColor = colorPalette[i].filled;
    data.datasets[i].pointHoverBackgroundColor = colorPalette[i].filled;
    data.datasets[i].pointHoverBorderColor = colorPalette[i].filled;
}

class DataGraph extends React.Component {
  displayName: 'DataGraph';

  render() {
    return (
      <div>
        <h2>Weekly Data</h2>
        <Line data={data} />
      </div>
    );
  }
};

export default DataGraph;
