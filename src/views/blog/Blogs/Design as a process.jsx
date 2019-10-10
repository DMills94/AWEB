import React from 'react'

// Assets
import Insta2 from '../../../assets/images/instagram/insta2.jpg'
import Bitmap from '../../../assets/images/blogs/design-as-a-process/Bitmap.png'

const constants = {
    image: Insta2,
    title: 'Design as a process',
    tags: 'Blog'
}

const Blog = () =>
    <section className='blog'>
        <img
            className='header-image'
            src={Insta2}
        />
        <div className='container'>
            <header>
                <div className='blog-header flex column align-v'>
                    <div className='tags mb-8'>{constants.tags.toUpperCase()}</div>
                    <h1 className='mb-24'>{constants.title}</h1>
                    <p className='grey tiny mb-64'>
                        PUBLISHED 10 OCT 2019 - 7 MIN READ
                    </p>
                    <p>
                        With 👾 AI, AR, 🤖 bots, 🧠 big data, etc the complexity of product's & service's design is keep{' '}
                        rising so that our intuitive design processes are less and less capable of accommodating these{' '}
                        challenges.
                        No surprise, 2018 has become a year to question and rethink the ways we create products and services (2018 trends).
                    </p>
                </div>
                <img className='mt-24 mb-24' src={Bitmap} alt='Design process image'/>
            </header>
        </div>
    </section>

export default {
    Blog,
    preview: constants
}