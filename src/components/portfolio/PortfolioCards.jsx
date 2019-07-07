import React from 'react'
import PropTypes from 'prop-types'

// Components
import StyledLink from '../links/Links.jsx'

// Styles
import './PortfolioCards.scss'

// TYPE OPTIONS: wide, large, small

const PortfolioCard = props => {
    return (
        <div className={`portfolio-card ${props.type}`}>
            <p className='tags tiny'>{props.year}<span className='divide'></span>{props.tag.toUpperCase()}</p>
            <h3 className='bold'>{props.title}</h3>
            <p className='text small'>{props.text}</p>
            <StyledLink
                href={props.href}
                text={props.linkText}
                newTab={props.linkNewTab}
            />
        </div>
    )
}

PortfolioCard.propTypes = {
    href: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkNewTab: PropTypes.bool,
    tag: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

PortfolioCard.defaultProps = {
    linkNewTab: false,
    year: '2019'
}

export default PortfolioCard