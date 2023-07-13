import React from 'react'
import HeaderImage from '../../assets/bulb.jpg'

import data from './data'
import './header.css'
const Header = () => {
  return (
  <header id="header">
    
 <div className=" header__container">
 {/* <img src={HeroImage}alt="Header Potrait" /> */}
  <div className="header__profile">
    <img src={HeaderImage}alt="Header Potrait" />
  </div>
  <h3>Nuke Softwares Kenya</h3>
  <p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
  <div className="header__cta">
    <a href="#contact" className="btn primary">Let's Talk</a>
    <a href="#portfolio" className="btn light">Our Work</a>


  </div>
  <div className="header__socials">
    {
      data.map(item => <a key={item.id}href={item.link} target="_blank" rel="noopener norefferer" >{item.icon}</a>)
    }
  </div>
 </div>
  </header>
  )
}

export default Header