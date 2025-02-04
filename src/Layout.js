import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{justifyContent: "center"}}>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於這個網站</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;