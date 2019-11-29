import React from 'react'

const ArticleHeader = ({ tags, title, image }) =>
    <header className='article-header mb-72 align-v'>
        <div className='container flex jc-sb'>
            <div className='header-content'>
                <div className='tags mb-8'>{tags.toUpperCase()}</div>
                <h1 className='title mb-16'>{title}</h1>
                <p className='grey tiny mb-32'>
                    PUBLISHED 10 OCT 2019 - 7 MIN READ
                </p>
                <p>
                    With 👾 AI, AR, 🤖 bots, 🧠 big data, etc the complexity of product's & service's design is keep{' '}
                    rising so that our intuitive design processes are less and less capable of accommodating these{' '}
                    challenges.
                    No surprise, 2018 has become a year to question and rethink the ways we create products and services (2018 trends).
                </p>
            </div>
            <img src={image} alt=''/>
        </div>
    </header>


export default ArticleHeader