import React from 'react';
import { Link,Outlet } from "react-router-dom";

function Header() {
    return (
        <header class="header">
        <div class="top-bar"></div>
        <div class="wrapper">
          <a href="index.html" class="logo">
            <img src="assets/img/logo.png" alt="VegaITSourcing Timesheet" />
          </a>
          <ul class="user right">
            <li>
              <a href="javascript:;">Sladjana Miljanovic</a>
              <div class="invisible"></div>
              <div class="user-menu">
                <ul>
                  <li>
                    <a href="javascript:;" class="link">Change password</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="link">Settings</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="link">Export all data</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="last">
              <a href="javascript:;">Logout</a>
            </li>
          </ul>
          <nav>
            <ul class="menu">
              <li>
                <Link to="/timesheet" class="btn nav ">TimeSheet</Link>
              </li>
              <li>
                <Link to="/clients"  class="btn nav">Clients</Link>
              </li>
              <li>
                <Link to="/projects" class="btn nav">Projects</Link>
              </li>
              <li>
                <Link to="/categories" class="btn nav">Categories</Link>
              </li>
              <li>
                <Link to="/members" class="btn nav">Team members</Link>
              </li>
              <li class="last">
                <Link to="/reports" class="btn nav">Reports</Link>
              </li>
            </ul>
            <div class="mobile-menu">
              <a href="javascript:;" class="menu-btn">
                <i class="zmdi zmdi-menu"></i>
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
                <li class="last">
                  <a href="javascript:;">Reports</a>
                </li>
              </ul>
            <span class="line"></span>
            </div>
          </nav>
          <Outlet/>
        </div>
      </header>
    );
};

export default Header;