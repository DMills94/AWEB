import React from 'react'
import PropTypes from 'prop-types'

// Assets
import arrowRightBlue from '../../assets/icons/arrow-right.svg'
import arrowRightWhite from '../../assets/icons/arrow-right-white.svg'

// Styles
import './Links.scss'

const StyledLink = props => {
    return (
        <a
            className={`link ${props.hoverColour}`}
            href={props.href}
            target={props.newTab ? '_blank' : ''}
            rel={props.newTab ? 'noopener noreferrer' : ''}
        >
            <p>{props.text}</p>
            <img src={props.whiteArrow ? arrowRightWhite : arrowRightBlue} alt="->"/>
        </a>
    )
}

StyledLink.propTypes = {
    hoverColour: PropTypes.string,
    href: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    text: PropTypes.string.isRequired,
    whiteArrow: PropTypes.bool
}

StyledLink.defaultProps = {
    hoverColour: '',
    newTab: false,
    whiteArrow: false
}

export default StyledLink