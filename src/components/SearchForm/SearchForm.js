import React from "react";
import './SearchForm.css';

export default function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__container"> 
                <input className="search-form__input" type="text" placeholder="Enter Topic"/>
                <button className="search-form__submit" type="button">Search</button>
            </div>
        </form>
    );
}