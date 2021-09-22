import '../NewsCards/style.css'

function FavoriteCards() {

  let favItems = JSON.parse(localStorage.getItem('favorites'))

  return (
    <div className="news-cards">
      {!favItems ? <h5>You don't have favorite news!</h5> : favItems.map(({author, content, date, imageUrl, title, readMoreUrl}, i) => (
        <div key={i} id={i} name={title.split(' ').join('_')} className="news-card">
        <h4 className="card-title">{title}</h4>
        <div className="card-img">
          <img src={imageUrl} alt={title} />
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

export default FavoriteCards
