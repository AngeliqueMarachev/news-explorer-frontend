import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Hero({ isLoggedIn, username, onSigninClick, setIsLoginPopupOpen, setIsRegisterPopupOpen, setIsSuccessPopupOpen}) {
  return (
    <div className="hero">
 
      <Navigation
        isLoggedIn={isLoggedIn}
        userame={username}
        // setIsLoginPopupOpen={setIsLoginPopupOpen}
        // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
      // setIsSuccessPopupOpen={setIsSuccessPopupOpen}
        onSigninClick={onSigninClick}
      />
      <MobileMenu />
      <Header />
      <SearchForm />
    </div>
  );

}

