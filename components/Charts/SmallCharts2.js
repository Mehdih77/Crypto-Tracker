import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      data: [12, 6, 3, 10, 5, 15],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
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