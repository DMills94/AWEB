import React, { Component } from 'react'

// Components
import TextInput from '../base/text-input/TextInput'
import TextArea from '../base/text-area/TextArea'

// Styles
import './Contact.scss'

// Assets
import close from '../../assets/icons/simple-close.svg'
import smallLogo from '../../assets/icons/small-logo.svg'

class Contact extends Component {
	state = {
		name: '',
		email: '',
		message: ''
	}

	handleInputChange = event => {
		const value = event.target.value
		const name = event.target.name

		this.setState({
			[name]: value
		})
	}

	submitForm = () => {
		//Submit the form.... somehow
	}

	render() {
		const display = this.props.show
			? ''
			: ' dis-n'

		return (
			<div className={'contact-background' + display} onClick={this.props.toggleModal}>
				<div className={'contact-modal flex centre' + display}>
					<img src={close} onClick={this.props.toggleModal} className='close' alt='X'/>
					<section className='contact-body'>
						<h2>Say hello! 👋</h2>
						<p>Email <a href='mailto:albina.cholak@gmail.com'>albina.cholak@gmail.com</a><br />
						Or fill out this form:</p>
						<form
							onSubmit={() => this.submitForm()}
						>
							<TextInput
								label='Your name'
								value={this.state.name}
								name='name'
								handleChange={event => this.handleInputChange(event)}
							/>
							<TextInput
								label='Your email'
								value={this.state.email}
								name='email'
								handleChange={event => this.handleInputChange(event)}
							/>
							<TextArea
								label='Your message'
								value={this.state.message}
								name='message'
								handleChange={event => this.handleInputChange(event)}
							/>
							<button
								type='submit'
							>
								Send
							</button>
						</form>
					</section>
				</div>
			</div>
		)
	}
}

export default Contact