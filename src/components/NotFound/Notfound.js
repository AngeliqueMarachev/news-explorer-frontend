import React from "react";
import notFoundPath from "../../images/not_found.svg";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__icon" src={notFoundPath} alt="sad face"/>
      <h2 className="not-found__title">Nothing found</h2>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
