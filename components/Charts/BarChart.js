import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from '../../styles/Charts.module.css'

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()},0.4)`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()},0.3)`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()},0.3)`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

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

const data = genData();

const ClickEvents = () => {
  const [clickedDataset, setClickedDataset] = useState('');
  const [clickedElement, setClickedElement] = useState('');
  const [clickedElements, setClickedElements] = useState('');

  const getDatasetAtEvent = dataset => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;
    setClickedDataset(data.datasets[datasetIndex].label);
  };

  const getElementAtEvent = element => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    setClickedElement(
      `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    );
  };

  const getElementsAtEvent = elements => {
    if (!elements.length) return;

    setClickedElements(elements.length);
  };

  return (
    <>
      <Bar
        data={data}
        options={options}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <div className={clickedElement && styles.bar_text}>
        <p>{clickedElement}</p>
        <p>{clickedDataset}</p>
        <p>{clickedElements}</p>
      </div>
    </>
  );
};

export default ClickEvents;