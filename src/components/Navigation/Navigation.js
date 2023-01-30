import React from "react";
import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function Navigation({ isLoggedIn, userName }) {
  const location = useLocation();
  const activeNav = location.pathname === "/" ? "" : "_saved";

  return (
    <div className="navbar">
      <p className={`navbar__logo navbar__logo` + activeNav}>NewsExplorer</p>
      <nav className="navbar__links">
        <NavLink className={`navbar__link navbar__link` + activeNav}>
          Home
        </NavLink>
        <NavLink className={`navbar__link navbar__link` + activeNav}>
          Saved articles
        </NavLink>
        {isLoggedIn ? (
          <button
            className={
              `navbar__header-button navbar__header-button_logout navbar__header-button` +
              activeNav
            }
          >
            {userName}
            <img
              src={location.pathname === "/" ? logout_white : logout_black}
              alt="logout icon"
            />
          </button>
        ) : (
          <button
            className={
              `navbar__header-button navbar__header-button_login navbar__header-button` +
              activeNav
            }
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  );
}

