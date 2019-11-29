import React from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { formatForUrl } from '../../helpers/utility'

const ArticleSeries = ({ linkedArticles = [] }) => {
    return linkedArticles.length
        ? (
            <div className='article-series w-80 mt-72'>
                <h3 className='mb-24'>This article is a part of a series:</h3>
                <div className="flex column">
                    {linkedArticles.map((article, idx) =>
                        <Link to={`/${formatForUrl(article)}`} key={idx}>{article}</Link>    
                    )}
                </div>
            </div>
        )
        : null
}


export default ArticleSeries