import React from 'react'

// Assets
import Insta3 from '../../../assets/images/instagram/insta3.jpg'

const constants = {
    featured: true,
    image: Insta3,
    medium: true,
    title: 'A random test blog',
    tags: 'Process',
    url: 'https://google.co.uk'
}

const Blog = () =>
    <section className='blog'>
        <header>
            <div
                className='header-img'
                style={{ backgroundImage: `url(${Insta3})` }}
            />
            <div className="tags">{constants.tags}</div>
            <h1>{constants.title}</h1>
        </header>
    </section>

export default {
    Blog,
    preview: constants
}