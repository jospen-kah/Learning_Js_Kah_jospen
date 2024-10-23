import AreaChart from "./page/Areachart";
import TrafficChart from "./page/traffic-chart";
import { UsersRound, MoveDown, MoveUp } from "lucide-react";

// import React from "react";
const Content = () => {
  return (
    <div className="main-content">

      <div className="content">
        <h1> Dashboard </h1>
        <a href="https://coreui.io/"> Home</a>

        <div className="dashboard-content">
          <div className="content-1">
            <div className="sales-container">
              <div className="sales">
                <div className="sales-1">
                  <div className="sale-month">
                    <h4>Sale</h4>
                    <p className="month">January - July 2024</p>
                  </div>
                  <h4 className="price">$613.200</h4>
                </div>
                <div className="graphs"><AreaChart /></div>
              </div>
              <div className="cust-order">
                <div className="customer">
                  <div className="customs">
                    <p className="custom">Custom...</p>
                    <UsersRound  size= {25} className="users" />
                  </div>
                  <h4>44.725</h4>
                  <p className="down">(-12.4%<MoveDown />)</p>
                </div>
                <div className="customer" >
                <div className="customs">
                    <p className="custom">Custom...</p>
                    <UsersRound  size= {25} className="users" />
                  </div>
                  <h4>385</h4>
                  <p className="up">(-12.4%<MoveUp />)</p>
                </div>
              </div>
            </div>
            <div className="traffic">
              <div className="traffic-date">

                <h4>Traffic</h4>
                <p className="month">January 01, 2024 - December 31, 2024</p>
              </div>


              <div className="traffic-chart">
                < TrafficChart />
              </div>
            </div>
          </div>


          <div className="content-2">
            <div className="user">user</div>
            <div className="rate">
              <div className="user-rate">user-rate</div>
              <div className="conversion">convrsion</div>
              <div className="session">session</div>
            </div>
          </div>


          <div className="content-3"></div>
        </div>
      </div>

    </div>
  );
};

export default Content;
