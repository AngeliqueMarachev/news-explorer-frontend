import React from "react";
import './SavedNewsHeader.css';
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function SavedNewsHeader({userName}) { 
    return (
        <header className="saved-header">
            {/* <h1 className="saved-header__title">NewsExplorer</h1>
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
            </nav> */}
            <Navigation isLoggedIn={true} userName='Elise' />
        </header>
    )
}