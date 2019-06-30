import React from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import smallLogo from '../../assets/icons/small-logo.svg'

//Styles
import './Header.scss'

const Header = props => {
	return (
		<header className='header flex align-v'>
			<div>
				<NavLink to='/' className='logo'>
					/ Albina Cholak
				</NavLink>
			</div>
			<p className='talk' onClick={props.toggleContact}>
				LET'S TALK
			</p>
		</header>
	)
}

export default Header
