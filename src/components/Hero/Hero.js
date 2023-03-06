import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Hero({
  isLoggedIn,
  username,
  onSigninClick, 
  onLogout
}) {
  return (
    <div className="hero">
      <Navigation
        isLoggedIn={isLoggedIn}
        userame={username}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
      <MobileMenu
        isLoggedIn={isLoggedIn}
        userame={username}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
      <Header />
      <SearchForm />
    </div>
  );
}
