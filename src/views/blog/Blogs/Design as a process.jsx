import React from 'react'

// Components
import ArticleHeader from '../../../components/articles/ArticleHeader'
import ArticleQuote from '../../../components/articles/ArticleQuote'
import ArticleSeries from '../../../components/articles/ArticleSeries'
import ArticleSuggestions from '../../../components/articles/ArticleSuggestions'

// Assets
import Insta2 from '../../../assets/images/instagram/insta2.jpg'
import Overview from '../../../assets/images/Articles/design-as-a-process/overview.png'
import Discover from '../../../assets/images/Articles/design-as-a-process/discover.png'

// Styles
import '../../../components/articles/Articles.scss'

const constants = {
    featured: true,
    image: Insta2,
    title: 'Design as a process',
    tags: 'Blog'
}

const Blog = () =>
    <section className='article'>
        <ArticleHeader {...constants} />

        <div className='container'>
            <p className='txt-c'>
                So how might we apply our design tools and skills to celebrate better experiences not only for our{' '}
                users but also our teams and colleagues?
            </p>

            <img className='mt-24 mb-48' src={Overview} alt='The full design process'/>

            <ArticleQuote
                author='Wisdom'
                quote={`Life's too short to build products nobody wants.`}
            />

            <img className='mb-48' src={Discover} alt='Discover, Define, Develop, Deliver'/>

            <div className='w-80 mb-80'>
                <h3 className='mb-40'>Learn your business. The solution:</h3>

                <ol>
                    <li>
                        Understand your business and align design goals to address key performance indicators (KPIs){' '}
                        — such as lifetime value of customers, average revenue per user/customer, customer{' '}
                        acquisition cost, cost of sales, and contribution margins, among others. Yeap,{' '}
                        all those smart words.
                    </li>
                    <li>
                        Learn the role your product plays in your business.
                    </li>
                </ol>

                <h3 className='mb-40'>Business of design</h3>

                <ul>
                    <li>
                    To start designing, we need to get ourselves familiar with the business. We do the Research to learn how the feature or the product, or the industry works. So before, design even starts, business goals dictate the pace.
                    </li>
                    <li>
                        After the business logic of the product is sort of clear, it’s time for the clean-up so that the users won’t have to go through the same gruesome discovery process we did. 

                        <ul>
                            <li>This is how the Concept is born. But the concept itself is not viable. It has to become sexy for people to start caring and usable for them to know what they are doing.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <ArticleSeries
                linkedArticles={[
                    'The need for a dream.',
                    'Not everyone is a designer',
                    'Learn your business.',
                    'Make business believe in you.',
                    'Embed design.'
                ]}
            />

            <ArticleSuggestions
                suggestions={[
                    {
                        title: 'test blog',
                        image: Insta2,
                        tags: 'DESIGN'
                    },
                    {
                        title: 'test blog',
                        image: Insta2,
                        tags: 'DESIGN'
                    },
                    {
                        title: 'test blog',
                        image: Insta2,
                        tags: 'DESIGN'
                    }
                ]}
            />
        </div>
    </section>

export default {
    Blog,
    preview: constants
}