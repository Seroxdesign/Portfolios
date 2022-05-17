import React from 'react'
import Service from './Service'
import '../Styles/styles.css'


export default function Services() {
    return (
        <div className='service-container'>
            <Service service_title={"Web Scraping"} feat1={"Save time by automating your research"} feat2={"Customizable to your needs."} feat3={"Built with modern tech"} btn_cta={"Contact me"} link={"https://form.jotform.com/220207089713149"}/>
            <Service service_title={"Custom Website"}  feat1={"Responsive website design."} feat2={"Customizable with many features."} feat3={"Decentralized hosting, censorship resistant"} link={"https://form.jotform.com/220207089713149"} style={"main-card"} btn_style={"main-btn-service"} main_title={"main-title-service"}  btn_cta={"Order now"}/>   
            <Service service_title={"Project Management"} feat1={"Using Agile/Scrum to help bring structure to new projects"} feat2={"Research and investigation"} feat3={"Full documentation and reports for findings."} link={"https://discord.com/invite/raEGkkQ7gf"} btn_cta={"Join Discord"}/>   
        </div>
    )
}
