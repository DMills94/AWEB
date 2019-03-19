import React from 'react'

//Assets
import mmdLogo from '../../assets/icons/mmd-logo.svg'

//Styles
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer flex'>
            <div className='contact-wrap flex column align-h'>
                <p className='brown'>I'm social</p>
                <div className='social-media-wrap flex'>
                    <a href='https://linkedin.com'>LinkedIn</a>
                    <a href='https://twitter.com'>Twitter</a>
                    <a href='https://facebook.com'>Facebook</a>
                    <a href='https://instagram.com'>Instagram</a>
                </div>
            </div>
            <div className='mmd-wrap flex column'>
                <img className='mmd-logo' src={mmdLogo} alt='Mind Mean Design logo'/>
                <p className='txt-white'>My design channel:</p>
                <a className='txt-white' href="/"><h4>@MindMeanDesign</h4></a>
            </div>
        </div>
    )
}

export default Footer