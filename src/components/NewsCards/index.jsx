import React from 'react'
import './style.css';
import {ReactComponent as FavIcon} from '../../assets/favorite.svg';

function NewsCards({newsData}) {
  return (
    <div className="news-cards">
      {newsData.map(({author, content, date, imageUrl, title, readMoreUrl}) => (
          <div key={Math.random()*10} className="news-card">
              <h4 className="card-title">{title}</h4>
              <div className="card-img">
                <img src={imageUrl} alt={title} />
                <div className="fav-icon">
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
