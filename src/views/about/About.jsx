import React from 'react'

// Assets
import shape from '../../assets/icons/2rectangles.svg'
import aboutHeader from '../../assets/images/about-header.png'

// Styles
import './About.scss'

 const About = () => {
    return (
        <section className='about flex column align-v'>
            <div style={{ position: 'relative' }}>
                <h2 >Albina Cholak</h2>
                <img src={shape} className='name-icon' />
            </div>
            <h2 className='subtitle'>I believe in the transformative power of design, to bring new value to people and grow businesses.</h2>
            <div style={{ position: 'relative' }}>
                <img src={aboutHeader} className='about-header' alt=''/>
                <img src={aboutHeader} className='about-header blur' alt=''/>
            </div>
            <h2 style={{ ali: 'flex-start' }}>What I can do for you</h2>
            <div className="what-i-do">
                <div className="box flex align-v">
                    <div className="box-header">
                        <h2>Vision & strategy</h2>
                        <p>Helping to shape the vision and break it down to an actionable set of steps.</p>
                    </div>
                    <div className="box-text">
                        <p>Framing</p>
                        <p>Explorative research</p>
                        <p>Context analyses</p>
                    </div>
                </div>
                <div className="box flex align-v">
                    <div className="box-header">
                        <h2>UX & Service design</h2>
                        <p>Identifying the problem and finding the best way of solving it.</p>
                    </div>
                    <div className="box-text">
                        <p>User Segments</p>
                        <p>User journeys / blueprints</p>
                        <p>Wireframes / Prototyping</p>
                        <p>User testing and reporting</p>
                    </div>
                </div>
                <div className="box flex align-v">
                    <div className="box-header">
                        <h2>Design education</h2>
                        <p>Sharing my experience, to help designers grow and assist companies to improve their design processes.</p>
                    </div>
                    <div className="box-text">
                        <p>Workshops</p>
                        <p>Talks</p>
                        <p>Mentorship</p>
                    </div>
                </div>
                <div className="box flex align-v">
                    <div className="box-header">
                        <h2>UI Design</h2>
                        <p>Visual language, look and feel</p>
                    </div>
                    <div className="box-text">
                        <p>Visual</p>
                        <p>Interaction</p>
                        <p>Native</p>
                        <p>Design systems</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About