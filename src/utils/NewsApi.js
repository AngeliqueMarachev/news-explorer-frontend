class NewsApi {
  constructor({ baseUrl, token, q }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  search(keyword) {
    return fetch(`${this._baseUrl}?q=${keyword}&apiKey=${this._token}`).then(
      (res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      }
    );
  }
}

//   search(keyword) {
//     const toDate = new Date();
//     let fromDate = new Date();
//     fromDate.setDate(toDate.getDate() - 7);

//     return fetch(
//       `${
//         this._baseUrl
//       }?q=${keyword}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=10&apiKey=${
//         this._token
//       }`
//     ).then((res) => {
//       return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//     });
//   }
// }

export const newsApi = new NewsApi({
  // baseUrl: "https://newsapi.org/v2/everything",
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  token: "51ec63208a60418e8c73a8efa6a2b016",
});
