// import React, { useState } from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

// import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";

// import { news } from "../../utils/temp_articles.js";

export default function SavedNews({
  // username,
  // articles,
  onLogout,
  onDelete
}) {
  
  const currentUser = useContext(CurrentUserContext);

  // const [showMore, setShowMore] = useState(3);

  // const handleShowMoreClick = () => {
  //   setShowMore((prevShowMore) => prevShowMore + 3);
  // };

  return (
    <>
      <SavedNewsHeader
        // articles={articles}
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
              // onDelete={() => handleDelete(article._id)}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>

      {/* <section className="saved-news">
        <ul className="saved-news__articles">

          {articles &&
            articles.slice(0, showMore).map((article, index) => {
              return (
                <li key={index}>
                  <SavedNewsCard
                    isSaved={true}
                    // key={index}
                    key={article._id}
                    image={article.image}
                    date={article.date}
                    title={article.title}
                    text={article.text}
                    source={article.source}
                    keyword={article.keyword}
                    // onDelete={onDelete}
                    onDelete={() => handleDelete(article._id)}
                  />
                </li>

                
                //   <NewsCard
                //   key={index}
                //   image={article.image}
                //   date={article.date}
                //   title={article.title}
                //   text={article.text}
                //   source={article.source}
                // />
              );
            })}
        </ul>

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
      </section> */}

      <Footer />
    </>
  );
}
