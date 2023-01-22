import React from "react";
import './Navigation.css';

import logo from '../../images/logo.svg';
import logoBlack from '../../images/logo_black.svg';

export default function Navigation({ isHome }) {
    return (
        <div className={`${!isHome ? "navbar" : "navbar navbar_white"}`}>
            <img className="navbar__logo" src={!isHome ? logo : logoBlack} alt='logo' />
            <nav className="navbar__container">
                <button className="navbar__button navbar__button_active navbar__button-home" type='button'>Home</button>
                <button className="navbar__button navbar__button_active navbar__button-saved" type='button'>Saved Articles</button>
                <button className="navbar__button navbar__signin-button" type='button'>Sign in</button>
            </nav>
        </div>
    )

}
