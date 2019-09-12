import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import thumbprint from '../../assets/icons/thumbprint.svg'
import telegram from '../../assets/icons/telegram-grey.svg';
import instagram from '../../assets/icons/instagram-grey.svg'
import paper from '../../assets/icons/paper.svg'

// Styles
import './LinkTreeLinks.scss'

const LinkTreeLinks = () => {
    return (
        <div className='link-tree-wrap'>
            <Link to='/about' className='link-tree-item flex align-v'>
                <img src={thumbprint} alt=''/>
                <p className='caption'>ABOUT ME / WHAT I DO</p>
            </Link>
            <a href='https://t.me/MindMeanDesign' target='_blank' rel='noopener noreferrer' className='link-tree-item flex align-v'>
                <img src={telegram} alt=''/>
                <div className='flex column'>
                    <p className='caption'>@MINDMEANDESIGN</p>
                    <p className='small grey'>Telegram channel on design</p>
                </div>
            </a>
            <a href='https://www.instagram.com/mindmeandsgn/' target='_blank' rel='noopener noreferrer' className='link-tree-item flex align-v'>
                <img src={instagram} alt=''/>
                <div className='flex column'>
                    <p className='caption'>@MINDMEANDSGN</p>
                    <p className='small grey'>Instragram page for design</p>
                </div>
            </a>
            <a href='https://medium.com/@albinacholak' target='_blank' rel='noopener noreferrer' className='link-tree-item flex align-v'>
                <img src={paper } alt=''/>
                <div className='flex column'>
                    <p className='caption'>MY MEDIUM BLOG</p>
                    <p className="small grey">Design stories and cases</p>
                </div>
            </a>
        </div>
    )
}

export default LinkTreeLinks