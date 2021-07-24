import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 7, 3, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(185, 158, 137, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(50, 41, 106, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(185, 158, 137, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(50, 41, 106, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <Pie width={350} data={data} />
  </>
);

export default PieChart;