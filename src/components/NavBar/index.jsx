import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function NavBar() {
  
  return (
      <nav className="nav-bar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/Favorite">Favorite</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar
