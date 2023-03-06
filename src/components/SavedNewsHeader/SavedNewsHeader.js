import React from "react";
import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function SavedNewsHeader({
  // news,
  articles, 
  username,
  onLogout
}) {
  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} username={username} onLogout={onLogout} />
      <MobileMenu  isLoggedIn={true} username={username} onLogout={onLogout} />
      <section className="saved-header__text">
        <h4 className="saved-header__title">Saved articles</h4>
        <h2 className="saved-header__description">
          {/* {username}, you have {news.length} saved articles */}
          {username}, you have {articles.length} saved articles
        </h2>
        <p className="saved-header__keywords">
          By keywords: {""}
          <strong>
            <span>
              {articles[0].keyword}, {articles[1].keyword}, and {articles.length - 2}others
            </span>
          </strong>
        </p>
      </section>
    </header>
  );
}
