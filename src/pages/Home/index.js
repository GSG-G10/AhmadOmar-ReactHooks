import React, { useEffect, useState } from 'react';
import getNewsData from '../../utils/getNewsData'
import NewsCategories from '../../components/NewsCategories';
import NewsCards from '../../components/NewsCards';
import FavoriteContextProvider from '../../Context/FavoriteContext';
function Home() {
  const [newsData, setNewsData] = useState([])
  const [categoryValue, setCategoryValue] = useState('all')
  // const [favoriteCard, SetFavoriteCard] = useState([])

  useEffect(() => {
    getNewsData(categoryValue)
      .then(result => setNewsData(result))
    
  }, [categoryValue])

  return (
    <>

      <NewsCategories categoryValue={categoryValue} setCategoryValue={setCategoryValue} />
      <FavoriteContextProvider>
        <NewsCards newsData={newsData} />
      </FavoriteContextProvider>
    </>
  )
}

export default Home
