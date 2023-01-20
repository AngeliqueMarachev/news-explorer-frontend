import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
// import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <section className="app"> 
      <Hero />
      <Main />
      <Footer />
    </section>
    
      // <Router>
      // <Hero />
   
      //   <Route exact path="/" element={<Main />} />
      //   <Main />
      //   <Route path="/saved-news" element={<SavedNews />} />
      //   <SavedNews />
    
      //  <Footer />
      // </Router>
   
  );
}
