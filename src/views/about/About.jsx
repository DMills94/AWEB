import React from 'react'

// Assets
import CV from '../../assets/icons/cv.svg'
import aboutPortrait from '../../assets/images/about-portrait.png'
import abstract from '../../assets/icons/abstract.svg'
import miro from '../../assets/icons/miro.svg'
import overflow from '../../assets/icons/overflow.svg'
import pin from '../../assets/icons/pin.svg'
import sketch from '../../assets/icons/sketch.svg'
import valuesOne from '../../assets/icons/value-number-1.svg'
import insta1 from '../../assets/images/insta1.jpg'
import insta2 from '../../assets/images/insta2.jpg'
import insta3 from '../../assets/images/insta3.jpg'
import insta4 from '../../assets/images/insta4.jpg'
// Styles
import './About.scss'

const valuesItems = [
    {
        title: 'Collaboration',
        text: 'I belive in the power of good teamwork and right stakeholder engagement'
    },
    {
        title: 'Collaboration',
        text: 'I belive in the power of good teamwork and right stakeholder engagement'
    },
    {
        title: 'Collaboration',
        text: 'I belive in the power of good teamwork and right stakeholder engagement'
    },
    {
        title: 'Collaboration',
        text: 'I belive in the power of good teamwork and right stakeholder engagement'
    }
]

const growthItems = [
    {
        title: 'Manage design processes',
        text: 'Building a culture of innovation.',
        link: 'Request a consultation'
    },
    {
        title: 'Design digital products',
        text: 'Solve business problems and translate it to a beautiful digital solution that customers love.',
        link: 'Request product design'
    },
    {
        title: 'Design services',
        text: 'Explicitely documented scenarios customer segments cost-benefit analyses design process.',
        link: 'Request service design'
    },
    {
        title: 'Facilitate workshops',
        text: 'Explicitely documented scenarios customer segmentscost-benefit analyses design process.',
        link: 'Hire me to run a workshop'
    },
    {
        title: 'Growing designers',
        text: 'Explicitely documented scenarios customer segmentscost-benefit analyses design process.',
        link: 'Get a private consultation'
    },
    {
        title: 'Public presentations',
        text: 'Solve business problems and translate it to a beautiful digital solution that customers love.',
        link: 'Hire me to give a talk'
    },
]

const instaItems = [
    {
        url: 'https://www.instagram.com/p/BxO_fW3AbvJ/',
        imageUrl: insta1
    },
    {
        url: 'https://www.instagram.com/p/BxIF68bAA-g/',
        imageUrl: insta2
    },
    {
        url: 'https://www.instagram.com/p/Bw-F_4mAvtH/',
        imageUrl: insta3
    },
    {
        url: 'https://www.instagram.com/p/BwFEgMuAwKr/',
        imageUrl: insta4
    }
]

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='intro flex align-v'>
                    <div className='right'>
                        <h2>
                            Hello 😉
                            <br />
                            <span className='bold'>
                                I'm Albina Cholak,
                                <br />a Lead Product Designer.
                            </span>
                        </h2>
                        <p>
                            I’m driven by business outcomes, in love
                            <br />
                            with technical possibilities and empowered
                            <br />
                            with design tools & methods.
                        </p>
                        <p>Currently at Octopus Labs.</p>
                        <button className='btn resume dis-fc'>
                            <img src={CV} alt='' />
                            Request resume
                        </button>
                    </div>
                    <div className='left'>
                        <img src={aboutPortrait} alt='' />
                    </div>
                </div>

                <div className='values'>
                    <h2 className='title'>My Values</h2>
                    <div className='items-wrap flex wrap'>
                        {valuesItems.map((item, i) => {
                            return (
                                <div className='item' key={i}>
                                    <img src={valuesOne} alt=''/>
                                    <p className='sub-title'>{item.title}</p>
                                    <p className='small'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='growth'>
                    <h2 className='title'>How I help grow businesses</h2>
                    <div className='items-wrap flex wrap'>
                        {growthItems.map((item, i) => {
                            return (
                                <div className='item flex column' key={i}>
                                    <h3 className='sub-title'>{item.title}</h3>
                                    <p className='text'>{item.text}</p>
                                    <div className='link flex align-v'>
                                        <img src={pin} alt=''/>
                                        <p>{item.link}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='design flex column centre'>
                    <h3>I'm powered by the best design tools</h3>
                    <div className='items-wrap flex'>
                        <img src={abstract} alt='Abstract'/>
                        <img src={sketch} alt='Sketch'/>
                        <img src={overflow} alt='Overflow'/>
                        <img src={miro} alt='Miro'/>
                    </div>
                </div>

                <div className='instagram'>
                    <h2>My Instagram</h2>
                    <a href='https://instagram.com/mindmeandsgn' target='_blank' rel='noopener noreferrer'>@MindMeanDesign</a>
                    <div className='items-wrap flex'>
                        {instaItems.map((image, i) => {
                            return <a href={image.url} target='_blank' rel='noopener noreferrer' key={i}><img src={image.imageUrl} alt={`Instagram${i}`}/></a>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
