import React, { useState } from "react";
import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function Navigation({
  isLoggedIn,
  userName,
  onSigninClick,
  setIsLoginPopupOpen }) {
  const location = useLocation();
  const navClass = location.pathname === "/" ? "" : "_saved";
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuActive(true);
  }

  const handleBurgerCloseClick = () => {
    setIsBurgerMenuActive(false);
  }

  return (
    <div className="navbar">
      {isBurgerMenuActive ? (
        <div className="navbar__mobile">
          <div className="navbar__top">
            <NavLink to='/' className={'navbar__logo'}>NewsExplorer</NavLink>
            <button className="navbar__close=menu" onClick={handleBurgerCloseClick} />
          </div>

          <div className="navbar__link_active">
          <NavLink to='/' className='navbar__link'>Home</NavLink>
          
            {isLoggedIn ? (
              <>
                 <NavLink to='/saved-news' className='navbar__link'>Saved articles</NavLink>
                <button className={`navbar__header-button navbar__header-button_logout`}>
                  <img src={logout_white} alt="logout logo" />
                </button>
              </>
            ) : (
                <button
                  className={`navbar__header-button navbar__header-login`}
                  type="button"
                  // onClick={() => setIsLoginPopupOpen(true)}
                  onClick={onSigninClick}
                >
                  Sign in
                </button>
            )}
          </div>
        </div>
      ) : (
        <>
           <NavLink to='/' className={`navbar__logo navbar__logo` + navClass}>NewsExplorer</NavLink>
            <button className={`navbar__mobile_menu navbar__mobile_menu` + navClass} onClick={handleBurgerMenuClick} />
        </>
      )}

      <nav className="navbar__links">
        <NavLink
          to='/'
          className={`${navClass === '' && 'navbar__link_active'} navbar__link navbar__link` + navClass}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to='/saved-news'
              className={`${navClass === '_saved' && 'navbar__link_active' && 'navbar__link_saved_active'} navbar__link navbar__link` + navClass}>
              Saved articles
            </NavLink>
            <button className={`navbar__header-button navbar__header-button_logout navbar__header-button` + navClass}
              userName={userName}>Elise
              <img src={location.pathname === '/' ? logout_white : logout_black} alt="logout logo"/>
            </button>
          </>
        ) : (
          <button
            className={`navbar__header-button navbar__header-login navbar__header-button` + navClass}
            type="button"
            // onClick={() => setIsLoginPopupOpen(true)}
              onClick={onSigninClick}
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  )
}