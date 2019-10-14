import React from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { formatForUrl } from '../../helpers/utility'

// Assets
import Medium from '../../assets/icons/medium.svg'

const BlogCard = props => {
    const { image, medium = false, title = 'Blog Card', tags = 'TAG', url = false } = props.content

    return url
        ? (
            <div className='blog-card'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
                <img
                    className='img'
                    src={image}
                    alt='Blog image'
                />
                {medium && <img className='medium' src={Medium} alt='Medium' />}
            </a>
            <div className='card-content'>
                <div className='tag small'>{tags}</div>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    <h3>{title}</h3>
                </a>
            </div>
            </div>
        )
        : (
            <div className='blog-card'>
            <Link to={`/blogs/${formatForUrl(title)}`}>
                <img
                    className='img'
                    src={image}
                    alt='Blog image'
                />
                {medium && <img className='medium' src={Medium} alt='Medium' />}
            </Link>
            <div className='card-content'>
                <div className='tag small'>{tags}</div>
                <Link to={`/blogs/${formatForUrl(title)}`}>
                    <h3>{title}</h3>
                </Link>
            </div>
            </div>
        )
}

export default BlogCard