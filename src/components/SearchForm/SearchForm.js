import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__container-form">
          <label className="search-form__container-form-field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter Topic"
            />
            <button className="search-form__submit" type="submit">
              Search
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
