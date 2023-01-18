import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import cardPath1 from "../../images/card1.jpg";

const news = [
  {
    image: `${cardPath1}`,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book, Last Child in the Woods, the idea of having a special sit spot has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'",
    source: "TREEHUGGER",
  }
];

export default function NewsCardList() {
  return (
    <ul className="news-list">
      <h4 className="news-list__title">Search results</h4>
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
    </ul>
  );
}




