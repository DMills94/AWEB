import React from 'react'

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
                        as a Lead Product Designer, I craft <a href=''>digital</a> and <a href=''>physical</a> experiences, give <a href=''>talks</a> and share design insights in my <a href=''>blog</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Homepage