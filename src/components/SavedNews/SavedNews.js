import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';

import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";

export default function SavedNews({
  articles,
  onLogout,
  onDelete,
  savedArticles
}) {
  
  const currentUser = useContext(CurrentUserContext);

  const [showMore, setShowMore] = useState(3);

  const handleShowMoreClick = () => {
    setShowMore((prevShowMore) => prevShowMore + 3);
  };


  return (
    <>
      <SavedNewsHeader
        articles={articles}
        onLogout={onLogout}
        savedArticles={savedArticles}
      />

      <section className="saved-news">
      <div className='saved-news__text'>
          <div className="saved-news__cards">
          {savedArticles && savedArticles.slice(0, showMore).map((article) => (
            <SavedNewsCard
              key={article._id}
              image={article.image}
              date={article.date}
              title={article.title}
              text={article.text}
              source={article.source}
              keyword={article.keyword}
              onDelete={onDelete}
              card={article}
            />
          ))}
          </div>
          </div>
        <div className="saved-news__more">
            <button
              className="saved-news__more-button"
              type="button"
              onClick={handleShowMoreClick}
            >
              Show more
            </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
