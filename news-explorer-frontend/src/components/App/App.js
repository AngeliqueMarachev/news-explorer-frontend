import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/saved-news" element={<SavedNews />} />
    </Routes>
  );
}
