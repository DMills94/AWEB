    import React, { useEffect } from 'react'

// Components
import StyledLink from '../../components/links/Links'

// Assets
import aboutPortrait from '../../assets/images/about-portrait-3x.png'
import linkedIn from '../../assets/icons/linkedin-blue.svg'
import medium from '../../assets/icons/medium.svg'
import insta1 from '../../assets/images/insta5.jpg'
import insta2 from '../../assets/images/insta1.jpg'
import insta3 from '../../assets/images/insta2.jpg'
import insta4 from '../../assets/images/insta3.jpg'

// Styles
import './About.scss'

const About = props => {
    const valuesItems = [
        {
            icon: '🙌',
            title: 'Collaboration',
            text: 'I love effective co-creation with my team and our customers utilising creative design methods.'
        },
        {
            icon: '⚡️',
            title: 'Empowerment',
            text: 'Growing other designers,  educating stakeholders or giving talks — my passion is to share knowledge.'
        },
        {
            icon: '👶',
            title: 'Growth',
            text: 'I see design as a tool for driving business value.'
        },
        {
            icon: '💛',
            title: 'Kindness',
            text: 'Smile and positive attitude the only way to deliver amazing projects.'
        }
    ]
    
    // In Text use \n to indicate a new line
    const growthItems = [
        {
            title: 'Improving design process & mentoring ',
            text: 'Establishing bespoke design processes. Nurturing a culture of customers at the heart and innovation in Agile.  Improving design-maturity by mentoring designers and educating a wider team on human-centred design. ',
            links: [
                {linkText: 'Consultation for business', linkHref: false, linkAction: props.toggleContact},
                {linkText: 'Consultation for designers', linkHref: false, linkAction: props.toggleContact}
            ]
        },
        {
            title: 'Designing products (UX/UI) & design research',
            text: `From prototypes to UI specifications — I solve business problems and translate it to a beautiful digital solution that customers love.
Collecting and analysing research about users. Visualising data in actionable artifacts: personas, user flows, user journeys, blueprints, story & opportunity mapping, affinity diagrams.`,
            links: [
                {linkText: 'Discuss a project with me', linkAction: props.toggleContact}
            ]
        },
        {
            title: 'Facilitating workshops and giving talks',
            text: 'Facilitaition design workshops, design & feature sprint, design studio and talks at meetups and conferences. Learn fast & release with confidence.',
            links: [
                {linkText: 'Request a workshop / talk', linkAction: props.toggleContact}
            ]
        },
    ]
    
    const instaItems = [
        {
            url: 'https://www.instagram.com/p/B0lQQj9AAsE/',
            imageUrl: insta1
        },
        {
            url: 'https://www.instagram.com/p/BxO_fW3AbvJ/',
            imageUrl: insta2
        },
        {
            url: 'https://www.instagram.com/p/BxIF68bAA-g/',
            imageUrl: insta3
        },
        {
            url: 'https://www.instagram.com/p/Bw-F_4mAvtH/',
            imageUrl: insta4
        }
    ]
    
    return (
        <section className='about'>
            <div className='container'>
                <div className='intro flex wrap align-v'>
                    <img className='portrait' src={aboutPortrait} alt='' />
                    <div className='right flex column centre'>
                        <h2>Hello 😉</h2>
                        <h2>I'm Albina Cholak,</h2>
                        <h2>a Lead Product Designer.</h2>
                        <p>
                        I’m driven by business outcomes, in love with technical possibilities and empowered with the best design tools & methods to create experinces people love ❤️<br />
                        <br />
                        Currently at Octopus Labs, London</p>
                        <div className='flex'>
                            <a
                                className='btn blue'
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://drive.google.com/drive/folders/1KFpMDmawVonOZuBUEkgDtIsZSrRoO_LB'
                                
                            >
                                Download resume
                            </a>
                            <a
                                className='btn indigoPorn20 icon'
                                href='https://www.linkedin.com/in/cholak/'
                                rel='noopener noreferrer'
                                style={{ maxWidth: '155px' }}
                                target='_blank'
                            >
                                <img src={linkedIn} alt=''/>
                                Connect
                            </a>
                        </div>
                    </div>
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
                    <h2 className='title'>I help businesses and designers to grow</h2>
                    <div className='items-wrap flex wrap'>
                        {growthItems.map((item, i) => {
                            return (
                                <div className='item flex align-v column' key={i}>
                                    <h3 className='sub-title'>{item.title}</h3>
                                    <p className='text'>{item.text}</p>
                                    <div className='links-wrap flex align-v'>
                                        {item.links.map((link, i) => {
                                            return link.linkHref
                                                ? <StyledLink
                                                    href={link.linkAction}
                                                    key={i}
                                                    text={link.linkText}
                                                />
                                                :  <a className='link' key={i} onClick={link.linkAction}>
                                                    {link.linkText}
                                                </a>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='publications'>
                    <h2 className='title'>Publications</h2>
                    <h3>How to establish Service design? (in Ukrainian)</h3>
                    <StyledLink
                        hoverColour='blue'
                        href='https://telegraf.design/donesty-tsinnist-servis-dyzajnu-v-organizatsiyi-tse-vidpovidalnist-dyzajneriv/'
                        newTab={true}
                        text='Read on Telegraf.design'
                    />
                    <div className='medium'>
                        <img src={medium} alt='Medium' className='sub-title' />
                        <p style={{ marginTop: '16px' }}>I share my case studies, conference overviews and insights to my design practise</p>
                        <StyledLink
                            hoverColour='blue'
                            href='https://medium.com/@albinacholak'
                            newTab={true}
                            text='Check my Medium blog'
                        />
                    </div>
                </div>

                <div className='instagram'>
                    <h2>My Instagram</h2>
                    <a href='https://instagram.com/mindmeandsgn' target='_blank' rel='noopener noreferrer'>@MindMeanDesign</a>
                    <div className='items-wrap flex wrap'>
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
