import React from "react";
import { useState, useContext } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function NewsCard({
  // image,
  // date,
  // title,
  // text,
  // source,
  // keyword,
  // url,
  isLoggedIn,
  card,
  onDelete,
  // onSave
}) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);

  // const handleSaveClick = () => {
  //   setIsSaved(!isSaved);
  // };

  function handleSaveClick(e) {
    e.preventDefault();
    setIsSaved((state) => !state);
    if (isSaved) {
      onDelete(currentUser.savedArticles.find((article) => article.link === card.url))
    } 
  }

  function handleDelete(e) {
    e.preventDefault();
    onDelete(card);
  }

  const realDate = new Date(card.date);

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
            } ${!isSaved && "card__button_hover"}`}
            // className={` ${
            //   isSaved
            //     ? "card__button card__button_saved"
            //     : "card__button card__button_save"
            // }`}
            onClick={handleSaveClick}
          />
        ) : (
          <button
            className="card__button card__button_delete"
            onClick={handleDelete}
          />
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
            <p className="card__label-text">{card.keyword}</p>
          </div>
        )}

        <div className="card__description">
          <div className="card__info">
            <p className="card__date">{realDate.toDateString()}</p>
            <h3 className="card__title">{card.title}</h3>
          </div>
          <p className="card__text">{card.description || card.text}</p>
          <p className="card__source">{card.source.name || card.source}</p>
        </div>
      </a>
    </div>
  );
}
