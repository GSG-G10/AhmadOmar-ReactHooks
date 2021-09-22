import { useState, createContext } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({children}) => {
  const [favoriteCard, SetFavoriteCard] = useState([])

  return (
    <FavoriteContext.Provider value={{favoriteCard, SetFavoriteCard}}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider;