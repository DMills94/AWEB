import React, { useState } from 'react'

// Components
import TextInput from '../base/text-input/TextInput'
import TextArea from '../base/text-area/TextArea'

// Styles
import './Contact.scss'

// Assets
import close from '../../assets/icons/simple-close.svg'

const Contact = props => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleInputChange = event => {
		const { name, value } = event.target

		setForm({
			...form,
			[name]: value
		})
	}

	const display = props.show
		? ''
		: ' dis-n'

	return (
		<div className={'contact-background' + display} onClick={props.toggleModal}>
			<div className={'contact-modal flex centre' + display}>
				<img src={close} onClick={props.toggleModal} className='close' alt='X'/>
				<section className='contact-body'>
					<h2>Say hello! 👋</h2>
					<p>Email <a href='mailto:hello@albinacholak.com'>hello@albinacholak.com</a><br />
					Or fill out this form:</p>
					<form
						name='contact'
						method='POST'
					>
						<input type='hidden' name='form-name' value='contact' />
						<TextInput
							label='Your name'
							value={form.name}
							name='name'
							type='text'
							handleChange={event => handleInputChange(event)}
						/>
						<TextInput
							label='Your email'
							value={form.email}
							name='email'
							type='email'
							handleChange={event => handleInputChange(event)}
						/>
						<TextArea
							label='Your message'
							value={form.message}
							name='message'
							handleChange={event => handleInputChange(event)}
						/>
						<button type='submit'>
							Send
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}

export default Contact