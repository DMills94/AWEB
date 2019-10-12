import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import Medium from '../../assets/icons/medium.svg'

const FeatureBlogCard = props => {
    const { image, medium = false, title = 'Blog Card', tags = 'TAG', url = false } = props.content

    return url
        ? (
            <a className='blog-card' href={url} target='_blank' rel='noopener noreferrer'>
                <div
                    className='img'
                    style={{ backgroundImage: `url(${image})` }}
                />
                {medium && <img src={Medium} alt='Medium' />}
                <div className='card-content'>
                    <div className='tag small'>{tags.toUpperCase()}</div>
                    <h3>{title}</h3>
                </div>
            </a>
        )
        : (
            <Link className='blog-card' to={`/blogs/${title.split(' ').join('_')}`}>
                <div
                    className='img'
                    style={{ backgroundImage: `url(${image})` }}
                />
                {medium && <img src={Medium} alt='Medium' />}
                <div className='card-content'>
                    <div className='tag small'>{tags.toUpperCase()}</div>
                    <h3>{title}</h3>
                </div>
            </Link>
        )
}

export default FeatureBlogCard