import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

export default function Hero() {
  return (
    <div className="hero">
      <Navigation />
      <Header />
      <SearchForm />
    </div>
  );
}

