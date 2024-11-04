import AreaChart from "./page/Areachart";
import TrafficChart from "./page/traffic-chart";
import { UsersRound, MoveDown, MoveUp } from "lucide-react";
import Flag from 'react-world-flags';

// import React from "react";
const Content = () => {
  return (
    <div className="main-content">

      <div className="content">
        <h1> Dashboard </h1>
        <a href="https://coreui.io/"> Home</a>


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
                  <UsersRound size={25} className="users" />
                </div>
                <h4>44.725</h4>
                <p className="down">(-12.4%<MoveDown />)</p>
              </div>
              <div className="customer" >
                <div className="customs">
                  <p className="custom">Custom...</p>
                  <UsersRound size={25} className="users" />
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
          < div className="users">
            <div className="user">
              <div className="reg-user">
                <h5>User</h5>
                <h6>1.232.150 register users</h6>
              </div>
              <div className="adduser">
                Add User
              </div>
            </div>
            <div className="tables">
              <table>
                <thead>
                  <tr>
                    <th><UsersRound /></th>
                    <th className="users-1">Users</th>
                    <th>Country</th>
                    <th className="usage">Usage</th>
                    <th className="activity">Activity</th>
                  </tr>
                </thead>

                <tbody>

                  {/* first user */}
                  <tr>
                    <td>
                      <div className="online"></div>
                      <div className="profile-picture" >
                        <img src='./user.jpeg' />

                      </div>
                    </td>
                    <td>
                      <div className="names">Yiorgos Avraamu</div>
                      <div className="register">New | Registered: jan 1, 2023</div>
                    </td>
                    <td>
                      <Flag code="US" style={{ width: 25, height: 20 }} />
                    </td>
                    <td>
                      <div className="progress">
                        <h4>50%</h4>
                        <p>Jun 11, 2023 - Jul 10, 2023</p>
                      </div>
                      <div className="bar">
                        <div className="bar-progress"></div>
                      </div>
                    </td>
                    <td>
                      <div>Last Login</div>
                      <div className="time">10 sec ago</div>
                    </td>
                  </tr>

                  {/* second user */}
                  <tr>
                    <td>
                      <div className="online"></div>
                      <div className="profile-picture" >
                        <img src='./user.jpeg' />
                      </div>
                    </td>
                    <td>
                      <div className="names">Yiorgos Avraamu</div>
                      <div className="register">New | Registered: jan 1, 2023</div>
                    </td>
                    <td>
                      <Flag code="BR" style={{ width: 25, height: 20 }} />
                    </td>
                    <td>
                      <div className="progress">
                        <h4>22%</h4>
                        <p>Jun 11, 2023 - Jul 10, 2023</p>
                      </div>
                      <div className="bar">
                        <div className="bar-progress-2"></div>
                      </div>
                    </td>
                    <td>
                      <div className="login">Last Login</div>
                      <div className="time">5 minutes ago</div>
                    </td>
                  </tr>

                  {/* third user */}
                  <tr>
                    <td>
                      <div className="online"></div>
                      <div className="profile-picture" >
                        <img src='./user.jpeg' />
                      </div>
                    </td>
                    <td>
                      <div className="names">Yiorgos Avraamu</div>
                      <div className="register">New | Registered: jan 1, 2023</div>
                    </td>
                    <td>
                      <Flag code="IND" style={{ width: 25, height: 20 }} />
                    </td>
                    <td>
                      <div className="progress">
                        <h4>74%</h4>
                        <p>Jun 11, 2023 - Jul 10, 2023</p>
                      </div>
                      <div className="bar">
                        <div className="bar-progress-3"></div>
                      </div>
                    </td>
                    <td>
                      <div className="login">Last Login</div>
                      <div className="time">1 hour ago</div>
                    </td>
                  </tr>

                  {/* fourth User */}
                  <tr>
                    <td>
                      <div className="online 4"></div>
                      <div className="profile-picture" >
                        <img src='./user.jpeg' />
                      </div>
                    </td>
                    <td>
                      <div className="names">Yiorgos Avraamu</div>
                      <div className="register">New | Registered: jan 1, 2023</div>
                    </td>
                    <td>
                      <Flag code="POL" style={{ width: 25, height: 20 }} />
                    </td>
                    <td>
                      <div className="progress">
                        <h4>98%</h4>
                        <p>Jun 11, 2023 - Jul 10, 2023</p>
                      </div>
                      <div className="bar">
                        <div className="bar-progress-4"></div>
                      </div>
                    </td>
                    <td>
                      <div className="login">Last Login</div>
                      <div className="time">Last Month</div>
                    </td>
                  </tr>

                {/* fifth User */}
                <tr>
                    <td>
                      <div className="online 4"></div>
                      <div className="profile-picture" >
                        <img src='./user.jpeg' />
                      </div>
                    </td>
                    <td>
                      <div className="names">Yiorgos Avraamu</div>
                      <div className="register">New | Registered: jan 1, 2023</div>
                    </td>
                    <td>
                      <Flag code="ENG" style={{ width: 25, height: 20 }} />
                    </td>
                    <td>
                      <div className="progress">
                        <h4>23%</h4>
                        <p>Jun 11, 2023 - Jul 10, 2023</p>
                      </div>
                      <div className="bar">
                        <div className="bar-progress-5"></div>
                      </div>
                    </td>
                    <td>
                      <div className="login">Last Login</div>
                      <div className="time">Last Week</div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
          <div className="rate">
            <div className="user-rate">user-rate</div>
            <div className="conversion">convrsion</div>
            <div className="session">session</div>
          </div>
        </div>


        <div className="content-3"></div>

      </div>

    </div>
  );
};

export default Content;
