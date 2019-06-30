import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//Styles
import './Header.scss'

const classes = 'nav-item small flex centre'

const activeStyle = {
	backgroundPosition: '50% 0',
	color: '#FFF',
	backgroundImage: 'none',
	backgroundColor: '#002D83'
}

class Header extends Component {
	state = {
		hoveredItem: null
	}

	/**
	 * Handle on hover 'animation' of the header nav - sliding box.
	 * @param {obj} e event object
	 */
	hoverItem = e => {
		const navItems = document.querySelectorAll('.nav-item')
		
		if (!this.state.hoveredItem) {
			for (let item in navItems) {
				if (navItems[item].id > e.target.id && !navItems[item].className.includes('active')) {
					navItems[item].style.backgroundPosition = '100% 0'
				}
			}
		}
		else if ((Number(e.target.id) > this.state.hoveredItem)) {
			let prevNavItem = navItems[Number(e.target.id) - 1]
			prevNavItem.style.backgroundPosition = '0 0'
		}
		else {
			let prevNavItem = navItems[Number(e.target.id) + 1]
			prevNavItem.style.backgroundPosition = '100% 0'
		}

		e.target.className = classes + ' hover'
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
		e.target.className = classes + ' unhover'
		e.target.style.backgroundPosition = '0 0'

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
						activeStyle={activeStyle}
						id='0'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						About
					</NavLink>
					<NavLink
						to='/blog'
						className='nav-item small flex centre'
						activeStyle={activeStyle}
						id='1'
						onMouseEnter={e => this.hoverItem(e)}
						onMouseLeave={e => this.unhoverItem(e)}
					>
						Blog
					</NavLink>
					<NavLink
						to='/portfolio'
						className='nav-item small flex centre'
						activeStyle={activeStyle}
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
