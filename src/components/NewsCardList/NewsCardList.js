import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { news } from '../../utils/temp_articles.js';

// import cardPath1 from "../../images/card1.jpg";
// import cardPath2 from "../../images/card2.jpg";
// import cardPath3 from "../../images/card3.jpg";

// const news = [
//   {
//     image: `${cardPath1}`,
//     date: "November 4, 2020",
//     title: "Everyone Needs a Special 'Sit Spot' in Nature",
//     text: "Ever since I read Richard Louv's influential book, Last Child in the Woods, the idea of having a special sit spot has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'",
//     source: "TREEHUGGER",
//   },
//   {
//     image: `${cardPath2}`,
//     date: "February 19, 2019",
//     title: "Nature makes you better",
//     text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.'",
//     source: "NATIONAL GEOGRAPHIC",
//   },
//   {
//     image: `${cardPath3}`,
//     date: "October 19, 2020",
//     title: "Grand Teton Renews Historic Crest Trail",
//     text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...'",
//     source: "NATIONAL PARKS TRAVELLER",
//   },
// ];

export default function NewsCardList() {
  return (
    <>
      <ul className="news-list">
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
      </ul>
      <div className="new-list__more">
        <button className="news-list__more-button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}
