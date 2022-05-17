import React from 'react'
import WorkCard from './WorkCard';
import webdev from '../Data/webdev.svg'
import socialmedia from '../Data/socialmedia.svg'
import youtuber from '../Data/youtuber.svg'
import '../Styles/styles.css'

export default function WorkList() {
    return (
        <ul className='work-list'>
            <WorkCard direction={"work-item-r"} 
            title={"Software Engineer"} 
            img={webdev} 
            para={"Focused on the future of the web, specifically web3 and decentralized systems."} 
            link_title={"View More"} link={"https://www.serotonindesigns.com"} 
            link_titlecta={"Hire Me"} link_cta={"https://form.jotform.com/220207089713149"} />
            
            <WorkCard direction={"work-item"} 
            title={"Social Media Manager"} 
            img={socialmedia} 
            para={"We've developed a track record of growing social media accounts cross platforms. Grow your media presence to increase your reach and conversions."} 
            link_title={"View Accounts"} link={"https://www.amysky99.com/links"} 
            link_titlecta={"Hire Me"} link_cta={"https://form.jotform.com/220207089713149"} />
            
            <WorkCard direction={"work-item-r"} 
            title={"Youtube Creator"} 
            img={youtuber} 
            para={"Information is the key to success, that's why we are committed to sharing our processes with you, for free on Youtube."} 
            link_title={"View my channel"} link={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} 
            link_titlecta={"Subscribe"} link_cta={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} />
        </ul>
    )
}
