// REACT
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// API
import * as mainApi from "../../utils/MainApi";
import { newsApi } from "../../utils/NewsApi";
import { news } from "../../utils/temp_articles";
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
  const navigate = useNavigate();
  // LOGIN & USER STATES
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  // POPUP STATES
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  // NEWS STATES
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const [keyword, setKeyword] = useState('');

  const [wasSearch, setWasSearch] = useState(false)

  // CHECK TOKEN
  useEffect(() => {
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res.data._id) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem("jwt");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  // FETCH SAVED ARTICLES ACCORDING TO USER
  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getArticles(token).then((res) => {
        if (res.data)
          setCurrentUser((currentUser) => ({
            ...currentUser,
            savedArticles: res.data,
          }));
      });
    }
  }, [isLoggedIn, token]);

  // HANDLE SEARCH BAR
  const handleSearchSubmit = (e, keyword) => {
    e.preventDefault();
    setIsLoading(true);
    newsApi
      .search(keyword)
      .then((res) => {
        if (res.articles) {
          console.log("res", res.articles);
          const newData = res.articles.map((article) => ({
            image: article.urlToImage,
            date: article.publishedAt,
            title: article.title,
            text: article.description,
            source: article.source.name,
            keyword: article.keyword,
            url: article.url,
          }));
          setArticles(newData);
          setWasSearch(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // POPUP STATES
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

  // AUTHORIZATION
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
          localStorage.setItem("jwt", res.token);
          console.log(res);
          setToken(res.token);
          closeAllPopups();
        } else {
          console.log(res, "handleLogin");
        }
      })
      .catch((err) => console.log(err, "Login Error"));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setToken("");
    navigate("/");
  }

  // SAVE ARTICLE
  const handleSave = (card) => {
    mainApi
      .saveArticle(token, card, keyword)
      .then((res) => {
        setSavedArticles(...currentUser.savedArticles, res.data);
      })
      .catch((err) => console.log(err));
  };

  // DELETE ARTICLE
  // const handleDelete = (article) => {
  //   mainApi
  //     .deleteArticle(token, article)
  //     .then((res) => {
  //       setCurrentUser({
  //         ...currentUser,
  //         setSavedArticles: currentUser.savedArticles.filter(
  //           (currArticle) => currArticle._id !== article._id,
  //         )
  //       })
  //     })
  //     .catch((err) => console.log(err));
  // }

  const handleDelete = (article) => {
    mainApi
      .deleteArticle(token, article)
 
      .then((res) => {
        setCurrentUser((prevUser) => ({
          ...prevUser,
          savedArticles: prevUser.savedArticles.filter(
            (currArticle) => currArticle._id !== article._id
          ),
        }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onSigninClick={handleSigninClick}
                isLoading={isLoading}
                articles={articles}
                onLogout={handleLogout}
                setArticles={setArticles}
                onSearch={handleSearchSubmit}
                onSave={handleSave}
                keyword={keyword}
                setKeyword={setKeyword}
                // onDelete={handleDelete}
                wasSearch={wasSearch}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  articles={articles}
                  onLogout={handleLogout}
                  setArticles={setArticles}
                  savedArticles={savedArticles}
                  onDelete={handleDelete}
                />
              </ProtectedRoute>
            }
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
