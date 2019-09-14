import React from 'react'
import PropTypes from 'prop-types'

import './IconBoxes.scss'

const IconBoxes = props => {
    return (
        <div className='icon-box-wrap flex wrap'>
            {props.boxes.map((box, i) => {
                return (
                    <div className='item' key={i}>
                        {box.icon && <p className='emoji'>{box.icon}</p>}
                        {box.title && <p className='sub-title'>{box.title}</p>}
                        {box.text && <p className='small'>{box.text}</p>}
                    </div>
                )
            })}
        </div>
    )
}

IconBoxes.propTypes = {
    boxes: PropTypes.array.isRequired
}

export default IconBoxes