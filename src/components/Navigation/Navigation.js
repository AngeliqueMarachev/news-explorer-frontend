import React from "react";
import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
// import { useState } from "react";
// import Login from '../Login/Login';


//  import logo from '../../images/logo.svg';
// import logoBlack from '../../images/logo_black.svg';

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function Navigation({ isLoggedIn, username }) {
  const location = useLocation();
  const navClass = location.pathname === "/" ? "" : "_saved";

  return (
    <div className="navbar">
      <p className={`navbar__logo navbar__logo` + navClass}>NewsExplorer</p>
      <nav className="navbar__links">
        <NavLink className={`navbar__link navbar__link` + navClass}>
          Home
        </NavLink>
        <NavLink className={`navbar__link navbar__link` + navClass}>
          Saved articles
        </NavLink>
        {isLoggedIn ? (
          <button
            className={
              `navbar__header-button navbar__header-button_logout navbar__header-button` +
              navClass
            }
          >
            {username}
            <img
              src={location.pathname === "/" ? logout_white : logout_black}
              alt="logout icon"
            />
          </button>
        ) : (
          <button
            className={
              `navbar__header-button navbar__header-button_login navbar__header-button` +
              navClass
            }
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  );
}

