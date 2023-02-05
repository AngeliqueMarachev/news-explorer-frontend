import React, { useState } from "react";
import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function Navigation({ isLoggedIn, userName, setIsLoginPopupOpen }) {
  const location = useLocation();
  const navClass = location.pathname === "/" ? "" : "_saved";
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  return (
    <div className="navbar">
      {isLoggedIn ? (
        <>
          <NavLink to='/' className="navbar__logo_saved">NewsExplorer</NavLink>
        </>
      ) : (
        <NavLink to='/' className="navbar__logo">NewsExplorer</NavLink>
      )}

      <nav className="navbar__links">
        <NavLink to='/' className={`navbar__link navbar__link` + navClass}>Home</NavLink>
        <NavLink to='/saved-news' className={`navbar__link navbar__link` + navClass}>Saved articles</NavLink>
        {isLoggedIn ? (
          <button className={`navbar__header-button navbar__header-button_logout navbar__header-button` + navClass}>
            Elise
            <img src={location.pathname === '/' ? logout_white : logout_black} />
          </button>
        ) : (
          <button
          className={`navbar__header-button navbar__header-login navbar__header-button` + navClass}
          type="button"
          onClick={() => setIsLoginPopupOpen(true)}
        >
          Sign in
        </button>
        )}
      </nav>
    </div>
  );
}
