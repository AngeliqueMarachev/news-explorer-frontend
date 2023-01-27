import React from "react";
import "./SavedNewsCard.css";
import trashIcon from "../../images/trash.svg";

export default function SavedNewsCard({ image, date, title, text, source }) {
  return (
    <div className="news-card">
      <img className="news-card__image " src={image} alt={title} />
      <div className="news-card__label">
        <p className="news-card__keyword-text">Photography</p>
      </div>
      <div className="news-card__main">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
      <span className="news-card__delete">
        <img
          className="news-card__delete-icon"
          src={trashIcon}
          alt="delete button"
        />
      </span>
    </div>
  );
}
