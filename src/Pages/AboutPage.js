import React from 'react'
import FooterContent from 'Containers/FooterContent'
import AboutContent from 'Containers/AboutContent'
import HamBurgerNav from 'Components/HamburgerNav/HamBurgerNav.js'
import '../Styles/styles.css'


export default function AboutPage() {
    return (
        <div className='home-wrapper' >
            <HamBurgerNav />
  
            <main>
                <AboutContent />
             
                <FooterContent />   
            </main>
      
        </div>
    )
}
