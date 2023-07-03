
import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import FAQS from './sections/faqs/FAQS';
import Footer from './sections/footer/Footer';
import  Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';
import FloatingNav from './sections/floating-nav/FloatingNav';












function App() {
  return (
    
   <main>
    
    <Navbar />
    < Header />
    < About />
    <Contact />
    <FAQS />
    <Footer />
    <Portfolio />
    <Services />
    <Testimonials />
    <FloatingNav />

   </main>
  );
}

export default App;
