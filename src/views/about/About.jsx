import React from 'react'

// Components
import Navigation from '../../components/navigation/Navigation.jsx';

// Styles
import './About.scss'

export default function About() {
    return (
        <section className='about'>
            <Navigation active='about' />
            <h2>Albina Cholak</h2>
            <h2>This will be all about you!</h2>
        </section>
    )
}
