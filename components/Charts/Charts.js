import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 20, 3],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 0.4)',
    },
    {
        label: '1 of Votes',
        data: [10, 1, 6, 2, 14, 6],
        fill: false,
        borderColor: 'rgba(3,249,255, 0.4)',
      },
    {
        label: '2 of Votes',
        data: [5, 3, 1, 12, 14, 16],
        fill: false,
        borderColor: 'rgba(255,195,11, 0.4)',
      },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div>
      <h1 className=''>Line Chart</h1>
      <Line data={data} options={options} />
    </div>
  </>
);

export default LineChart;