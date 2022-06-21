import React, { Component } from "react";

export default class SidebarCompnent extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/index"
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
          <a className="nav-link" href="/index">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <a className="nav-link" href="/order">
            <i className="fas fa-border-all"></i>
            <span>Orders</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-industry"></i>
            <span>Manufactors</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          ></div>
        </li>
      </ul>
    );
  }
}
