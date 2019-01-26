import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return(
    <ul className="nav justify-content-center bg-light">
      <li className ="nav-item">
        <Link to='/home' className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/add' className="nav-link">New Post</Link> 
      </li>
    </ul>
  )
}

export default Menu