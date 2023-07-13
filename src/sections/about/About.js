import React from 'react'
import './about.css'
import AboutImage from '../../assets/business.jpeg'
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
      <h2>About Us</h2>
      <div className="about__cards">
        {data.map(item =>(
          <Card key ={item.id} className="about__card">
            <span className="about__card-icon">{item.icon}</span>
            <h5>{item.title}</h5>
            <small>{item.desc}</small>

          </Card>
        )) }
      </div>
        <p>lorem ipsum defdklkkkktglrkkvkfkvkfvfkkvlkflkvkgfbmgbgmbgmmkgfkklfkkfmkmdbkgbkgmkmbkbkgmfkmbkgfkmfmbmgmb  mgkgmkmbkvmkvkm bkmgcvkmg bmcmkgmkgbmkg</p>
        <p>lorem ipsum defdklkkkktglrkkvkfkvkfvfkkvlkflkvkgfbmgbgmbgmmkgfkklfkkfmkmdbkgbkgmkmbkbkgmfkmbkgfkmfmbmgmb  mgkgmkmbkvmkvkm bkmgcvkmg bmcmkgmkgbmkg</p>

      
    </div>
  </div>
</section>
  )
}

export default About