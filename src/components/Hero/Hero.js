import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Hero({
  isLoggedIn,
  onSigninClick, 
  onLogout,
  onSearch,
  setArticles, 
  keyword,
  setKeyword
}) {
  return (
    <div className="hero">
      <Navigation
        isLoggedIn={isLoggedIn}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
      <MobileMenu
        isLoggedIn={isLoggedIn}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
      <Header />
      <SearchForm
        onSearch={onSearch}
        setArticles={setArticles}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
}

