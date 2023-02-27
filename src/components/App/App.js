// REACT
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as mainApi from '../../utils/MainApi';
// import api from '../../utils/MainApi';

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

  // function handleRegister({ email, password, name }) {
  //   api
  //     .register(email, password, name)
  //     .then((user) => {
  //       if (user.data._id) {
  //         closeAllPopups();
  //         setIsSuccessPopupOpen(true);
  //       } else {
  //         console.log(user);
  //       }
  //     })
  //     .catch((err) => console.log(err, "Hello error"));
  // }

  function handleRegister({ email, password, name }) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res._id) {
          closeAllPopups();
          setIsSuccessPopupOpen(true);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err, "Hello error"));
  }
  
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
      <Register
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onSigninClick={handleSigninClick}
        onRegister={handleRegister}
      />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} />
      
    </div>
  );
}
