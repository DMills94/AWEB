import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import portrait from '../../assets/images/portrait.png'

// Styles
import './Homepage.scss'

const Homepage = () => {
    return (
        <section className='homepage flex'>
            <img className='portrait' src={portrait} alt=''/>

            <div className='content flex column centre'>
                <div className='content-text'>
                    <h1>
                        Hello 👋<br />
                        I'm Albina Cholak,<br />
                        and I help businesses to grow
                    </h1>
                    <p>
                        as a Lead Product Designer, I craft digital and physical experiences, give talks and share design insights in my <a href='https://medium.com/@albinacholak' target='_blank' rel='noopener noreferrer'>blog</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Homepage