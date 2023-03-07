import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import { news } from "../../utils/temp_articles.js";
import NewsCard from "../NewsCard/NewsCard";

import { useEffect } from "react";

// import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";


export default function SavedNews({ username, articles, onLogout, onNewsLoading }) {

  useEffect(() => {
    onNewsLoading();
    
  });

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
          {news.map((article, index) => {
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