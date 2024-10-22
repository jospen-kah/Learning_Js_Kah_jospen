
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 
    datasets: [{
      label: 'My First Data', 
      data: [20, 70, 80, 8, 36, 45, 20], 
      fill: false, 
      borderColor: 'rgb(194, 192, 192)', 
      tension: 0.1 
    },
      {
      label: 'My Second Data', 
      data: [65, 59, 80, 81, 56, 55, 40], 
      fill: false, 
      borderColor: 'rgb(75, 192, 192)', 
      tension: 0.1 
    }]
  };

  const options = {
    responsive: true, 
    plugins: {
      legend: { position: 'top' }, 
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
