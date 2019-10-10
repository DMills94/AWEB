import React from 'react'
import { Link } from 'react-router-dom'

const FeatureBlogCard = props => {
    const { image, title = "Blog Card", tags = 'TAG' } = props.content
    return (
        <div className='blog-card'>
            <div
                className='img'
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='card-content'>
                <div className='tag small'>{tags.toUpperCase()}</div>
                <Link to={`/blogs/${title.split(' ').join('_')}`}><h3>{title}</h3></Link>
            </div>
        </div>
    )
}

export default FeatureBlogCard