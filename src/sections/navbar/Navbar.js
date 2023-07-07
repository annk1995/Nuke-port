import React from 'react'
import Logo from '../../assets/nuke.png'
import './navbar.css'
import data from './data'
const Navbar = () => {
  return (
  <nav>
    <div className="container nav_container">
      <a href="index.html" className="nav_logo">
        <img src={Logo} alt="" />
      </a>
      <ul>
        {
          data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
        }
        <button id='theme_icon'></button>
      </ul>
    </div>

  </nav>
  )
}

export default Navbar