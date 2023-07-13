import React from 'react'
import './about.css'
import AboutImage from '../../assets/business.jpeg'

const About = () => {
  return (
<section id="about">
  <div className="about__container">
    <div className="about__left">
      <div className="about__potrait">
        <img src={AboutImage} alt="About Image" />
      </div>
    </div>
    <div className="about__right">
      <h2>About Us</h2>
      <div className="about__cards">
        <p>lorem ipsum defdklkkkktglrkkvkfkvkfvfkkvlkflkvkgfbmgbgmbgmmkgfkklfkkfmkmdbkgbkgmkmbkbkgmfkmbkgfkmfmbmgmb  mgkgmkmbkvmkvkm bkmgcvkmg bmcmkgmkgbmkg</p>
        <p>lorem ipsum defdklkkkktglrkkvkfkvkfvfkkvlkflkvkgfbmgbgmbgmmkgfkklfkkfmkmdbkgbkgmkmbkbkgmfkmbkgfkmfmbmgmb  mgkgmkmbkvmkvkm bkmgcvkmg bmcmkgmkgbmkg</p>

      </div>
    </div>
  </div>
</section>
  )
}

export default About