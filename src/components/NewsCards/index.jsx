import React, {useContext, useState, useEffect} from 'react'
import './style.css';
import {ReactComponent as FavIcon} from '../../assets/favorite.svg';
import { FavoriteContext } from '../../Context/FavoriteContext';

function NewsCards({newsData}) {
  const [favAdded, setFavAdded] = useState(false)
  const [favFailed, setFavFailed] = useState(false)

  
  const {favoriteCard, SetFavoriteCard} = useContext(FavoriteContext)
  const handleAddToFav = (i) => {
    if (!favoriteCard.includes(newsData[i])) {
      SetFavoriteCard([...favoriteCard, newsData[i]])
      localStorage.setItem('favorites', JSON.stringify([...favoriteCard, newsData[i]]))
      setFavAdded(true)
    } else {
      setFavFailed(true)
    }
      
  }
  useEffect(() => {
    setTimeout(() => {
      setFavAdded(false)
      setFavFailed(false)
    }, 15000);
    
  }, [favAdded, favFailed])
  
  return (
    <>
    <div className="news-cards">
      {newsData.map(({author, content, date, imageUrl, title, readMoreUrl}, i) => (
          <div key={i} id={i} className="news-card">
              <h4 className="card-title">{title}</h4>
              <div className="card-img">
                <img src={imageUrl} alt={title} />
                <div className="fav-icon" onClick={() => handleAddToFav(i)}>
                  <FavIcon />
                </div>
              </div>
              <div className="card-details">
                <p>{content}</p>
                <div className="card-meta">
                  <span>{author}</span>
                  <span>{date}</span>
                  <a href={readMoreUrl} target="_blank" rel="noreferrer">Read more</a>
                </div>
              </div>
          </div>
      ))}
    </div>
    {favAdded ? <div className="added-fav-success"><h3>Added to Favourites</h3></div> : ''}
    {favFailed ? <div className="added-fav-success"><h3>This card is already added</h3></div> : ''}


    
    </>
  )
}

export default NewsCards
