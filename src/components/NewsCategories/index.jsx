import React from 'react'
import './style.css';
function NewsCategories({categoryValue, setCategoryValue}) {
  const newsCategory = ['all', 'national', 'business', 'sportsm', 'world', 'politics', 'technology', 'startup', 'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile'];

  const handleChange = (e) => {
    setCategoryValue(e.target.value)
  }
  return (
    <div className="news-categories">
      <select value={categoryValue} onChange={handleChange}>
        {newsCategory.map(category => <option key={Math.random()*20} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

export default NewsCategories
