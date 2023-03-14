import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
// import { news } from '../../utils/temp_articles.js';

export default function NewsCardList({ articles, isLoggedIn, onSaveClick, savedArticles }) {
  return (
    <>
      <section className="news-list">
        <h4 className="news-list__title">Search results</h4>
       
        <ul className="news-list__articles">
          {articles && articles.map((article, index) => {
            console.log(article)
            return (
              <li key={index}>
              <NewsCard
                image={article.image}
                date={article.date}
                title={article.title}
                text={article.text}
                source={article.source}
                isLoggedIn={isLoggedIn}
                />
                </li>
            );
          })}
        </ul>
        
      
      </section>
      <div className="new-list__more">
        <button className="news-list__more-button" type="button">
          Show more
        </button>
      </div>
    </>

  );
}


