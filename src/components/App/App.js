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

// import "./App.css";
import "../../index.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState("Elise");

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              setIsLoginPopupOpen={setIsLoginPopupOpen}
              setIsRegisterPopupOpen={setIsRegisterPopupOpen}
              setIsSuccessPopupOpen={setIsSuccessPopupOpen}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Login isOpen={isLoginPopupOpen} onClose={closeAllPopups} />
      <Register isOpen={isRegisterPopupOpen} onClose={closeAllPopups} />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}
