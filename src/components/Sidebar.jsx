import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav" id="sidabar-custom">
            <ul>
              <li className="sidebar-item">
                <NavLink
                className="sidebar-link waves-effect waves-dark"
                  to={"/"}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-home" />
                  <span className="hide-menu">Home</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                className="sidebar-link waves-effect waves-dark"
                  to={"/about"}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account" />
                  <span className="hide-menu">About</span>
                </NavLink>
              </li>
              <div className="devider" />
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
