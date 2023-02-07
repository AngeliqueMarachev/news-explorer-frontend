import React from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
}) {

  const location = useLocation();

  return (
    <div className="news-card">
      <img className="news-card__image" src={image} alt={title} />

  
      {location.pathname === "/" ? (
       <button className="news-card__save" />
      ) : (
        <button className="news-card__delete" />
      )}
     
      <div className="news-card__label">
        <p className="news-card__signin-text">
          {location.pathname === "/" ? (
          "Sign in to save articles"
          ) : (
            "Remove from saved"
          )}
          </p>
      </div>
      {location.pathname === '/saved-news' && (
        <div className="news-card__label news-card__label_keyword">
          <p className="news-card__label news-card__label_text">{keyword}</p>
          </div>
      )}
      <div className="news-card__main">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}