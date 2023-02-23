import "./Navigation.css";
import { NavLink, Link, useLocation } from "react-router-dom";

import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

export default function Navigation({
  isLoggedIn,
  username,
  onSigninClick,
  setIsLoginPopupOpen,
}) {
  const location = useLocation();
  const navClass = location.pathname === "/" ? "" : "_saved";

  return (
    <div className="navbar">
      <div className="navbar__top">
        <Link
          to="/"
          className={`navbar__logo ${navClass && "navbar__logo_saved"}`}
        >
          NewsExplorer
        </Link>
      </div>
      
      <nav className="navbar__links">
        <NavLink
          to="/"
          className={
            `${
              navClass === "" && "navbar__link navbar__link_active"
            } navbar__link navbar__link` + navClass
          }
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-news"
              className={
                `${
                  navClass === "_saved" &&
                  "navbar__link_active" &&
                  "navbar__link_saved_active"
                } navbar__link navbar__link` + navClass
              }
            >
              Saved articles
            </NavLink>
            <button
              className={
                `navbar__header-button navbar__header-button_logout navbar__header-button` +
                navClass
              }
              username={username}
            >
              Elise
              <img
                src={location.pathname === "/" ? logout_white : logout_black}
                alt="logout logo"
              />
            </button>
          </>
        ) : (
          <button
            className={
              `navbar__header-button navbar__header-button_login navbar__header-button` +
                navClass
                
            }
            type="button"
            // onClick={() => setIsLoginPopupOpen(true)}
            onClick={onSigninClick}
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  );
}
