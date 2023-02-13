import React from "react";
import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

export default function SavedNewsHeader({ news, username }) {
  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} username={username} />

      <section className="saved-header__text">
        <h4 className="saved-header__title">Saved articles</h4>
        <h2 className="saved-header__description">
          {username}, you have {news.length} saved articles
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
