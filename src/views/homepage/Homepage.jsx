import React, { useEffect } from 'react'

// Assets
import portrait from '../../assets/images/portrait-3x.png'

// Styles
import './Homepage.scss'

const Homepage = () => {
    return (
        <section className='homepage flex'>
            <div className='content flex column centre'>
                <div className='content-text'>
                    <h1>Hello 👋</h1>
                    <h1>I'm Albina Cholak,</h1>
                    <h1>and I help businesses to grow</h1>
                    <p>
                        as a Lead Product Designer, I craft digital and physical experiences, give talks and share design insights in my <a href='https://medium.com/@albinacholak' target='_blank' rel='noopener noreferrer'>blog</a>.
                    </p>
                </div>
            </div>

            <img className='portrait' src={portrait} alt=''/>
        </section>
    )
}

export default Homepage