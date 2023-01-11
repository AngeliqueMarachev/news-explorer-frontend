import React from "react";
import './Header.css';
// import Navigation from '../Navigation/Navigation';
// import SearchForm from '../SearchForm/SearchForm';

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Whats going on in the world?</h1>
            <nav className="header__navbar">
                <button className="header__button_home" type='button'>Home</button>
                <button className="header__button_signin" type='button'>Sign in</button>
            </nav>
        </header>
    )

}
