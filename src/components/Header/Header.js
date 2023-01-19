import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Whats going on in the world?</h1>
        <p className="header__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
    </header>
  );
}
