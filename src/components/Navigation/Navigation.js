import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

import logo from '../../images/logo.svg';
// import logoBlack from '../../images/logo_black.svg';

export default function Navigation() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt='logo' />
            <nav className="navbar__container">
                <NavLink className="navbar__button navbar__button_active navbar__button-home" type='button'>Home</NavLink>
                <NavLink className="navbar__button navbar__button_active navbar__button-saved" type='button'>Saved Articles</NavLink>
                <button className="navbar__button navbar__signin-button" type='button'>Sign in</button>
            </nav>
        </div>
    )

}
