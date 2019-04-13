import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

//Assets
import portrait from '../../assets/images/portrait.png'

//Styles
import './Homepage.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 100 + 50}px,${y / 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 100}px,${y / 20}px,0)`

const Homepage = () => {

    // Parallax definitions
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 200 } }))

    useEffect(() => {
        const messages = document.querySelectorAll('.message')
        
        for (const [i, message] of messages.entries()) {
            setTimeout(() => {
                message.classList.add('animate')
            }, 300 * i);
        }
    })

    return (
        <section className='homepage'>
            <div className='parallax-wrap' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                {/* Parallax Elements */}
                <animated.div className='item' id='letterA' style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.div className='item' id='letterC' style={{ transform: props.xy.interpolate(trans2) }} />

                {/* Content */}
                <div className='content-wrap flex wrap'>
                    <div className='right flex column align-h'>
                        <div className='right-content'>
                            <img className='portrait' src={portrait} alt='Picture of Albina Cholak'/>
                            <div className='messages flex column'>
                                <p className='message flex center'>Welcome 👋</p>
                                <p className='message flex center'>My name is Albina Cholak</p>
                                <p className='message flex center'>I design products & services</p>
                                <p className='message flex center'>For fun, I give talks & workshops</p>
                                <p className='message flex center'>and bake cheesecakes 🍰</p>
                            </div>
                        </div>
                    </div>
                    <div className='left flex column center'>
                        <div className='menu-item'>
                            <NavLink
                                to='/about'
                                activeClassName='h1'
                            >
                                About
                            </NavLink>
                        </div>
                        <div className='menu-item disabled'>
                            <NavLink
                                to='/'
                                activeClassName='h1'
                            >
                                Portfolio
                            </NavLink>
                            <p className='coming'>Coming soon</p>
                        </div>
                        <div className='menu-item disabled'>
                            <NavLink
                                to='/'
                                activeClassName='h1'
                            >
                                Insights
                            </NavLink>
                            <p className='coming'>Coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homepage