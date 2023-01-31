import React, { useState } from "react";
import { Routes, Route } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUsername] = useState("Elise");

     return (
      <>
        <Main isLoggedIn={isLoggedIn} userName={userName}/>
        <SavedNews />
        </>
    )
  }

//   return (
//     <div className="page">
//       <Routes>
//         <Route
//           path="/"
//           element={<Main isLoggedIn={isLoggedIn} userName={userName} />}
//         />
//         <Route
//           path="/saved-news"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <SavedNews />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// import Hero from "../Hero/Hero";
// import About from "../About/About";
// import NewsCard from "../NewsCard/NewsCard";
// import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from "../Preloader/Preloader";
// import NotFound from "../NotFound/Notfound";
// import Popup from "../Popup/Popup";
// import PopupWithForm from "../PopupWithForm/PopupWithForm";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
// import SuccessPopup from '../SuccessPopup/SuccessPopup';
// import Footer from "../Footer/Footer";
// import Navigation from "../Navigation/Navigation"