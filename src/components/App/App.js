import React from "react";
import "./App.css";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/Notfound";
import About from "../About/About";
import Popup from "../Popup/Popup";

// import NewsCard from '../NewsCard/NewsCard';
// import Main from "../Main/Main";
// import SavedNews from "../SavedNews/SavedNews";

export default function App() {
  return (
    <div className="app">
      <>
        <Hero />
        <Preloader />
        <NotFound />
        <NewsCardList />
        <About />
        <Footer />
        <Popup  name="Sign in" isOpen="true" />
      
      </>
    </div>
  );
}
