import React from "react";
import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';

export default function SavedNewsHeader() {
    return (
        <header className="saved-header">
            <Navigation isLoggedIn={true} userName='Elise' />
        </header>
    );
}