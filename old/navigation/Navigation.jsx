import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.scss'

const Navigation = (props) => {
    return (
        <nav className='navigation flex align-v'>
            <NavLink
                activeClassName='active'
                className='nav-link'
                to='/about'
            >
                About
            </NavLink>
            <NavLink
                activeClassName='active'
                className='nav-link'
                to='/portfolio'
                exact
            >
                Portfolio
            </NavLink>
            <NavLink
                activeClassName='active'
                className='nav-link'
                to='/articles'
                exact
            >
                Articles
            </NavLink>
        </nav>
    )
}

export default Navigation