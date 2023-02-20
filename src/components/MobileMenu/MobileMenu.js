import React, { useState } from "react";
import "./MobileMenu.css";
import { NavLink, Link, useLocation } from "react-router-dom";

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function MobileMenu({
  isLoggedIn,
  username,
  onSigninClick,
  setIsLoginPopupOpen,
}) {
  const location = useLocation();
  const navClass = location.pathname === "/" ? "" : "_saved";
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuActive(true);
  };

  const handleBurgerCloseClick = () => {
    setIsBurgerMenuActive(false);
  };

  return (
    <>
      <section className="mobile-menu">
        <div className="mobile-menu__container">
          <div className="mobile-menu__header">
            <Link
              to="/"
              className={`mobile-menu__logo ${
                navClass && "mobile-menu__logo_saved"
              }`}
            >
              NewsExplorer
            </Link>
            <button
              type="button"
              className="mobile-menu__burger"
              onClick={handleBurgerMenuClick}
            ></button>
            {/* <button
              type="button"
              className="mobile-menu__close"
              onClick={handleBurgerCloseClick}
            ></button> */}
          </div>

          <div className="mobile-menu__links">
          <NavLink to="/saved-news" className="mobile-menu__link">
              Home
            </NavLink>
            {/* <NavLink to="/saved-news" className="mobile-menu__link">
              Saved articles
            </NavLink> */}
            <button type="button" className="mobile-menu__button" on>
              Sign in
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* {isBurgerMenuActive ? (
        <div className="mobile-menu">
          <div className="mobile-menu__container">
         <div className="mobile-menu__header">
          <Link to='/' className={`mobile-menu__logo ${navClass && "mobile-menu__logo_saved"}`}>NewsExplorer</Link>
           <button type="button" className="mobile-menu__close" onClick={handleBurgerCloseClick}></button>
         </div>

          <div className="mobile-menu__links">
            <NavLink to="/" className="mobile-menu__link">
              Home
            </NavLink>
           
            {isLoggedIn ? (
              <>
                <NavLink to="/saved-news" className="mobile-menu__link">
                  Saved articles
                </NavLink>
                <button className={`mobile-menu__button mobile-menu__button_logout`}
                 username={username}>Elise
                  <img src={logout_white} alt="logout logo" />
                </button>
              </>
            ) : (
              <button
                className={`mobile-menu__button mobile-menu__button_login`}
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
          <NavLink to="/" className={`mobile-menu__logo mobile-menu__logo` + navClass}>
            NewsExplorer
          </NavLink>
          <button
            className={`mobile-menu__burger mobile-menu__burger` + navClass}
            onClick={handleBurgerMenuClick}
          />
        </>
      )} */
}
