import "./SearchForm.css";
// import useForm from "../../utils/useForm";
// import search from "../../utils/NewsApi";

// export default function SearchForm({ onSearch }) {
//   const { values, handleChange } = useForm({ keyword: '' });

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSearch(values.keyword);

export default function SearchForm({ onSearch }) {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__container-form"
          onSubmit={onSearch}
        >
          <label className="search-form__container-form-field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter Topic"
              autoFocus
              autoComplete="off"
              // onChange={handleChange}
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
