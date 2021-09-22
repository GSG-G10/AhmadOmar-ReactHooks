import React, {useContext} from 'react'
import './style.css';
import {ReactComponent as FavIcon} from '../../assets/favorite.svg';
import { FavoriteContext } from '../../Context/FavoriteContext';

function NewsCards({newsData}) {
  const {favoriteCard, SetFavoriteCard} = useContext(FavoriteContext)
  const handleAddToFav = (i) => {
      SetFavoriteCard([...favoriteCard, newsData[i]])
      localStorage.setItem('favorites', JSON.stringify([...favoriteCard, newsData[i]]))
  }
  return (
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
  )
}

export default NewsCards
