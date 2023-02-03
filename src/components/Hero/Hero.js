import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

export default function Hero({ isLoggedIn, userName, setIsLoginPopupOpen, setIsRegisterPopupOpen, setIsSuccessPopupOpen}) {
  return (
    <div className="hero">
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        setIsLoginPopupOpen={setIsLoginPopupOpen}
        setIsRegisterPopupOpen={setIsRegisterPopupOpen}
        setIsSuccessPopupOpen={setIsSuccessPopupOpen}/>
      <Header />
      <SearchForm />
    </div>
  );

}

