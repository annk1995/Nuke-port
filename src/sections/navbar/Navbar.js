import React from 'react'
import { IoMdColorPalette } from 'react-icons/io'
import Logo from '../../assets/nuke.png'
import data from './data'
import './navbar.css'
const Navbar = () => {
  return (
  <nav>
    <div className="container nav__container">
      <a href="index.html" className="nav__logo">
        <img src={Logo} alt="" />
      </a>
      <ul  className="nav__menu">
        {
          data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
        }
        <button id='theme__icon'><IoMdColorPalette /></button>
      </ul>
    </div>

  </nav>
  )
}

export default Navbar