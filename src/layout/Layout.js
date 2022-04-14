import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <section className="content">{children}</section>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
