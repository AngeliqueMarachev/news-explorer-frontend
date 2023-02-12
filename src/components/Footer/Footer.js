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
          <a
            className="footer__link footer__link_text"
            href="https://practicum.com/en-isr"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Practicum
          </a>
        </div>
        <div className="footer__image-links">
          <a
            className="footer__link footer__link_image"
            href="https://www.linkedin.com/in/angeliquemarachev/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img className="footer__image" src={githubPath} alt="github" />
          </a>
          <a
            className="footer__link footer__link_image"
            href="https://www.facebook.com/angelina.francesca.98"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img className="footer__image" src={facebookPath} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
