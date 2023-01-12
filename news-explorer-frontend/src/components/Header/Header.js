import React from "react";
import "./Header.css";
// import Navigation from '../Navigation/Navigation';
// import SearchForm from '../SearchForm/SearchForm';

// import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* <img className="header__logo" src={logo} alt={logo} /> */}
        <h1 className="header__title">Whats going on in the world?</h1>
        <p className="header__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        {/* <nav className="header__navbar">
                <button className="header__home-button" type='button'>Home</button>
                <button className="header__signin-button" type='button'>Sign in</button>
            </nav> */}
      </div>
    </header>
  );
}
