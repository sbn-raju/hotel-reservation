import React from 'react'
import LuxuryHeroHeader from './sections/Header'
import HeroSection from './sections/Testing'
import PropertiesSection from './sections/Properties'
import GallerySection from './sections/Gallery'
import TestimonialsSection from './sections/Testimonials'
import FAQSection from './sections/Faqs'
import FooterSection from './sections/Footer'


const App = () => {
  return (
    <>
       <LuxuryHeroHeader/>
       <HeroSection/>
       <PropertiesSection/>
       <GallerySection/>
       <TestimonialsSection/>
       <FAQSection/>
       <FooterSection/>
       </>
  )
}

export default App