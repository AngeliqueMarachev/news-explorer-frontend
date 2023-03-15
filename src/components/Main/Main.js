import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/Notfound";
// import { news } from "../../utils/temp_articles";

export default function Main({
  isLoggedIn,
  username,
  onSigninClick,
  isLoading,
  articles,
  onLogout,
  onSearch,
  setArticles,
}) {
  const blockState = () => {
    if (isLoading) return (<Preloader />);
    if (articles.length === 0) {
      return (<NotFound />);
    }
    return (<NewsCardList
      articles={articles}
      isLoggedIn={isLoggedIn}
    />);
  }

  return (
 
      <main className="main">
        <Hero
          isLoggedIn={isLoggedIn}
          username={username}
          onSigninClick={onSigninClick}
          onLogout={onLogout}
          onSearch={onSearch}
          setArticles={setArticles}
        />
       {blockState()} 
       
        <About />
        <Footer />
      </main>

  );
}
