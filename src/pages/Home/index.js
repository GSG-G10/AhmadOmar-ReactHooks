import React, { useEffect, useState } from 'react';
import getNewsData from '../../utils/getNewsData'
import NewsCategories from '../../components/NewsCategories';
import NewsCards from '../../components/NewsCards';
import FavoriteContextProvider from '../../Context/FavoriteContext';
function Home() {
  const [newsData, setNewsData] = useState([])
  const [categoryValue, setCategoryValue] = useState('all')

  useEffect(() => {
    let active = true;
    getNewsData(categoryValue)
      .then(result => {
        if(active) {
          setNewsData(result)}
        })
        return () => {
          active = false;
        }
    
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
