import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { news } from '../../utils/temp_articles.js';

export default function NewsCardList() {
  return (
    <>
      <section className="news-list">
        <h4 className="news-list__title">Search results</h4>
       
        <div className="news-list__articles">
          {news.map((article, index) => {
            return (
              <NewsCard
                key={index}
                image={article.image}
                date={article.date}
                title={article.title}
                text={article.text}
                source={article.source}
              />
            );
          })}
        </div>
        
      
      </section>
      <div className="new-list__more">
        <button className="news-list__more-button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}

