import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Styles
import './Header.scss'

class Header extends Component {

	/**
	 * Hide or show the slider div depending on if the user has hovered the navigation bar
	 */
	showSlider= () => {
		const slider = document.querySelector('.slider')

		slider.style.transition = 'width 0.1s ease'

		setTimeout(() => {
			slider.style.transition = 'left 0.3s ease, width 0.1s ease'
		}, 300);
		slider.classList.add('view')
	}

	hideSlider = () => {
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
					onMouseEnter={() => this.showSlider()}
					onMouseLeave={() => this.hideSlider()}
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
					<a 
						href='https://medium.com/@albinacholak'
						className='nav-item small flex centre'
						id='1'
						target='_blank'
						rel='noopener noreferrer'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Blog
					</a>
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
