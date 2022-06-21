import React, { Component } from "react";
import Chart from "./Charts";
import { userData } from "./dummyData";
import WidgetLg from "./WidgetLg";
import WidgetSm from "./WidgetSm";
import "./WidgetLg.css"
import "./home.css"
import axios from "axios";

class Dashboard extends Component {
  // componentDidMount()
  // {
  //   fetch('https://localhost:5001/api/Distributors/DistributorDetail/11')
  //   .then(response => response.json())
  //   .then(data => console.log(data,"distributors"));
  // }
  state = {
    medicines: []
  }
  // state = {
  //   orders: []
  // }

  // componentDidMount() {
  //   axios.get(`https://localhost:5001/api/Orders/OrderDetails/` + 1)
  //     .then(res => {
  //       const medicines = res.data;
  //       console.log(medicines)
  //       this.setState({ medicines });
  //     }).then(
  //       fetch('https://localhost:5001/api/Distributors/DistributorDetail/11')
  //   .then(response => response.json())
  //   .then(data => this.store = data.distributors_id)
  //     )
  // }
  // componentDidMount() {
  //   fetch(`https://localhost:5001/api/Distributors/DistributorDetail/${this.props.location.state.detail.users_id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data) {
  //       axios.get(`https://localhost:5001/api/Orders/OrderDetails/${data.distributors_id}`)
  //     .then(res => {
  //       const medicines = res.data;
  //       console.log(medicines, "medicines")
  //       this.setState({ medicines })
        
  //     })}})
    // .then(
    //   axios.get(`https://localhost:5001/api/Orders/OrderDetails/${this.store}`)
    //   .then(res => {
    //     const medicines = res.data;
    //     console.log(medicines, "medicines")
    //     this.setState({ medicines });
    //   })
    // )
    componentDidMount() {
      fetch(`https://localhost:5001/api/Distributors/DistributorDetail/${this.props.location.state.detail.users_id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          axios.get(`https://localhost:5001/api/Orders/OrderDetails/${data.distributors_id}`)
        .then(res => {
          const medicines = res.data;
          console.log(medicines, "medicines")
          this.setState({ medicines })
          
        })
        //https://localhost:5001/api/Orders/17
      //   .then(
      //     fetch(`https://localhost:5001/api/Orders/${medicines.orders_id}`)
      //     .then(response => response.json())
      //     .then(data => {
      //       if (data) {
      //         console.log(data,"orderssssss")
      //       }
      //     })
      // )
    }})
  }
  // componentDidMount() {
  //   fetch(`https://localhost:5001/api/Distributors/DistributorDetail/${this.props.location.state.detail.users_id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data) {
  //       fetch(`https://localhost:5001/api/Orders/OrderDetails/${data.distributors_id}`)
  //       .then(response => response.json())
  //       .then(medicines => {
  //         if (medicines) {
  //           console.log(medicines, "chal gya")
  //           fetch(`https://localhost:5001/api/Orders/${medicines[0].orders_id}`)
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data) {
  //           console.log(data,"orderssssss")
  //         }
  //       })
  //         }
  //       })
        //https://localhost:5001/api/Orders/OrderDetails/${data.distributors_id}
      
      //https://localhost:5001/api/Orders/17
    //   .then(
    //     fetch(`https://localhost:5001/api/Orders/${medicines.orders_id}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data) {
    //         console.log(data,"orderssssss")
    //       }
    //     })
    // )
//   }})
// }
  render() {
    return (
      <>
      <div className="App">
        <div id="wrapper">
        <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/Dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            MDMS<sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        {/* <li className="nav-item">
          <a className="nav-link" href="/Orders">
            <i className="fas fa-border-all"></i>
            <span>Orders</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/Manufactures"
          >
            <i className="fas fa-industry"></i>
            <span>Manufactures</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          ></div>
        </li>
      </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw"></i>
                      <span className="badge badge-danger badge-counter">
                      {Object.keys(this.state.medicines).length}
                      </span>
                    </a>
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      {
        this.state.medicines
            .map(medicines =>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                           {medicines.medicines_name}
                          </div>
                          <div className="small text-gray-500">
                            {medicines.quantity}
                          </div>
                        </div>
                      </a>
            )}
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        {this.props.location.state.detail.username}
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Welcome to your Dashboard {this.props.location.state.detail.username}</h1>
                  <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                    Generate Report
                  </a>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Earnings (Monthly)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              Pkr 40,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Earnings (Annual)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              Pkr 215,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  50%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Pending Orders
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {Object.keys(this.state.medicines).length}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Chart data={userData} title="User Analytics" grid dataKey="Sale"/>
                <div className="homeWidgets">
                  <WidgetSm/>
                  <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Medicine Name</th>
          <th className="widgetLgTh">Quantity</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Total Price</th>
        </tr>
        {
        this.state.medicines
            .map(medicines =>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.clipartmax.com/png/middle/28-280979_medical-logo-medical-cross-symbol-png.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{medicines.medicines_name}</span>
          </td>
          
          <td className="widgetLgDate">{medicines.quantity}</td>
          <td className="widgetLgAmount">{medicines.medicines_price} Pkr</td>
          <td className="widgetLgStatus">{medicines.quantity*medicines.medicines_price}</td>
        </tr>
         )
        }
      </table>
    </div>
                </div>
                </div>

                  </div>
                  </div>
                  </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
            <div
            className="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a
                    className="btn btn-primary"
                    href="login"
                    onClick={this.logouthandler}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div> 
          </div>
</>

      
    );
  }
}

export default Dashboard;