import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { v4 as uuidv4 } from 'uuid';

export default function NewsCardList({
  articles,
  isLoggedIn,
  onSave,
  savedArticles,
  onDelete,
  onUnauthorizedClick
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
                // <li key={article._id}>
                   <li key={uuidv4()}>
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
                    onDelete={onDelete}
                    onUnauthorizedClick={onUnauthorizedClick}
                  />
                </li>
              );
            })}
        </ul>
     
    
      <div className="news-list__more">
      {articles.length && (
          <button className="news-list__more-button" type="button" onClick={handleShowMoreClick}>
            Show more
          </button>
      
        )}
        </div>
        </section>
    </>
  );
}
