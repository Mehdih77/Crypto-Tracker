import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      data: [2, 19, 13, 10, 6, 14],
      fill: true,
      backgroundColor: 'rgba(50, 41, 106, 0.4)',
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