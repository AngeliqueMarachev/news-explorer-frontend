import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';

import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";

export default function SavedNews({
  articles,
  onLogout
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
      />

      <section className="saved-news">
        <h2 className="saved-news__title">Saved articles</h2>
        <div className="saved-news__cards">
          {currentUser.savedArticles && currentUser.savedArticles.map((article) => (
            <SavedNewsCard
              key={article._id}
              image={article.image}
              date={article.date}
              title={article.title}
              text={article.text}
              source={article.source}
              keyword={article.keyword}
            />
          ))}
        </div>
        <div className="saved-news__more">
          {articles && articles.length && (
            <button
              className="saved-news__more-button"
              type="button"
              onClick={handleShowMoreClick}
            >
              Show more
            </button>
          )}
        </div>
      </section>

      {/* <section className="saved-news">
                //   <NewsCard
                //   key={index}
                //   image={article.image}
                //   date={article.date}
                //   title={article.title}
                //   text={article.text}
                //   source={article.source}
                // />
      </section> */}

      <Footer />
    </>
  );
}
