import "./SavedNewsCard.css";

export default function SavedNewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
  card,
  onDelete
}) {

  function setDateString() {
    const isoDate = card.publishedAt || card.date;
    const date = new Date(isoDate);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="saved-card">
      <img className="saved-card__image " src={image} alt={title} />
     
      <div className="saved-card__main">
        <p className="saved-card__date">{setDateString()}</p>
        <h3 className="saved-card__title">{title}</h3>
        <p className="saved-card__text">{text}</p>
        <p className="saved-card__source">{source}</p>
      </div>
      <span className="saved-card__trash-container">
        <button
          type="button"
          className="saved-card__delete-icon"
          onClick={()=>onDelete(card)}
        />
      <p className="saved-card__label">
        Remove from saved
        </p>
      </span>
      <p className="saved-card__keyword">{keyword}</p>
    </div>
  );
  
}
