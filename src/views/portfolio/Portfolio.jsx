import React from 'react'

// Components
import PortfolioCard from '../../components/portfolio/PortfolioCards.jsx'

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
//     href='/portfolio'
//     linkText='click'
//     linkNewTab={false}
// />

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='container'>
            <h2>Projects I love</h2>

            <div className='portfolio-items flex wrap'>
                <PortfolioCard
                    type='large'
                    year='2019'
                    tag='Product design'
                    title='Octopus HUB'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Read case study'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='large'
                    year='2019'
                    tag='Product design'
                    title='Octopus Bob '
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Read case study'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Service and UX design'
                    title='Choice investments'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Read case study'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Web design'
                    title='[more] moebel'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Check the website'
                    linkNewTab={true}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Web design'
                    title='Born for hugs'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Check the website'
                    linkNewTab={true}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Service and UX design'
                    title='Plexal service'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Read case study'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Service and UX design'
                    title='Octopus Group'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Check the website'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='small'
                    year='2019'
                    tag='Design discovery'
                    title='Octopus Property'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Check the website'
                    linkNewTab={false}
                />
                <PortfolioCard
                    type='wide'
                    year='2019'
                    tag='Design management'
                    title='Design toolkit'
                    text='A single platform for all financial products of Octopus'
                    href='/portfolio'
                    linkText='Read case study'
                    linkNewTab={false}
                />
            </div>

            </div>
        </section>
    )
}

export default Portfolio