import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import { news } from "../../utils/temp_articles";

export default function Main({isLoggedIn, userName, onSigninClick, setIsLoginPopupOpen, setIsRegisterPopupOpen, setIsSuccessPopupOpen}) {
  return (
    <>
      <main className="main">
        <Hero
          isLoggedIn={isLoggedIn}
          userName={userName}
          onSigninClick={onSigninClick}
          // setIsLoginPopupOpen={setIsLoginPopupOpen}
          // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
          // setIsSuccessPopupOpen={setIsSuccessPopupOpen}
          />
        <NewsCardList news={news} />
        <About />
        <Footer />
      </main>
    </>
  );
}
