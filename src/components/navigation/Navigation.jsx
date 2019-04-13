import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.scss'

const Navigation = (props) => {
    return (
        <nav className='navigation flex align-v'>
            <div className={props.active === 'about' ? 'nav-item flex center active' : 'nav-item flex center'}>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className={props.active === 'portfolio' ? 'nav-item flex center active' : 'nav-item flex center'}>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </div>
            <div className={props.active === 'articles' ? 'nav-item flex center active' : 'nav-item flex center'}>
                <NavLink to='/articles'>Articles</NavLink>
            </div>
        </nav>
    )
}

export default Navigation