import React from "react";
import './SavedNewsHeader.css';
// import Navigation from '../Navigation/Navigation';
// import NewsCard from "../NewsCard/NewsCard";
import { Link } from "react-router-dom";

// export default function SavedNewsHeader({username}) {
//     return (
//         <header className="saved-header">
//             <Navigation isLoggedIn={true} username='Elise' />
//             <div className='saved-header__info'>
//                 <p className="saved-header__subtitle">Saved articles</p>
//                 <h2 className="saved-header__title">{username}, you have 5 articles saved</h2>
//                 <p className="saved-header__keywords">By keywords: <span className="saved-header__keywords-keyword"></span></p>
//             </div>
//         </header>
//     );
// }
export default function SavedNewsHeader() { 
    return (
        <header className="saved-header">
            <h1 className="saved-header__title">NewsExplorer</h1>
            <nav className="saved-header__nav">
                <Link 
                    to={'/'}
                    className="saved-header__button saved-header__button-nav">
                    Home
                </Link>
                <Link 
                    to={'/saved-news'}
                    className="saved-header__button saved-header__button-nav saved-header__button_active">
                    Saved articles
                </Link>
                <button 
                    type="button"
                    className="saved-header__button saved-header__signin-button">
                    Sign in
                </button>
            </nav>
        </header>
    )
}