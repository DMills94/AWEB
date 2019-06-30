import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//Styles
import './Header.scss'

const classes = 'nav-item small flex centre'

class Header extends Component {
	state = {
		hoveredItem: null,
		percent: 50
	}

	/**
	 * Handle on hover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	hoverItem = e => {
		if (e.target.className.includes('active')) {
			return
		}
		const navItems = document.querySelectorAll('.nav-item:not(.active)')
		
		if (!this.state.hoveredItem) {
			for (let item in navItems) {
				if (navItems[item].id > e.target.id) {
					navItems[item].style.backgroundPosition = '100% 0'
				}
			}
		}
		else if ((Number(e.target.id) > this.state.hoveredItem)) {
			e.target.style.backgroundPosition = '0 0'
			
			const prevNavItem = navItems[Number(e.target.id) - 1]
			prevNavItem.style.backgroundPosition = '0 0'
		}
		else {
			const prevNavItem = navItems[Number(e.target.id) + 1]
			prevNavItem.style.backgroundPosition = '100% 0'
		}

		e.target.className += ' hover'
		e.target.style.backgroundPosition = '50% 0'
		this.setState({
			hoveredItem: Number(e.target.id)
		})
	}

	/**
	 * Handle on unhover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	unhoverItem = e => {
		if (e.target.className.includes('active')) {
			return
		}

		const navItems = document.querySelectorAll('.nav-item')
		e.target.className = classes + ' unhover'

		navItems[e.target.id].style.backgroundPosition = '0 0'

		
		this.setState({
			hoveredItem: null
		})
	}
	

	render() {
		return (
			<header className='header flex align-v'>
				<div>
					<NavLink to='/' className='logo'>
						/ Albina Cholak
					</NavLink>
				</div>
				<nav className='flex'>
					<NavLink
						to='/about'
						className='nav-item small flex centre'
						activeClassName='active'
						id='0'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						About
					</NavLink>
					<NavLink
						to='/blog'
						className='nav-item small flex centre'
						activeClassName='active'
						id='1'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Blog
					</NavLink>
					<NavLink
						to='/portfolio'
						className='nav-item small flex centre'
						activeClassName='active'
						id='2'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Portfolio
					</NavLink>
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
