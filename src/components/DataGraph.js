// calculates topDecks currCP with each week
// shows last 5 weeks
// uses slice to get the tournament range
// calculates topDecks currCP with specified range
// inputs onto table

// red: rgba(207,64,64,1)
// green: rgba(71,204,71,1)
import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['24-25 Aug','31 Aug-1 Sep', '7-8 Sep', '14-15 Sep'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      width: 1000,
      height: 1000,
      data: [300,284,200,165]
    },
    {
      label: 'My Second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(71,204,71,0.4)',
      borderColor: 'rgba(71,204,71,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(71, 204, 71, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(71,204,71,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      width: 1000,
      height: 1000,
      data: [100,154,180,205]
    },
    {
      label: 'My Third dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(207,64,64,0.4)',
      borderColor: 'rgba(207,64,64,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(207,64,64,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(207,64,64,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      width: 1000,
      height: 1000,
      data: [120,184,200,111]
    },
  ]
};

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
