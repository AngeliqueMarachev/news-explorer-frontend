import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

export default function Hero({ isLoggedIn, userName }) {
  return (
    <div className="hero">
      <Navigation isLoggedIn={true} userName={userName} />
      <Header />
      <SearchForm />
    </div>
  );

}

