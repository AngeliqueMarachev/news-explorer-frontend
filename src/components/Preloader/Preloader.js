import React from "react";
import "./Preloader.css";

export default function Preloader() {
  return (
    <section className="preloader__container">
      <i className="preloader__animation"></i>
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}
