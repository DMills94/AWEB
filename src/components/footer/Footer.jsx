import React from 'react'

//Styles
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer flex align-v'>
            <div className='contact-wrap flex column align-h'>
                <p className='brown'>I'm social</p>
                <div className='social-media-wrap flex'>
                    <a target='_blank' rel='noopener' href='https://www.linkedin.com/in/cholak/'>LinkedIn</a>
                    <a target='_blank' rel='noopener' href='https://t.me/MindMeanDesign'>Telegram</a>
                    <a target='_blank' rel='noopener' href='https://www.facebook.com/albina.cholak'>Facebook</a>
                    <a target='_blank' rel='noopener' href='https://www.instagram.com/albina.cholak/'>Instagram</a>
                </div>
            </div>
            <a className='email' href="mailto:hello@albinacholak.com">hello@albinacholak.com</a>
        </div>
    )
}

export default Footer