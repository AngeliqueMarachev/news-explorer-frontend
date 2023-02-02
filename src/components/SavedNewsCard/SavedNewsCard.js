import React, { useState } from "react";
import "./SavedNewsCard.css";
// import trashIcon from "../../images/trash.svg";

export default function SavedNewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
}) {

  const [removeLabel, setRemoveLabel] = useState('false')

  return (
    <div className="saved-card">
      <img className="saved-card__image " src={image} alt={title} />
      <p className="saved-card__keyword">{keyword}</p>
      <div className="saved-card__main">
        <p className="saved-card__date">{date}</p>
        <h3 className="saved-card__title">{title}</h3>
        <p className="saved-card__text">{text}</p>
        <p className="saved-card__source">{source}</p>
      </div>
      <span className="saved-card__delete">
        <button
          onClick={() => setRemoveLabel(!removeLabel)}
          type="button"
          className={`${
            removeLabel
              ? "saved-card__delete-icon"
              : "saved-card__delete-icon_save"
              }
          }`}/>
      </span>

      <p className={`saved-card__remove-card ${removeLabel && 'saved-card__remove-card_open'
        }`}>
        Remove from saved
      </p>
    </div>
  );
}

