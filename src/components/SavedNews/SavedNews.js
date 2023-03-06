import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
// import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import Footer from "../Footer/Footer";
// import { news } from "../../utils/temp_articles.js";
import NewsCard from "../NewsCard/NewsCard";


export default function SavedNews({ username, articles, onLogout }) {
  return (
    
    <>
      <SavedNewsHeader
        username={username}
        articles={articles}
        onLogout={onLogout}
         // news={news}
      />

      <section className="saved-news">
        <div className="saved-news__articles">
          {articles.map((article, index) => {
            return (
              // <SavedNewsCard
              //   isSaved={true}
              //   key={index}
              //   image={article.image}
              //   date={article.date}
              //   title={article.title}
              //   text={article.text}
              //   source={article.source}
              //   keyword={article.keyword}
              // />
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
      <Footer />
    </>
  );
}
