const NEWS_API_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = "51ec63208a60418e8c73a8efa6a2b016";

export default function search(keyword) {
  const toDate = new Date();
  let fromDate = new Date();
  fromDate.setDate(toDate.getDate() - 7);

  return fetch(
    `${NEWS_API_URL}?q=${keyword}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=10&apiKey=${NEWS_API_KEY}`
  ).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
