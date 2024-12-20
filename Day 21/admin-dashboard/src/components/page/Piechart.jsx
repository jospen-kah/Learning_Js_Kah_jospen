
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  

  const options = {
    responsive: true, 
    plugins: {
      legend: { position: 'top' }, 
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
