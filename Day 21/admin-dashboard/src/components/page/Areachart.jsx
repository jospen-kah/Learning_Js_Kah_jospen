import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const AreaChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales', 
        data: [90, 120, 95, 50, 56, 45],
        fill: true, 
        backgroundColor: 'rgba(67, 131, 222, 0.2)', 
        borderColor: 'rgba(67, 131, 222, 1)', 
        pointRadius: 0, 
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Tooltips appear on hover
      },
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        display: false, // Hide the X-axis labels
        grid: {
          display: false, // Hide the grid lines
        },
      },
      y: {
        display: false, // Hide the Y-axis labels
        grid: {
          display: false, // Hide the grid lines
        },
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default AreaChart;
