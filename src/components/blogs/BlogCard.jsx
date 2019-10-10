import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = props => {
    const { image, title = 'Blog Card', tags = 'TAG' } = props.content
    return (
        <div className='blog-card'>
            <img
                className='img'
                src={image}
                alt='Blog image'
            />
            <div className='card-content'>
                <div className='tag small'>{tags}</div>
                <Link to={`/blogs/${title.split(' ').join('_')}`}><h3>{title}</h3></Link>
            </div>
        </div>
    )
}

export default BlogCard