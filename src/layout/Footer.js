import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <ul>
          <li>
            <span>Copyright. VegaITSourcing All rights reserved</span>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="https://policies.google.com/terms?hl=en-US">
              Terms of service
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy?hl=en-US"
              className="last"
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
