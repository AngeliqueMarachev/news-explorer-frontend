import React from "react";
import "./Footer.css";
import githubPath from "../../images/github_icon.svg";
import facebookPath from "../../images/facebook_icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">©️ 2023 Supersite Powered by News API</p>
      <div className="footer__links">
        <div className="footer__text-links">
          <a className="footer__link footer__link_text" href="#practicum">
            Home
          </a>
          <a className="footer__link footer__link_text" href="#practicum">
            Practicum
          </a>
        </div>
        <div className="footer__image-links">
          <a className="footer__link footer__link_image" href="#practicum">
            <img className="footer__image" src={githubPath} alt="github" />
          </a>
          <a className="footer__link footer__link_image" href="#practicum">
            <img className="footer__image" src={facebookPath} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
