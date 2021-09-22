import React from 'react'
import FavoriteContextProvider from '../../Context/FavoriteContext'
import FavoriteCards from '../../components/FavoriteCards';
function Favorite() {
  return (
    <div>
      <h2>My Favorite:</h2>
      <FavoriteContextProvider>
        <FavoriteCards />
      </FavoriteContextProvider>
    </div>
  )
}

export default Favorite
