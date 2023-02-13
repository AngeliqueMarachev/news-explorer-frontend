import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

export default function Hero({ isLoggedIn, username, onSigninClick, setIsLoginPopupOpen, setIsRegisterPopupOpen, setIsSuccessPopupOpen}) {
  return (
    <div className="hero">
      <Navigation
        isLoggedIn={isLoggedIn}
        username={username}
        // setIsLoginPopupOpen={setIsLoginPopupOpen}
        // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
      // setIsSuccessPopupOpen={setIsSuccessPopupOpen}
        onSigninClick={onSigninClick}
      />
      <Header />
      <SearchForm />
    </div>
  );

}

