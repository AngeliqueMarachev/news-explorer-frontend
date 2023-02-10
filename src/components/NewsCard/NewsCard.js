import React from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
  isLoggedIn
}) {

  const location = useLocation();

  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />


      {location.pathname === "/" ? (
       <button className="card__button card__button_type_save" />
      ) : (
        <button className="card__button card__button_type_delete" />
      )}
     
     {((location.pathname === '/' && !isLoggedIn) || location.pathname === '/saved-news') && (
          <div className="card__label card__label_type_sign-in">
            <p className="card__label-text">
              {location.pathname === '/' ? (
                'Sign to save articles'
              ) : (
                'Remove from saved'
              )}
            </p>
          </div>
        )}

      {location.pathname === '/saved-news' && (
        <div className="card__label card__label_type_keyword">
          <p className="card__label-text">{keyword}</p>
          </div>
      )}
      <div className="card__description">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
      </div>
    </div>
  );
}