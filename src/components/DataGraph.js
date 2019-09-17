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

const colorPalette = [
    {name: 'red', filled: 'rgba(207,64,64,1)', light: 'rgba(207,64,64,0.4)'},
    {name: 'green', filled: 'rgba(71,204,71,1)', light: 'rgba(71,204,71,0.4)'},
    {name: 'blue', filled: 'rgba(76,116,237,1)', light: 'rgba(76,116,237,0.4)'},
    {name: 'yellow', filled: 'rgba(242,239,73,1)', light: 'rgba(242,239,73,0.4)'},
    {name: 'purple', filled: 'rgba(167,61,224,1)', light: 'rgba(167,61,224,0.4)'},
];

const memes = ['Me','Mem','Meme','Memes','Wow'];

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
            data: [100,200,300,400,500]
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
          data: [150,250,180,200,222]
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
          data: [123,145,167,201,234]
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
          data: [90,124,144,165,321]
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
          data: [240,214,198,176,138]
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
