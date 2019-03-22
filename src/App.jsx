import React, { Component, Fragment } from 'react'

//Components
import Header from './components/header/Header.jsx'
import Homepage from './views/homepage/Homepage.jsx'
import Contact from './components/contact/Contact.jsx'

class App extends Component {
    state = {
        showContact: false
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Homepage />
                <Contact show={this.state.showContact} />
            </Fragment>
        )
    }
}

export default App