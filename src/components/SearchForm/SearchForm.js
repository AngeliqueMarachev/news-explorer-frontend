import React from "react";
import "./SearchForm.css";
import useForm from "../../utils/useForm";


export default function SearchForm({ onSearch }) {
  const { values, handleChange } = useForm({ keyword: '' });

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(values.keyword);

  }
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__container-form"
          onSubmit={handleSubmit}>
          <label className="search-form__container-form-field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter Topic"
              autoFocus
              autoComplete="off"
              onChange={handleChange}
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
