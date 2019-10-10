import React from 'react'
import FeatureBlogCard from '../../components/blogs/FeatureBlogCard'
import BlogCard from '../../components/blogs/BlogCard'

// Assets
import Insta1 from '../../assets/images/instagram/insta1.jpg'

import * as Blogs from './Blogs/Blogs'

import './Blog.scss'

const BlogsPage = () =>
    <section className='blogs'>
        <div className='container'>
            <h2 className='txt-c mt-72 mb-72'>Blog</h2>

            <section className='feature-blogs grid'>
                {Object.values(Blogs).map((blog, idx) =>
                    <FeatureBlogCard
                        content={blog.preview}
                        key={idx}
                    />
                )}
                <FeatureBlogCard content={{ image: Insta1 }} />
            </section>

            <section className='all-blogs flex wrap jc-sb mt-100'>
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
                <BlogCard content={{ image: Insta1 }} />
            </section>
        </div>
    </section>

export default BlogsPage