import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Assets
import burgerMenu from '../../assets/icons/menu-icon.svg'

// Styles
import './Header.scss'

const Header = props => {

	/**
	 * Hide or show the slider div depending on if the user has hovered the navigation bar
	 */
	const showSlider = () => {
		const slider = document.querySelector('.slider')

		slider.style.transition = 'width 0.1s ease'

		setTimeout(() => {
			slider.style.transition = 'left 0.3s ease, top 0.3s ease, width 0.1s ease'
		}, 300);
		slider.classList.add('view')
	}

	const hideSlider = () => {
		const slider = document.querySelector('.slider')
		
		slider.style.width = '0'

		// Don't remove the colour until animation is finished
		setTimeout(() => {
			slider.classList.remove('view')
			slider.style.transition = ''
		}, 300)
	}

	/**
	 * Handle on hover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	const hoverItem = e => {
		const navItems = document.querySelectorAll('.nav-item')
		let left = 0
		let top = 0
		const selectedNavItem = e.target
		
		for (let item in navItems) {
			if (navItems[item].id === selectedNavItem.id)
				break

			// Determine if nav bar is in mobile view or desktop
			if (selectedNavItem.offsetTop === 0)
				left += navItems[item].offsetWidth
			else if (selectedNavItem.offsetLeft === 0)
				top += navItems[item].offsetHeight
		}
		
		const slider = document.querySelector('.slider')
		
		if (slider.classList.contains('view')) {
			selectedNavItem.style.color = '#fff'

			slider.style.left = `${top > 0 ? 0 : left}px`
			slider.style.top = `${left > 0 ? 0 : top}px`
			slider.style.width = `${selectedNavItem.offsetWidth}px`
			slider.style.height = `${selectedNavItem.offsetHeight	}px`
		}
	}

	/**
	 * Handle on unhover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	const unhoverItem = e => {
		const selectedNavItem = e.target
		selectedNavItem.style.color = ''
	}

	const toggleMenu = () => {
		const navBar = document.querySelector('nav')
		navBar.classList.toggle('toggle')
	}



	return (
		<header className='header flex align-v'>
			<Link to='/' className='logo'>
				/ Albina Cholak
			</Link>
			<img className='menu-icon' src={burgerMenu} onClick={toggleMenu} alt='Menu'/>
			<nav
				className='flex'
				onMouseEnter={() => showSlider()}
				onMouseLeave={() => hideSlider()}
			>
				<div className='slider'></div>
				<Link
					to='/about'
					className='nav-item small flex centre'
					id='0'
					onMouseEnter={e => hoverItem(e)}
					onMouseLeave={e => unhoverItem(e)}
				>
					About
				</Link>
				<a 
					href='https://medium.com/@albinacholak'
					className='nav-item small flex centre'
					id='1'
					target='_blank'
					rel='noopener noreferrer'
					onMouseEnter={e => hoverItem(e)}
					onMouseLeave={e => unhoverItem(e)}
				>
					Blog
				</a>
				<Link
					to='/portfolio'
					className='nav-item small flex centre'
					id='2'
					onMouseEnter={e => hoverItem(e)}
					onMouseLeave={e => unhoverItem(e)}
				>
					Portfolio
				</Link>
				<a
					className='nav-item small flex centre'
					id='3'
					onClick={props.toggleContact}
					onMouseEnter={e => hoverItem(e)}
					onMouseLeave={e => unhoverItem(e)}
				>
					Let's talk
				</a>
			</nav>
		</header>
	)
}

export default Header
