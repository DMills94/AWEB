import React from 'react'

//Assets
import smallLogo from '../../assets/icons/small-logo.svg'

//Styles
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <a href='/' className='small-logo-wrap'>
                <img className='small-logo' src={smallLogo}></img>
            </a>
        </div>
    )
}

export default Header