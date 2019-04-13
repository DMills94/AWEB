import React from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import smallLogo from '../../assets/icons/small-logo.svg'

//Styles
import './Header.scss'

const Header = props => {
    return (
        <div className="header flex align-v">
            <NavLink to='/' activeClassName='small-logo-wrap'>
                <img className='small-logo' src={smallLogo}></img>
            </NavLink>
            <p className='talk' onClick={props.toggleContact}>
                LET'S TALK
            </p>
        </div>
    )
}

export default Header