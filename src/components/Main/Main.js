import React from "react";
import "./Main.css";
import About from "../About/About";
// import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
// import { news } from "../../utils/temp_articles";

export default function Main({isLoggedIn}) {
  return (
    <>
      <main className="main">
        <NewsCardList />
        <About />
        <Footer />
      </main>
    </>
  );
}
