import React from "react";
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <aside className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item">
              <a
                  className="sidebar-link"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="src/assets/ample/src/assets/images/users/1.jpg"
                    className="rounded-circle ms-2"
                    width={30}
                  />
                  <span className="hide-menu"> Krishanathep J.</span>
                </a>
              </li>
              <div className="devider" />
              <li className="sidebar-item">
                <NavLink
                  className="sidebar-link"
                  to={'/'}
                  aria-expanded="false"
                >
                  <i className="mdi mdi-home" />
                  <span className="hide-menu">Home</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  className="sidebar-link"
                  to={'/about'}
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
