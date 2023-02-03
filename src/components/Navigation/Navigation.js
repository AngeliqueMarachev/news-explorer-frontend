import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";
import logout_black from "../../images/logout_black.svg";
import logout_white from "../../images/logout_white.svg";

// export default function Navigation({ isLoggedIn, userName }) {
//   const location = useLocation();
//   const activeNav = location.pathname === "/" ? "" : "_saved";

//   return (
//     <div className="navbar">
//       <p className={`navbar__logo navbar__logo` + activeNav}>NewsExplorer</p>

//       <nav className="navbar__links">
//         <NavLink
//           to="/"
//           className={
//             `${
//               activeNav === "" && "navbar__link_active"
//             } navbar__link navbar__link` + activeNav
//           }
//         >
//           Home
//         </NavLink>

//         {isLoggedIn ? (
//           <>
//             <NavLink
//               to="/saved-news"
//               className={
//                 `${
//                   activeNav === "_saved" && "navbar__link_active"
//                 } navbar__link navbar__link` + activeNav
//               }
//             >
//               Saved articles
//             </NavLink>
//             <button
//               className={
//                 `navbar__header-button navbar__header-button_logout navbar__header-button` +
//                 activeNav
//               }
//             >
//               {userName}
//               <img
//                 src={location.pathname === "/" ? logout_white : logout_black}
//                 alt="logout icon"
//               />
//             </button>
//           </>
//         ) : (
//           <button
//             type="button"
//             className={
//               `navbar__header-button navbar__header-button_login navbar__header-button` +
//               activeNav
//             }
//           >
//             Sign in
//           </button>
//         )}
//       </nav>
//     </div>
//   );
// }

export default function Navigation({ setIsLoginPopupOpen }) {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className="navbar">
      <h1 className="navbar__logo">NewsExplorer</h1>
      <nav className="navbar__links">
        <Link 
          onClick={() => setActiveNav('home')}
          to={'/'}
          className={`navbar__link ${
          activeNav === "home" && "navbar__link_active"
            }`}>
          Home
        </Link>

        <Link 
          onClick={() => setActiveNav('saved-news')}
          to={'/saved-news'}
          className={`navbar__link ${
          activeNav === "saved-news" && "navbar__link_active"
            }`}>
          Saved Articles
        </Link>

        <button 
          className="navbar__header-button navbar__header-login"
          type="button"
          onClick={() => setIsLoginPopupOpen(true)}
        >
          Sign in
        </button>
      </nav>
    </div>
  )
}