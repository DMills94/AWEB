import React from 'react'

// Assets
import portrait from '../../assets/images/portrait.png'

// Styles
import './Homepage.scss'

const Homepage = () => {
    return (
        <section className='homepage'>
            <div className='container content-wrap flex'>
                <div className='right'>
                    <img src={portrait} alt=''/>
                </div>

                <div className='left'>
                    <h1>
                        Hello 👋<br />
                        I'm Albina Cholak,
                    </h1>
                    <p>
                        a Lead Product Designer<br />
                        at Octopus Labs London, I craft <a href=''>digital</a><br />
                        and <a href=''>phyiscal</a> experiences, give <a href=''>talks</a><br />
                        and share design insights in my <a href=''>blog</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Homepage