import React, { useEffect } from "react";
import { useState } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";

export default function NewsCard({
  isLoggedIn,
  card,
  onSave,
  onDelete,
  onUnauthorizedClick,
  savedArticles
}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    savedArticles &&
      savedArticles.some((article) => article.link === card.url) &&
      setIsSaved(true);
  }, [card.url, savedArticles]);

  function handleSaveClick(e) {
    e.preventDefault();
    setIsSaved((state) => !state);
    if (isSaved) {
      onDelete(
        savedArticles.find((article) => article.link === card.url)
      );
    } else {
      onSave(card);
    }
  }

  function handleUnauthorizedSaveClick(e) {
    e.preventDefault();
    onUnauthorizedClick();
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    onDelete(card);
  }

  // const realDate = new Date(card.date);
  function setDateString() {
    const date = new Date(card.publishedAt || card.date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="card">
      <a
        href={card.url || card.link}
        className="card__link"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={card.urlToImage || card.image}
          alt={card.title}
        />

        {location.pathname === "/" ? (
          <button
            type="button"
            className={`card__button card__button_save ${
              isSaved && "card__button_saved"
            } ${(!isSaved && isHover) && "card__button_hover"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={isLoggedIn ? handleSaveClick : handleUnauthorizedSaveClick}
          />
        ) : (
          <button
            className="card__button card__button_delete"
            onClick={handleDeleteClick}
          />
        )}

        {((location.pathname === "/" && !isLoggedIn) ||
          location.pathname === "/saved-news") && (
          <div className="card__label card__label_type_sign-in">
            <p className="card__label-text">
            {location.pathname === '/' ? (
                'Sign in to save articles'
              ) : (
                'Remove from saved'
              )}
            </p>
          </div>
        )}

        {location.pathname === "/saved-news" && (
          <div className="card__label card__label_type_keyword">
            <p className="card__label-text">{card.keyword}</p>
          </div>
        )}

        <div className="card__description">
          <div className="card__info">
            <p className="card__date">{setDateString()}</p>
            <h3 className="card__title">{card.title}</h3>
          </div>
          <p className="card__text">{card.description || card.text}</p>
          <p className="card__source">{card.source.name || card.source}</p>
        </div>
      </a>
    </div>
  );
}
