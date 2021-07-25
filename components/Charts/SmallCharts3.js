import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      data: [6, 13, 3, 5, 7, 3],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
  ],
};

const options = {
  scales: {
    
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;