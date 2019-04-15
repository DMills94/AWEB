import React from 'react'
import { NavLink } from 'react-router-dom'

import './404.scss'

export default function Page404() {
    return (
        <section className='page404 flex column center'>
            <h1>This page doesn't exist!</h1>
            <h1>😭</h1>
            <NavLink to='/'>Let's go to the homepage</NavLink>
        </section>
    )
}
