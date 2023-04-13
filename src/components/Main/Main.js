import React from "react";
import "./Main.css";
import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/Notfound";

export default function Main({
  isLoggedIn,
  onSigninClick,
  isLoading,
  articles,
  onLogout,
  savedArticles,
  onSearch,
  setArticles,
  onSave,
  keyword,
  setKeyword
}) {
  const blockState = () => {
    if (isLoading) return <Preloader />;
    if (articles.length === 0) {
      return <NotFound />;
    }
    return <NewsCardList
      articles={articles}
      isLoggedIn={isLoggedIn}
      setArticles={setArticles}
      savedArticles={savedArticles}
      onSave={onSave}      
    />;
  };

  return (
    <main className="main">
      <Hero
        isLoggedIn={isLoggedIn}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
        onSearch={onSearch}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {blockState()}

      <About />
      <Footer />
    </main>
  );
}
