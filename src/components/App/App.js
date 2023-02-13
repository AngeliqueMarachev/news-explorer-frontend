// REACT
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// ELEMENTS
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

// POPUPS
import Login from "../Login/Login";
import Register from "../Register/Register";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

import "./App.css";
import "../../index.css";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSigninClick = () => {
    setIsLoginPopupOpen(true);
  }

  const handleRegisterClick = () => {
    setIsRegisterPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const username = 'Elise';

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={false}
              username={username}
              onSigninClick={handleSigninClick} 
              // setIsLoginPopupOpen={setIsLoginPopupOpen}
              // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
              // setIsSuccessPopupOpen={setIsSuccessPopupOpen}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews username={username} />} />
      </Routes>

      <Login isOpen={isLoginPopupOpen} onClose={closeAllPopups} onRegisterClick={handleRegisterClick} />
      <Register isOpen={isRegisterPopupOpen} onClose={closeAllPopups} onSigninClick={handleSigninClick} />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}
