/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import { useEffect } from "react";
const GrafikValue = ( props ) => {
  const label2 = props.data.label
  const datasets = props.data.data
  const value = props.data.value
  const labels = label2
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Data',
        data: datasets,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132,1)',
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          font:{
            size: 16,
            weight: 'normal',
          },
          text: 'Rata - rata',
        },
        ticks: {
          font: {
            size: 16, 
          },
          precision: 0,
        },
    },
      x: {
        display: true,
        title: {
          display: true,
          font:{
            size: 16,
            weight: 'normal',
            color: 'red'
          },
          text: value === 'Week'
          ? 'Mingguan'
          : value === 'Month'
          ? 'Bulanan'
          : value === 'Year'
          ? 'Tahunan'
          : '',
        },
        ticks: {
          font: {
            size: 18,
          },
        },
},
}
  };

useEffect(() => {
  }, []);
    return (
      <div style={{ width: '100%', height: '100%' }}>
    <Line size={'lg'} options={options} data={data} />
      </div>
    )
  }

export default GrafikValue
  