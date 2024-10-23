
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
      },
      title: {
        display: false,
        
      },
    },
    layout: {
      padding: {
        bottom: 20, 
      },
    },
    scales: {
       
      x: {
        grid: {
          display: false, // Remove vertical lines (X gridlines)
        },
      },
      y: {
        beginAtZero: true,
        max: 100, // Sets the maximum Y value
        ticks: {
          stepSize: 25, // Steps of 25, so Y-axis will display 0, 25, 50, 75, 100
        },
        grid: {
          drawBorder: false, // Optionally remove Y-axis border line
          color: function(context) {
            if (context.tick.value !== 0) {
              return 'rgba(0, 0, 0, 0.1)'; // Color of the dashed lines
            }
          },
          borderDash: [20, 20], // Make horizontal lines dashed
        },
      },
    },
  };
  

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: [80, 75, 70, 60, 50, 40, 30, 20, 50, 70, 60, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue bars
      borderRaduis: 10,
      borderSkipped: false,
    },
    {
      label: 'New Users',
      data: [80, 75, 70, 60, 50, 40, 30, 20, 50, 70, 60, 100],
      backgroundColor: 'rgba(201, 203, 207, 0.5)', // Grey bars
      borderRaduis: 5,
      borderSkipped: false,
    },
  ],
};

const BarChart = () => {
  return < Bar options={options} data={data} />;
};

export default BarChart;

