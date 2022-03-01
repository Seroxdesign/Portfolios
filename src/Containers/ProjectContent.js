import React from 'react'
import '../Styles/styles.css'

export default function ProjectContent() {
    return (
        <div className='container-content project-content-container'>
            <h2 className='content-header'>My recent projects</h2>
            
            <div className='project-grid'>

                <a className='project-display' href={"https://portfolioio-d9a91.web.app/"} target={"_blank"} style={{backgroundImage: `url('https://i.imgur.com/tz9ZaIh.png')`}}>
                    
                </a>

                <a className='project-display project-2' href={"https://app.ricochet.exchange/invest/rex-market"} target={"_blank"} style={{backgroundImage: 'url("https://i.imgur.com/PSYZ9GN.jpg")'}}>
                   
                </a>

                <a className='project-display project-3' href={"https://www.amysky99.com"} target={"_blank"} style={{backgroundImage: 'url("https://i.imgur.com/DPls52e.png")'}}>

                </a>

                <a className='project-display project-3' href={"https://www.cannanodes.com"} target={"_blank"} style={{backgroundImage: 'url("https://i.imgur.com/x9D5e1D.jpg")'}}>

                </a>
            </div>
        </div>
    )
}
