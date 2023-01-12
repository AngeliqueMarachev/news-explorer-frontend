
import React from "react";
import './Navigation.css';

import logo from '../../images/logo.svg';

export default function Navigation() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt={logo} />
            <nav className="navbar__container">
                <button className="navbar__button_home" type='button'>Home</button>
                <button className="navbar__button_signin" type='button'>Sign in</button>
            </nav>
        </div>
    )

}
