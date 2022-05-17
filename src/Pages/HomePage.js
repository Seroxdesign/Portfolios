import React from 'react'
import LandingContent from 'Containers/LandingContent'
import ProcessContent from 'Containers/ProcessContent'
import ServicesContent from 'Containers/ServicesContent'
import FooterContent from 'Containers/FooterContent'
import ProjectContent from 'Containers/ProjectContent'
import CopyButton from 'Components/CopyButton'
import HamBurgerNav from 'Components/HamburgerNav/HamBurgerNav.js'
import PoweredBy from 'Components/PoweredBy'
import '../Styles/styles.css'

export default function HomePage() {
    return (
        <div className='home-wrapper' >

           <HamBurgerNav />
      

            <main> 

            
            <CopyButton />
                <LandingContent />
                <PoweredBy />
                <ProcessContent />
                <ProjectContent />
                <ServicesContent />
                <FooterContent />
            </main>
        </div>
    )
}
