import BarChart from "./Barchart";
import LineChart from "./Linechart";
import  DoughnutChart  from "./Doughnutchart";
import  PieChart  from "./Piechart";
import Polar from "./PolarAreachart";
import RadarChart from "./Radar";

const MyChart = () => {
  return (
    <div className="main-content">
      <div className="charts">
        <div className="chart">
        <h4>Bar Chart</h4>
          <BarChart />
        </div>

        <div className="chart">
        <h4>Line Chart</h4>
          <LineChart />
        </div>

        <div className="chart">
        <h4>Doughnut Chart</h4>
          <DoughnutChart />
        </div>

        <div className="chart">
          <h4>Pie Chart</h4>
          <PieChart />
        </div>

        <div className="chart">
          <h4>Polar Chart</h4>
          <Polar />
        </div>

        <div className="chart">
          <h4>Radar Chart</h4>
          <RadarChart />
        </div>
      </div>



    </div>
  )

}
export default MyChart