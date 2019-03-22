import React from 'react'

//Styles
import './Contact.scss'

export default function Contact(props) {
	const display = props.display
		? ''
		: ' dis-n'

	return (
		<div className={'contact-background flex center' + display}>
			<div className='contact-modal'>
				<h2>Want to get in touch?</h2>
				<div className='contact-wrap flex column align-h'>
					<p>I'm on social media</p>
					<div className='social-media-wrap flex'>
						<a href='https://linkedin.com'>LinkedIn</a>
						<a href='https://twitter.com'>Twitter</a>
						<a href='https://facebook.com'>Facebook</a>
						<a href='https://instagram.com'>Instagram</a>
					</div>
					<p>Or send me an email:</p>
					<a href='mailto:hello@albinacholak.com'>
						hello@albinacholak.com
					</a>
				</div>
			</div>
		</div>
	)
}
