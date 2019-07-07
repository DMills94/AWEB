import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Homepage from './views/homepage/Homepage.jsx'
import About from './views/about/About.jsx'
import Portfolio from './views/portfolio/Portfolio.jsx'
import Page404 from './views/404/404.jsx'

//Components
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Contact from './components/contact/Contact.jsx'

class App extends Component {
    state = {
        showContact: false
    }

    toggleContact = event => {
        if (event.target === event.currentTarget)
        this.setState((prevState) => ({
            showContact: !prevState.showContact
        }))
    }

    render() {
        return (
            <div className='background'>
                <BrowserRouter>
                    <Header toggleContact={(event) => this.toggleContact(event)}/>
                    <Switch>
                        <Route path='/' component={Homepage} exact />
                        <Route path='/about' component={About} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route component={Page404} />
                    </Switch>
                    <Footer />
                    <Contact show={this.state.showContact} toggleModal={event => this.toggleContact(event)} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App