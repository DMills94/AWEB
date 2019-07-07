import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './404.scss'

export default function Page404() {
    return (
        <section className='page404 flex column centre'>
            <h1>This page doesn't exist!</h1>
            <h1>Yet 😉</h1>
            <Link className='link' to='/'>For now? Back to the homepage</Link>
        </section>
    )
}
