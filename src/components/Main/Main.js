import React from "react";
import "./Main.css";
import About from "../About/About";
// import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";
// import NotFound from "../NotFound/Notfound";


export default function Main() {
  return (
    <>
      <main className="main">
        <Hero isLoggedIn='false' userName='Elise'/>
        {/* <Header /> */}
        <NewsCardList />
        <About />
        <Footer />
        {/* <Preloader /> */}
        {/* <NotFound /> */}
      </main>
    </>
  );
}
