import React from "react";
import "./Main.css";
import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <main className="main">
        <Hero isLoggedIn='false' username='Elise'/>
        <NewsCardList />
        <About />
        <Footer />
      </main>
    </>
  );
}
