import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Styles
import '../Inputs.scss'

const TextInput = props => {
    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(true)
    }

    const onBlur = () => {
        setFocused(false)
    }

    const clickInput = () => {
        setFocused(true)
    }

    const labelContent = props.value === ''
        ? ''
        : ' content'

    const isFocused = focused
        ? ' focus'
        : ''

    return (
        <div className='input-wrap'>
            <label
                className={'label' + labelContent + isFocused}
                onClick={() => clickInput()}
            >
                {props.label}
            </label>
            <input
                onChange={e => props.handleChange(e)}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                type={props.type}
                name={props.name}
                value={props.value}
                className={isFocused}
            />
        </div>
    )
}

TextInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
}

TextInput.defaultProps = {
    handleChange: () => {},
    label: '',
    name: '',
    type: 'text',
    value: ''
}

export default TextInput