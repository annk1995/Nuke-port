import React from 'react'
import HeaderImage from '../../assets/software.jpg'
const Header = () => {
  return (
  <header id="header">
 <div className="container header__container">
  <div className="header__image">
    <img src={HeaderImage}alt="Header Potrait" />
  </div>
  <h3>Nuke Softwares Kenya</h3>
  <p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
  <div className="header__cta">
    <a href="#contact">Let's Talk</a>
    <a href="#portfolio">Our Work</a>


  </div>
  <div className="header__socials">
    {}
  </div>
 </div>
  </header>
  )
}

export default Header