import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import Footer from "../Footer/Footer";
import { news } from "../../utils/temp_articles.js";


export default function SavedNews({userName}) {
  return (
    <>
      <SavedNewsHeader userName={userName} news={news} />

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
      <Footer />
    </>
  );
}
