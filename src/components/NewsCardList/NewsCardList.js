import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList({
  articles,
  isLoggedIn,
  onSave,
  savedArticles,
}) {
  const [showMore, setShowMore] = useState(3);

  const handleShowMoreClick = () => {
    setShowMore((prevShowMore) => prevShowMore + 3);
  };

  return (
    <>
      <section className="news-list">
        <h4 className="news-list__title">Search results</h4>

        <ul className="news-list__articles">
          {articles &&
            articles.slice(0, showMore).map((article, index) => {
              console.log(article);
              return (
                  <li key={article._id}>
                  <NewsCard
                    card={article}
                    image={article.image}
                    date={article.date}
                    title={article.title}
                    text={article.text}
                    source={article.source}
                    isLoggedIn={isLoggedIn}
                    onSave={onSave}
                    savedArticles={savedArticles}
                  />
                </li>
              );
            })}
        </ul>
      </section>
    
      <div className="new-list__more">
      {articles.length && (
          <button className="news-list__more-button" type="button" onClick={handleShowMoreClick}>
            Show more
          </button>
      
        )}
          </div>
    </>
  );
}
