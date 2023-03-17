import "./SearchForm.css";
// import useForm from "../../utils/useForm";
import { useState } from "react";

// export default function SearchForm({ onSearch }) {
//   const { values, handleChange } = useForm({ keyword: '' });

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSearch(values.keyword);
//   }

export default function SearchForm({ onSearch }) {

  const [keyword, setKeyword] = useState('');

  function handleChange(e) {
    setKeyword(e.target.value)
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
              // value={keyword}
              // onChange={e => setKeyword(e.target.value)} 
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