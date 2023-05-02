// export const BASE_URL = "http://localhost:3000";
export const BASE_URL =  "https://api.angelique.students.nomoredomainssbs.ru";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(checkResponse)
};

export const register = (email, password, name) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
};

export const login = (email, password) => {
    return request(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
};

export const checkToken = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
};

export const getArticles = (token) => {
  return request(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
};

  export const saveArticle = (token, { date, image, url, source, text, title }, keyword) => {
  return request(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
    body: JSON.stringify({ date, image, link: url, source, text, title, keyword }),
  })
  };

export const deleteArticle = (token, article) => {
  console.log(article)
  return request(`${BASE_URL}/articles/${article._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  })
};
  