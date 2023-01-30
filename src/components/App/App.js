import React, { useState } from "react";
import "./App.css";
import Hero from "../Hero/Hero";
// import About from "../About/About";
// import Footer from "../Footer/Footer";

import Main from "../Main/Main";

// import NewsCard from "../NewsCard/NewsCard";
// import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from "../Preloader/Preloader";
// import NotFound from "../NotFound/Notfound";
// import Popup from "../Popup/Popup";
// import PopupWithForm from "../PopupWithForm/PopupWithForm";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
// import SuccessPopup from '../SuccessPopup/SuccessPopup';
// import Navigation from "../Navigation/Navigation";
import SavedNews from "../SavedNews/SavedNews";


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUsername] = useState('Elise');

  return (
    <>
      {/* <Hero isLoggedIn={isLoggedIn} userName={userName}/> */}
      <Main isLoggedIn={isLoggedIn} userName={userName}/>
      <SavedNews />
      {/* <Popup /> */}
      {/* <PopupWithForm /> */}
      {/* <Login name='Sign in' isOpen={true} /> */}
      {/* <Register name='Sign up' isOpen={true} /> */}
      {/* <SuccessPopup name="Registration successfully completed!" isOpen={true} /> */}
      </>
  )
}