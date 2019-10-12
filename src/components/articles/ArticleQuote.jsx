import React from 'react'

const ArticleQuote = ({ author, quote }) =>
    <div className='article-quote flex column align-h mb-48'>
        <h3 mb-8>{quote}</h3>
        <p className='caption grey'>{author.toUpperCase()}</p>
    </div>

export default ArticleQuote