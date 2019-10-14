import React, { useState } from 'react'
import FeatureBlogCard from '../../components/blogs/FeatureBlogCard'
import BlogCard from '../../components/blogs/BlogCard'

import * as Blogs from './Blogs/Blogs'

import './Blog.scss'

const BlogsPage = () => {
    const [numBlogs, setNumBlogs] = useState(6)

    const blogs = Object.values(Blogs)
    const featuredBlogs = blogs.filter(blog => blog.preview.featured).slice(0, 3) // Max 3

    return (
        <section className='blogs'>
        <div className='container'>
            <h2 className='txt-c mt-72 mb-72'>Blog</h2>

            <section className='feature-blogs grid'>
                {featuredBlogs.map((blog, idx) =>
                    <FeatureBlogCard
                        content={blog.preview}
                        key={idx}
                    />
                )}
            </section>

            <section className='all-blogs flex wrap jc-sb mt-100 mb-80'>
                {blogs.slice(0, numBlogs).map((blog, idx) =>
                    <BlogCard
                        content={blog.preview}
                        key={idx}
                    />
                )}

                {blogs.length > numBlogs &&
                    <p className='flex centre more-blogs' onClick={() => setNumBlogs(numBlogs + 6)}>Load 6 more articles</p>
                }
            </section>
        </div>
    </section>
    )
}


export default BlogsPage