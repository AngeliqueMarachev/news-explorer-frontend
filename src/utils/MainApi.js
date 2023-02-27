export const BASE_URL = "http://localhost:3000";
// export const BASE_URL =  "api.angelique.students.nomoredomainssbs.ru";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => checkResponse(res));
};


// class MainApi {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   }

//     register(email, password, name) {
//     //   console.log(email, password, name)
//       return fetch(this._baseUrl + '/signup', {
//       headers: this._headers,
//       method: "POST",
//       body: JSON.stringify({ email, password, name }),
//     }).then(this._checkResponse);
//   }
// }

// const api = new MainApi({
//     // baseUrl: "api.angelique.students.nomoredomainssbs.ru",
//     baseUrl: "http://localhost:3000",
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("jwt")}`,
//     "Content-Type": "application/json",
//   },
// });

// export default api;
