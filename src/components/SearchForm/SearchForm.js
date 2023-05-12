import "./SearchForm.css";

export default function SearchForm({ onSearch, keyword, setKeyword }) {
  function handleChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__container-form"
          onSubmit={(e) => onSearch(e, keyword)}
        >
          <label className="search-form__container-form-field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter Topic"
              autoFocus
              autoComplete="off"
              onChange={handleChange}
              value={keyword || ""}
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
