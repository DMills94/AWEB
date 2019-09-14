import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Pages
import Homepage from './views/homepage/Homepage';
import About from './views/about/About';
import Portfolio from './views/portfolio/Portfolio';
import Workshop from './views/workshop/Workshop';
import LinkTree from './views/link-tree/LinkTree';
import MindMeanDesign from './views/mind-mean-design/MindMeanDesign';
import Page404 from './views/404/404';

//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

// Helpers
import { initGA, logPageView } from './helpers/analytics'

const App = props => {
    const [showContact, setShowContact] = useState(false)

    const toggleContact = event => {
        if (event.target === event.currentTarget)
            setShowContact(!showContact)
    }

    /**
     * Used to detect change in the url to scroll the browser to the top
     * While not scrolling if the contact form is opened
     */
    useEffect(() => {
        const unlisten = props.history.listen(() => {
            window.scrollTo(0, 0)
            const navBar = document.querySelector('nav')
            navBar.classList.remove('toggle')
        })
        initGA()

        return () => unlisten()
    },[])

    useEffect(() => {
        logPageView(props.location.pathname)
    },[props.location.pathname])
    
    return (
        <div className='background'>
            <Header toggleContact={event => toggleContact(event)} />
            <Switch>
                <Route path='/' component={Homepage} exact />
                <Route
                    path='/about'
                    render={() => (
                        <About
                            toggleContact={event => toggleContact(event)}
                        />
                    )}
                />
                <Route path='/portfolio' component={Portfolio} />
                <Route
                    path='/discovery-workshop'
                    render={() => (
                        <Workshop
                            toggleContact={event => toggleContact(event)}
                        />
                    )}
                />
                <Route path='/me' component={LinkTree} />
                <Route path='/mmd' component={MindMeanDesign} />
                <Route component={Page404} />
            </Switch>
            <Footer />
            <Contact
                show={showContact}
                toggleModal={event => toggleContact(event)}
            />
        </div>
    )
}

export default withRouter(App);
