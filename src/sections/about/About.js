import React from 'react'
import './about.css'
import AboutImage from '../../assets/software.jpg'
import Card from '../../components/Card'
import data from './data'

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
      <h2 className="about__title">About Us</h2>
      <p>Here, you can get the information of He
      re, you can get the information of Hex, RGB, HSL, HSV, CMYK, XYZ, Yxy, CMY, Decimal, Decimal RGB, Binary, Hunter Lab, CIE Lab, CIE Luv color conversion values. Also, you can find Shades & Tints, Complementary, Monochromatic, Split Complementary, Triadic, Tetradic, Analogous, CMYK & RGB Percentage and HTML CSS examples of selected color code.
      Hxy, CMY, Decimal, Decimal RGB, Binary, Hunter Lab, CIE Lab, CIE Luv color conversion values. Also, you can find Shades & Tints, Complementary, Monochromatic, Split Complementary, Triadic, Tetradic, Analogous, CMYK & RGB Percentage and HTML CSS examples of selected color code.</p>
      <div className="about__cards">
        {data.map(item =>(
          <Card key ={item.id} className="about__card">
            <span className="about__card-icon">{item.icon}</span>
            <h5>{item.title}</h5>
            <small>{item.desc}</small>

          </Card>
        )) }
      </div>
        
    </div>
  </div>
</section>
  )
}

export default About