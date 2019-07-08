import React from 'react'
import PropTypes from 'prop-types'

// Components
import StyledLink from '../links/Links.jsx'

// Styles
import './PortfolioCards.scss'

// TYPE OPTIONS: wide, large, small

const PortfolioCard = props => {
    const smallBg = props.type === 'small' && props.image

    return (
        <div className={`portfolio-card ${props.type}`}>
            {smallBg && 
                <div
                    className='bg-image'
                    style={smallBg ? { backgroundImage: `url(${props.image})` } : {}}
                />
            }
            <div className='text-wrap'>
                <p className='tags tiny'>{props.year}<span className='divide'></span>{props.tag.toUpperCase()}</p>
                <h2 className='bold'>{props.title}</h2>
                <p className='text small'>{props.text}</p>
                {props.link
                    ? (
                        <StyledLink
                            hoverColour={smallBg ? 'blue' : ''}
                            href={props.href}
                            text={props.linkText}
                            newTab={props.linkNewTab}
                            whiteArrow={smallBg}
                        />
                    )
                    : (
                        <p className='grey' style={{ padding: '13px 0', marginBottom: '30px' }}>Case study coming soon</p>
                    )
                }
            </div>

            {props.image && !smallBg &&
                <div className='image-wrap'>
                    <img className='image' src={props.image} alt=''/>
                </div>
            }
        </div>
    )
}

PortfolioCard.propTypes = {
    image: PropTypes.image,
    href: PropTypes.string,
    link: PropTypes.bool,
    linkText: PropTypes.string,
    linkNewTab: PropTypes.bool,
    tag: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

PortfolioCard.defaultProps = {
    image: false,
    link: true,
    linkNewTab: false,
    year: '2019'
}

export default PortfolioCard