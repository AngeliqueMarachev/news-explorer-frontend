import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
// import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";

export default function App() {
  return (
    <section className="content">
      {/* <Navigation /> */}
      <Hero />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
    </section>
  );
}
