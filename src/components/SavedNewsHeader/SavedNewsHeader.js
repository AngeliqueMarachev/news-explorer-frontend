import React from "react";
import "./SavedNewsHeader.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function SavedNewsHeader({ news, userName }) {
  return (
    <header className="saved-header">
      {/* <h1 className="saved-header__nav_logo">NewsExplorer</h1>
            <nav className="saved-header__nav">
                <Link 
                    to={'/'}
                    className="saved-header__button saved-header__button-nav">
                    Home
                </Link>
                <Link 
                    to={'/saved-news'}
                    className="saved-header__button saved-header__button-nav saved-header__button_active">
                    Saved articles
                </Link>
                <button 
                    type="button"
                    className="saved-header__button saved-header__signin-button">
                    Sign in
                </button>
            </nav> */}
      <Navigation isLoggedIn={true} userName={userName} />

      <section className="saved-header__text">
        <h4 className="saved-header__title">Saved articles</h4>
        <h2 className="saved-header__description">
          {/* {userName}, */} Elise, you have {news.length} saved articles
        </h2>
        <p className="saved-header__keywords">
          By keywords: {""}
          <strong>
            <span>
              {news[0].keyword}, {news[1].keyword}, and {news.length - 2}others
            </span>
          </strong>
        </p>
      </section>
    </header>
  );
}
