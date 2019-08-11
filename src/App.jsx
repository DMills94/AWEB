import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Pages
import Homepage from './views/homepage/Homepage';
import About from './views/about/About';
import Portfolio from './views/portfolio/Portfolio';
import LinkTree from './views/link-tree/LinkTree';
import MindMeanDesign from './views/mind-mean-design/MindMeanDesign';
import Page404 from './views/404/404';

//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

class App extends Component {
    state = {
        showContact: false
    };

    toggleContact = event => {
        if (event.target === event.currentTarget)
            this.setState(prevState => ({
                showContact: !prevState.showContact
            }));
    };

    /**
     * Used to detect change in the url to scroll the browser to the top
     * While not scrolling if the contact form is opened
     */
    componentWillMount() {
        this.unlisten = this.props.history.listen(() => {
            window.scrollTo(0, 0)
            const navBar = document.querySelector('nav')
            navBar.classList.remove('toggle')
        })
    }

    componentWillUnmount() {
        this.unlisten()
    }

    render() {
        return (
            <div className='background'>
                <Header toggleContact={event => this.toggleContact(event)} />
                <Switch>
                    <Route path='/' component={Homepage} exact />
                    <Route
                        path='/about'
                        render={() => (
                            <About
                                toggleContact={event =>
                                    this.toggleContact(event)
                                }
                            />
                        )}
                    />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/me' component={LinkTree} />
                    <Route path='/mmd' component={MindMeanDesign} />
                    <Route component={Page404} />
                </Switch>
                <Footer />
                <Contact
                    show={this.state.showContact}
                    toggleModal={event => this.toggleContact(event)}
                />
            </div>
        );
    }
}

export default withRouter(App);
