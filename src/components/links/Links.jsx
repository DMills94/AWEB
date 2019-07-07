import React from 'react'
import PropTypes from 'prop-types'

// Assets
import arrowRight from '../../assets/icons/arrow-right.svg'

// Styles
import './Links.scss'

const StyledLink = props => {
    return (
        <a
            className='link'
            href={props.href}
            target={props.newTab ? '_blank' : ''}
            rel={props.newTab ? 'noopener noreferrer' : ''}
        >
            <p>{props.text}</p>
            <img src={arrowRight} alt="->"/>
        </a>
    )
}

StyledLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    newTab: PropTypes.bool
}

StyledLink.defaultProps = {
    newTab: false
}

export default StyledLink