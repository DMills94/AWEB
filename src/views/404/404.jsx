import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Page404() {
    return (
        <div>
            <h4>This page doesn't exist! <NavLink to='/'>Return to the homepage</NavLink></h4>
        </div>
    )
}
