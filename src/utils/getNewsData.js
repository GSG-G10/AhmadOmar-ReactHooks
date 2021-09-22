
const getNewsData = (categoryValue) => {
  return fetch(`https://inshortsapi.vercel.app/news?category=${categoryValue}`)
  .then(response => response.json())
  .then((result) => result.data);
}

export default getNewsData;