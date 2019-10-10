import React from 'react'

// Assets
import Insta3 from '../../../assets/images/instagram/insta3.jpg'

const constants = {
    image: Insta3,
    title: 'A random test blog',
    tags: 'Process'
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