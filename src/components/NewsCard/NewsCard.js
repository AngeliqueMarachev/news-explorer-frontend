import React from "react";
import "./NewsCard.css";

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  isSaved,
}) {
  return (
    <div className="news-card">
      <img className="news-card__image " src={image} alt={title} />
      <button className="news-card__save" />
      <div className="news-card__label">
        <p className="news-card__signin-text">Sign in to save articles</p>
      </div>
      <div className="news-card__main">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}

