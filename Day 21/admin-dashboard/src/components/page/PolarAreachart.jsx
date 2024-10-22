
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS,RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
// Register required Chart.js components
ChartJS.register(ArcElement,RadialLinearScale, Tooltip, Legend);
const PolarChart = () => {
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  

  const options = {
    responsive: true, 
    plugins: {
      legend: { position: 'top' }, 
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarChart;
