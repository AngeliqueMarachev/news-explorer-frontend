import React from "react";
import "./Footer.css";
import githubPath from "../../images/github_icon.svg";
import facebookPath from "../../images/facebook_icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">©️ 2023 Supersite Powered by News API</p>
      <nav className="footer__navigation">
        <div className="footer__links">
          <p className="footer_link footer__link_text">Home</p>
          <a className="footer__link footer__link_text" href="#practicum">
            Practicum
          </a>
          <a className="footer__link footer__link_image" href="#practicum">
            <img className="footer__icon" src={githubPath} alt="github" />
          </a>
          <a className="footer__link footer__link_image" href="#practicum">
            <img className="footer__icon" src={facebookPath} alt="facebook" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
