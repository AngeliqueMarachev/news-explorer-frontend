import React, { useState } from "react";
import "./MobileMenu.css";
import { NavLink, Link, useLocation } from "react-router-dom";

// import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function MobileMenu({
  isLoggedIn,
  username,
  onSigninClick,
  // setIsLoginPopupOpen,
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
      <nav className="mobile-menu">
        {isBurgerMenuActive ? (
          // <nav className={`mobile-menu-open ${navClass && "mobile-menu-open_saved"}`}>
          <div className="mobile-menu-open">
            <div className="mobile-menu__container-open">
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
                  className="mobile-menu__close"
                  onClick={handleBurgerCloseClick}
                ></button>
              </div>

              <div className="mobile-menu__links">
                <NavLink to="/" className="mobile-menu__link">
                  Home
                </NavLink>

                {isLoggedIn ? (
                  <>
                    <Link
                      to="/"
                      className={`mobile-menu-logo mobile-menu__logo_active`}
                    >
                      NewsExplorer
                    </Link>
                    <NavLink to="/saved-news" className="mobile-menu__link">
                      Saved articles
                    </NavLink>
                    <button
                      className={`mobile-menu__button mobile-menu__button_logout`}
                      username={username}
                    >
                      Elise
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
          </div>
        ) : (
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
              className={`mobile-menu__burger ${
                navClass && "mobile-menu__burger_saved"
              }`}
              onClick={handleBurgerMenuClick}
            ></button>
          </div>
        )}
      </nav>
    </>
  );
}
