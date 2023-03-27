import React from "react";
import { useState } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";
// import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
  isLoggedIn,
  url,
}) {
  const location = useLocation();
  // const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  const realDate = new Date(date);

  return (
    <div className="card">
      <a
        href={url}
        className="card__link"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={image}
          alt={title} />
        
        {location.pathname === "/" ? (
          <button
            type="button"
            className={`card__button card__button_save ${isSaved && 'card__button_saved'} ${(!isSaved) && 'card__button_hover'}`}
            // className={` ${
            //   isSaved
            //     ? "card__button card__button_saved"
            //     : "card__button card__button_save"
            // }`}
            onClick={handleSaveClick}
          />
        ) : (
          // <button className="card__button card__button_delete" />
          <button className={`card__button card__button_delete`} />
        )}

        {((location.pathname === "/" && !isLoggedIn) ||
          location.pathname === "/saved-news") && (
          <div className="card__label card__label_type_sign-in">
            <p className="card__label-text">
              {location.pathname === "/"
                ? "Sign to save articles"
                : "Remove from saved"}
            </p>
          </div>
        )}

        {location.pathname === "/saved-news" && (
          <div className="card__label card__label_type_keyword">
            <p className="card__label-text">{keyword}</p>
          </div>
        )}

        <div className="card__description">
          <div className="card__info">
            <p className="card__date">{realDate.toDateString()}</p>
            <h3 className="card__title">{title}</h3>
          </div>
          <p className="card__text">{text}</p>
          <p className="card__source">{source}</p>
        </div>
      </a>
    </div>
  );
}
