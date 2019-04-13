import React from 'react'
import { NavLink } from 'react-router-dom'

import './404.scss'

export default function Page404() {
    return (
        <section className='page404 flex column center'>
            <h1>This page doesn't exist!</h1>
            <NavLink to='/'>Return to the homepage</NavLink>
        </section>
    )
}
