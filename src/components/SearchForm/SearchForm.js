import React from "react";
import './SearchForm.css';

export default function SearchForm() {
    return (
        <form className="search__form">
            <div className="search__form-container"> 
                <input className="search__form-input" type="text" placeholder="Enter Topic"/>
                <button className="search__form-submit" type="button">Search</button>
            </div>
        </form>
    );
}