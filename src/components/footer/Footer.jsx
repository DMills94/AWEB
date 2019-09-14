import React from 'react'

// Styles
import './Footer.scss'

// Assets
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import telegram from '../../assets/icons/telegram.svg'
import linkedIn from '../../assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <div className='footer flex align-v'>
            <div className='contact-wrap flex column align-h'>
                <p className='email'>hello@albinacholak.com</p>
                <div className='social-media-wrap flex'>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/cholak/'><img src={linkedIn} alt='LinkedIn'/></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href='https://t.me/MindMeanDesign'><img src={telegram} alt='Telegram'/></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/hello'><img src={facebook} alt='Facebook'/></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/mindmeandsgn/'><img src={instagram} alt='Instagram'/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer