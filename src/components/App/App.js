import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <PopupWithForm />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </div>
  );
}
