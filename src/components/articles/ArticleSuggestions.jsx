import React from 'react'

// Components
import BlogCard from '../blogs/BlogCard'

const ArticleSuggestions = ({ suggestions = [] }) => {
    return suggestions.length
        ? (
            <div className='article-suggestions blogs mt-72'>
                <h2 className='txt-c mb-72'>More of the same</h2>
                <div className='all-blogs flex wrap jc-sb'>
                    {suggestions.map((suggestion, idx) =>
                        <BlogCard
                            content={suggestion}
                            key={idx}
                        />
                    )}
                </div>
            </div>
        )
        : null
}


export default ArticleSuggestions