import React from 'react'

// Components
import StyledLink from '../../components/links/Links.jsx'

// Assets
import aboutPortrait from '../../assets/images/about-portrait.jpg'
import abstract from '../../assets/icons/abstract.svg'
import insta1 from '../../assets/images/insta1.jpg'
import insta2 from '../../assets/images/insta2.jpg'
import insta3 from '../../assets/images/insta3.jpg'
import insta4 from '../../assets/images/insta4.jpg'
import linkedIn from '../../assets/icons/linkedin-blue.svg'
import miro from '../../assets/icons/miro.svg'
import overflow from '../../assets/icons/overflow.svg'
import sketch from '../../assets/icons/sketch.svg'

// Styles
import './About.scss'

const valuesItems = [
    {
        icon: '🙌',
        title: 'Collaboration',
        text: 'I love effective co-creation with my team and our customers utilising creative design methods.'
    },
    {
        icon: '⚡️',
        title: 'Empowering',
        text: 'Growing other designers,  educating stakeholders or giving talks — my passion is to share knowledge.'
    },
    {
        icon: '👶',
        title: 'Simplification',
        text: 'I believe in the power of good teamwork and right stakeholder engagement'
    },
    {
        icon: '💛',
        title: 'Kindness',
        text: 'Smile and positive attidude the only way to deliver amazing projects.'
    }
]

// In Text use \n to indicate a new line
const growthItems = [
    {
        title: 'Design process & strategy',
        text: 'Building a culture of innovation in Agile product development.\nConsistent design process that puts customer at the centre.',
        href: '/about',
        linkText: 'Request a consultation'
    },
    {
        title: 'Product design (UX/UI)',
        text: 'Solve business problems and translate it to a beautiful digital solution that customers love.',
        href: '/about',
        linkText: 'Request product design'
    },
    {
        title: 'UX research',
        text: 'Explicitely documented scenarios customer segmentscost-benefit analyses design process',
        href: '/about',
        linkText: 'Request service design'
    },
    {
        title: 'Service design',
        text: 'Solve business problems and translate it to a beautiful digital solution that customers love.',
        href: '/about',
        linkText: 'Hire me to run a workshop'
    },
    {
        title: 'Design management',
        text: 'Growing designers\nFostering a culture of innovation',
        href: '/about',
        linkText: 'Get a private consultation'
    },
    {
        title: 'Talks & workshops',
        text: 'Solve business problems and translate it to a beautiful digital solution that customers love.',
        href: '/about',
        linkText: 'Hire me to give a talk'
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
                            Hello 😉<br />
                            I'm Albina Cholak,<br />
                            a Lead Product Designer.
                        </h2>
                        <p>
                        I’m driven by business outcomes, in love with technical possibilities and empowered with the best design tools & methods to create experinces people love ❤️<br />
                        <br />
                        Currently at Octopus Labs, London</p>
                        <div className='flex'>
                            <a
                                className='btn blue'
                                download
                                href=''
                                style={{ width: '205px' }}
                            >
                                Download resume
                            </a>
                            <a
                                className='btn sky icon'
                                href='https://www.linkedin.com/in/cholak/'
                                rel='noopener noreferrer'
                                style={{ width: '155px' }}
                                target='_blank'
                            >
                                <img src={linkedIn} alt=''/>
                                Connect
                            </a>
                        </div>
                    </div>
                    <img className='portrait' src={aboutPortrait} alt='' />
                </div>

                <div className='values'>
                    <h2 className='title'>... and I'm driven by</h2>
                    <div className='items-wrap flex wrap'>
                        {valuesItems.map((item, i) => {
                            return (
                                <div className='item' key={i}>
                                    <p className='emoji'>{item.icon}</p>
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
                                    <StyledLink
                                        href={item.href}
                                        text={item.linkText}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='help flex column centre'>
                    <h3>Need my help?</h3>
                    <a
                        className='btn white'
                        href='/about'
                        style={{ width: '197px'}}
                    >Request consultation</a>
                </div>

                <div className='feeds flex'>
                    <div className='feed-item flex column'>
                        <p className='sub-title'>Medium</p>
                        <p>I share my knowledge on my Medium blog</p>
                    </div>
                    <div className='feed-item flex column'>
                        <p className='sub-title'>Telegram</p>
                        <p>I share useful resources & materials in my Telegram channel.</p>
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

                <div className='design flex column centre'>
                    <h3>I'm powered by the best design tools</h3>
                    <div className='items-wrap flex'>
                        <img src={abstract} alt='Abstract'/>
                        <img src={sketch} alt='Sketch'/>
                        <img src={overflow} alt='Overflow'/>
                        <img src={miro} alt='Miro'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
