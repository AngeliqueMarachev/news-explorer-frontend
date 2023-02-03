import React from "react";
import "./Main.css";
import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import { news } from "../../utils/temp_articles";

export default function Main({isLoggedIn, userName, setIsLoginPopupOpen, setIsRegisterPopupOpen, setIsSuccessPopupOpen}) {
  return (
    <>
      <main className="main">
        <Hero
          setIsLoginPopupOpen={setIsLoginPopupOpen}
          setIsRegisterPopupOpen={setIsRegisterPopupOpen}
          setIsSuccessPopupOpen={setIsSuccessPopupOpen}
          isLoggedIn={isLoggedIn}
          userName={userName} />
        <NewsCardList news={news} />
        <About />
        <Footer />
      </main>
    </>
  );
}
