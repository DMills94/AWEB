import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Styles
import './Header.scss'

class Header extends Component {

	/**
	 * Hide or show the slider div depending on if the user has hovered the navigation bar
	 */
	toggleSlider = () => {
		console.log('toggle')
		const slider = document.querySelector('.slider')
		
		if (slider.classList.contains('view')) {
			slider.style.width = '0'
			setTimeout(() => {

				console.log(slider)
				console.log(slider.offsetWidth)
				if (slider.offsetWidth === 0) { // If user has unhovered and rehovered, don't disable
					slider.classList.remove('view')
					slider.style.transition = ''
				}
			}, 300)
		}
		else
			slider.classList.add('view')
	}

	/**
	 * Handle on hover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	hoverItem = e => {
		const navItems = document.querySelectorAll('.nav-item')
		let left = 0
		const selectedNavItem = e.target
		
		for (let item in navItems) {
			if (navItems[item].id === selectedNavItem.id)
				break
			left += navItems[item].offsetWidth
		}
		
		const slider = document.querySelector('.slider')
		
		if (slider.classList.contains('view')) {
			selectedNavItem.style.color = '#fff'
			slider.style.left = `${left}px`
			
			slider.style.transition = 'left 0.3s ease, width 0.1s ease'
			slider.style.width = `${selectedNavItem.offsetWidth}px`
		}
	}

	/**
	 * Handle on unhover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	unhoverItem = e => {
		const selectedNavItem = e.target
		selectedNavItem.style.color = ''
	}
	

	render() {
		return (
			<header className='header flex align-v'>
				<div>
					<Link to='/' className='logo'>
						/ Albina Cholak
					</Link>
				</div>
				<nav
					className='flex'
					onMouseEnter={() => this.toggleSlider()}
					onMouseLeave={() => this.toggleSlider()}
				>
					<div className='slider'></div>
					<Link
						to='/about'
						className='nav-item small flex centre'
						id='0'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						About
					</Link>
					<Link
						to='/blog'
						className='nav-item small flex centre'
						id='1'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Blog
					</Link>
					<Link
						to='/portfolio'
						className='nav-item small flex centre'
						id='2'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Portfolio
					</Link>
					<a
						className='nav-item small flex centre'
						id='3'
						onClick={this.props.toggleContact}
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Let's talk
					</a>
				</nav>
			</header>
		)
	}
}

export default Header
