import  AreaChart  from "./page/Areachart";

// import React from "react";
const Content = () => {
  return (
    <div className="main-content">
    
    <div className= "content">
        <h1> Dashboard </h1>
      <a href="https://coreui.io/"> Home</a>
    
      <div className="dashboard-content">
        <div className="content-1">
          <div className="sales-container">
            <div className="sales">
              <div className="sales-1">
                <div className="sale-month">
                  <h4>Sale</h4>
                  <p className= "month">January - July 2024</p>
                </div>
                <h4 className="price">$613.200</h4>
              </div>
              <div className="graph"><AreaChart /></div>
            </div>
            <div className="cust-order">
              <div className="customer">customer</div>
              <div className="customer">order</div>
            </div>
          </div>
          <div className="traffic">hey traffic</div>
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
