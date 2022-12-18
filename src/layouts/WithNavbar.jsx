import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function WithNavbar() {
  return (
    <div id="main-wrapper">
      <Navbar />
      <Sidebar />
      <div className="page-wrapper">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default WithNavbar;
