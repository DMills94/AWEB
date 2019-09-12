import React from 'react'

// Components
import LinkTreeLinks from '../../components/link-tree-links/LinkTreeLinks'

// Styles
import './LinkTree.scss'

const LinkTree = () => {
    return (
        <section className='link-tree'>
            <h3>Hello 👋</h3>
            <h3>I'm Albina Cholak, and I help businesses to grow from design</h3>
            <p>
                as a Lead Product Designer, I craft digital products and services, give talks and write about design in my channel.
            </p>
            <p>
                I also share my daily life in London in my blog with tips on mindful lifestyle.
            </p>
            <LinkTreeLinks />
        </section>
    )
}

export default LinkTree