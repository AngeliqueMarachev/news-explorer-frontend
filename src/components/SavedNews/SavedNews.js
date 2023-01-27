import React from "react";
import './SavedNews.css';
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
// import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCard from '../SavedNewsCard/SavedNewsCard';
import {news} from '../../utils/temp_articles.js'
// import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews() {
    // return (
    //     <SavedNewsHeader username='Elise' />
    // );
    return (
        <>
      
        <SavedNewsHeader username='Elise' />
        <section className="saved-news">
            <div className="saved-news__text">
                <h4 className="saved-news__title">Saved articles</h4>
                <h2 className="saved-news__description">
                    Elise, you have 5 saved articles
                </h2>
                <p className="saved-news__keywords">
                        By keywords: {''}
                        <strong>Nature, Yellowstone, and 2 others</strong>
                </p>
            </div>
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
                            />
                        )
                    })}

            </div>
            </section>
            </>
    )
}