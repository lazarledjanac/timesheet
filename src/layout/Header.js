import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="top-bar"></div>
      <div className="wrapper">
        <Link to="/timesheet" className="logo">
          <img src="assets/img/logo.png" alt="VegaITSourcing Timesheet" />
        </Link>
        <ul className="user right">
          <li>
            <a>Лазар Леђанац</a>
            <div className="invisible"></div>
            <div className="user-menu">
              <ul>
                <li>
                  <a className="link">Change password</a>
                </li>
                <li>
                  <a className="link">Settings</a>
                </li>
                <li>
                  <a className="link">Export all data</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="last">
            <a>Logout</a>
          </li>
        </ul>
        <nav>
          <ul className="menu">
            <li>
              <NavLink
                to="/timesheet"
                className="btn nav"
                activeClassName="active"
              >
                TimeSheet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clients"
                className="btn nav"
                activeClassName="active"
              >
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="btn nav"
                activeClassName="active"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members"
                className="btn nav"
                activeClassName="active"
              >
                Team members
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports"
                className="btn nav"
                activeClassName="active"
              >
                Reports
              </NavLink>
            </li>
          </ul>
          <div className="mobile-menu">
            <a className="menu-btn">
              <i className="zmdi zmdi-menu"></i>
            </a>
            <ul>
              <li>
                <a>TimeSheet</a>
              </li>
              <li>
                <a>Clients</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>Team members</a>
              </li>
              <li className="last">
                <a>Reports</a>
              </li>
            </ul>
            <span className="line"></span>
          </div>
        </nav>
        <Outlet />
      </div>
    </header>
  );
}

export default Header;
