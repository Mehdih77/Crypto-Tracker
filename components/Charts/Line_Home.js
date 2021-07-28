import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 13, 19, 3, 11, 7, 12, 7],
      fill: true,
      backgroundColor: 'rgba(50, 41, 106,0.3)',
      borderColor: 'rgba(50, 41, 106,0.5)',
    
    },
    {
      label: '# of No Votes',
      data: [14, 2, 6, 1, 2, 17, 5, 13],
      fill: true,
      backgroundColor: 'rgba(185, 158, 137,0.3)',
      borderColor: 'rgba(185, 158, 137,0.5)',

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

const MultiAxisLine = () => (
  <>
    <div>
    <Line data={data} options={options} />
    </div>
  </>
);

export default MultiAxisLine;