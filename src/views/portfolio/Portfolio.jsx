import React, { useEffect } from 'react'

// Components
import PortfolioCard from '../../components/portfolio/PortfolioCards.jsx'

// Assets
import Hub from '../../assets/images/portfolio/hub.png'
import Bob from '../../assets/images/portfolio/bob.png'
import Choice from '../../assets/images/portfolio/choice.png'
import Moebel from '../../assets/images/portfolio/moebel.png'
import BornForHugs from '../../assets/images/portfolio/born-for-hugs.png'
import Toolkit from '../../assets/images/portfolio/toolkit.png'

// Styles
import './Portfolio.scss'

// TEMPLATE COMPONENT
// TYPE OPTIONS: wide, large, small
//
// <PortfolioCard
//     type='wide'
//     year='2019'
//     tag='tag'
//     title='title'
//     text='text'
//     href='url'
//     link={true/false}
//     linkText='click'
//     linkNewTab={false}
//     image={imageComponent}
// />

const Portfolio = () => {
    // Scroll to top on load
    useEffect(() => window.scrollTo(0, 0))

    return (
        <section className='portfolio'>
            <div className='container'>
            <h2 className='title'>Projects I love</h2>

            <div className='portfolio-items flex wrap'>
                <PortfolioCard
                    type='large'
                    year='2019'
                    tag='Product design'
                    title='Octopus HUB'
                    text='The first digital platform to cross-sell all Octopus products.'
                    link={false}
                    image={Hub}
                />
                <PortfolioCard
                    type='large'
                    year='2019'
                    tag='Product design'
                    title='Octopus Bob '
                    text='Enterprise UX for property loan management (internal tool)'
                    link={false}
                    image={Bob}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Service and UX design'
                    title='Choice'
                    text='Reimagining P2P investment product at scale.'
                    link={false}
                    image={Choice}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Web design'
                    title='[more] moebel'
                    text='An innovative furniture catalogue for austenitic brand Germany'
                    href='https://www.more-moebel.de/en'
                    linkText='Check live website'
                    linkNewTab={true}
                    image={Moebel}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Web design'
                    title='Born for hugs'
                    text='Responsive UX/UI design for an award-winning campaign for Huggies'
                    href='https://www.behance.net/gallery/46609921/Born-for-Hugs'
                    linkText='Check Behance case study'
                    linkNewTab={true}
                    image={BornForHugs}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Service and UX design'
                    title='Plexal service'
                    text='Service and ecosystem design for the largest business incubator in Europe.'
                    link={false}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Service and UX design'
                    title='Octopus Group'
                    text='A single platform for all financial products of Octopus'
                    href='https://medium.com/octopus-labs-london/ux-ui-redesign-case-study-bf7d34ed00fb'
                    linkText='Read the case study on Medium'
                    linkNewTab={true}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Design discovery'
                    title='Octopus Property'
                    text='A single platform for all financial products of Octopus'
                    href='https://miro.com/app/board/o9J_kyLKTBg=/'
                    linkText='Check the process on Miro'
                    linkNewTab={true}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Design management'
                    title='Design toolkit'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Checkout my toolkit'
                    linkNewTab={true}
                    image={Toolkit}
                />
            </div>

            </div>
        </section>
    )
}

export default Portfolio