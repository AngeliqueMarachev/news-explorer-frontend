import React from "react";
import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/Notfound";


export default function Main() {
  return (
    <>
      <main className="main">
        {/* <Preloader /> */}
        <NotFound />
        <NewsCardList />
        <About />
      </main>
    </>
  );
}
