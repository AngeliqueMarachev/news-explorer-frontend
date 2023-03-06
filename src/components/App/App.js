// REACT
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// API
import * as mainApi from "../../utils/MainApi";

// ELEMENTS
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

// POPUPS
import Login from "../Login/Login";
import Register from "../Register/Register";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

import "./App.css";
import "../../index.css";
import { news } from "../../utils/temp_articles";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("Elise");
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState(news);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  useEffect(() => {
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res._id) {
            setCurrentUser(res.name);
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('jwt')
            console.log(res);
          }
        })
        .catch((err) => console.log(err))
    };
  }, [token]);



  const handleSigninClick = () => {
    setIsLoginPopupOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

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
      .catch((err) => console.log(err, "Register Error"));
  }

  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          setIsLoggedIn(true);
          setCurrentUser(res.name);
          localStorage.setItem("jwt", res.token);
          setToken(res.token);
          closeAllPopups();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err, "Login Error"));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser('');
    localStorage.removeItem('jwt');
    setToken('');
    setIsLoginPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                username={currentUser}
                onSigninClick={handleSigninClick}
                isLoading={isLoading}
                articles={articles}
                onLogout={handleLogout}
                // setIsLoginPopupOpen={setIsLoginPopupOpen}
                // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
                // setIsSuccessPopupOpen={setIsSuccessPopupOpen}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                username={currentUser}
                articles={articles}
                onLogout={handleLogout}
              />
              </ProtectedRoute>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onRegisterClick={handleRegisterClick}
          onLogin={handleLogin}
        />
        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onSigninClick={handleSigninClick}
          onRegister={handleRegister}
        />
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          onSigninClick={handleSigninClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
