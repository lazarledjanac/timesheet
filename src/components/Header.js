import React from 'react';

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
                <a href="index.html" class="btn nav active">TimeSheet</a>
              </li>
              <li>
                <a href="clients.html" class="btn nav">Clients</a>
              </li>
              <li>
                <a href="projects.html" class="btn nav">Projects</a>
              </li>
              <li>
                <a href="categories.html" class="btn nav">Categories</a>
              </li>
              <li>
                <a href="team-members.html" class="btn nav">Team members</a>
              </li>
              <li class="last">
                <a href="reports.html" class="btn nav">Reports</a>
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
        
        </div>
      </header>
    );
};

export default Header;