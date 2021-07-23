import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 11, 7, 9],
      fill: true,
      backgroundColor: 'rgba(50, 41, 106,0.1)',
      borderColor: 'rgba(50, 41, 106,0.5)',
    
    },
    {
      label: '# of No Votes',
      data: [14, 2, 6, 1, 2, 17],
      fill: true,
      backgroundColor: 'rgba(185, 158, 137,0.1)',
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