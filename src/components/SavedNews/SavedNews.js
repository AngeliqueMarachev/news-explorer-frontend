import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
// import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import { news } from "../../utils/temp_articles.js";
import Navigation from "../Navigation/Navigation";
// import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews() {
  return (
    <>
      <SavedNewsHeader username="Elise" news={news} />

      <section className="saved-news">
        <div className="saved-news__articles">
          {news.map((article, index) => {
            return (
              <SavedNewsCard
                isSaved={true}
                key={index}
                image={article.image}
                date={article.date}
                title={article.title}
                text={article.text}
                source={article.source}
                keyword={article.keyword}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
