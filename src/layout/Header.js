import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="top-bar"></div>
      <div className="wrapper">
        <a href="index.html" className="logo">
          <img src="assets/img/logo.png" alt="VegaITSourcing Timesheet" />
        </a>
        <ul className="user right">
          <li>
            <a href="javascript:;">Sladjana Miljanovic</a>
            <div className="invisible"></div>
            <div className="user-menu">
              <ul>
                <li>
                  <a href="javascript:;" className="link">
                    Change password
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="link">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="link">
                    Export all data
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="last">
            <a href="javascript:;">Logout</a>
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
                to="/categories"
                className="btn nav"
                activeClassName="active"
              >
                Categories
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
            <a href="javascript:;" className="menu-btn">
              <i className="zmdi zmdi-menu"></i>
            </a>
            <ul>
              <li>
                <a href="javascript:;">TimeSheet</a>
              </li>
              <li>
                <a href="javascript:;">Clients</a>
              </li>
              <li>
                <a href="javascript:;">Projects</a>
              </li>
              <li>
                <a href="javascript:;">Categories</a>
              </li>
              <li>
                <a href="javascript:;">Team members</a>
              </li>
              <li className="last">
                <a href="javascript:;">Reports</a>
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
