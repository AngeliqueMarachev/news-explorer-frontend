import "./SearchForm.css";
// import useForm from "../../utils/useForm";
import { newsApi } from "../../utils/NewsApi";
import { useState } from "react";

// export default function SearchForm({ onSearch }) {
//   const { values, handleChange } = useForm({ keyword: '' });

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSearch(values.keyword);

export default function SearchForm({setArticles}) {
  // FROM LIZA LIVE-CODING

  // const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState('');

 

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    newsApi.search(keyword).then((res) => {
      if (res.articles) {
        console.log("res", res.articles);
        const newData = res.articles.map((article) => ({
          image: article.urlToImage,
          date: article.publishedAt,
          title:article. title,
          text: article.description,
          source: article.source.name,
          keyword: article.keyword,
          url: article.url,
        }));
        setArticles(newData);
      }
      console.log("res", res.articles);

      // setNews({}); //link, title
    });
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__container-form"
          onSubmit={handleSearchSubmit}
        >
          <label className="search-form__container-form-field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter Topic"
              autoFocus
              autoComplete="off"
              value={keyword}
              onChange={e => setKeyword(e.target.value)} 
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
