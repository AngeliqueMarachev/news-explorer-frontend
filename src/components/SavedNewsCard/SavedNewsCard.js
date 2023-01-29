import React from "react";
import "./SavedNewsCard.css";
import trashIcon from "../../images/trash.svg";

export default function SavedNewsCard({ image, date, title, text, source, keyword }) {
  return (
    <div className="saved-card">
      <img className="saved-card__image " src={image} alt={title} />
      {/* <div className="saved-card__label"> */}
              <p className="saved-card__keyword-text">{keyword}</p>
      {/* </div> */}
      <div className="saved-card__main">
        <p className="saved-card__date">{date}</p>
        <h3 className="saved-card__title">{title}</h3>
        <p className="saved-card__text">{text}</p>
        <p className="saved-card__source">{source}</p>
      </div>
      <span className="saved-card__delete">
        <img
          className="saved-card__delete-icon"
          src={trashIcon}
          alt="delete button"
        />
      </span>
    </div>
  );
}
