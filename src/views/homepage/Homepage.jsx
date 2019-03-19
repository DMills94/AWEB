import React from 'react'
import { useSpring, animated } from 'react-spring'

//Assets
import portrait from '../../assets/images/portrait.png'

//Components
import Footer from '../../components/footer/Footer.jsx'

//Styles
import './Homepage.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 100 + 50}px,${y / 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 100}px,${y / 20}px,0)`

const Homepage = () => {

    // Parallax definitions
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 200 } }))

    return (
        <section className='homepage'>
            <div class="parallax-wrap" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                {/* Parallax Elements */}
                <animated.div className='item' id='letterA' style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.div className='item' id='letterC' style={{ transform: props.xy.interpolate(trans2) }} />

                {/* Content */}
                <div className='content-wrap flex wrap'>
                    <div className='right flex'>
                        <div className='name-wrap flex column'>
                            <h1 className='first'>Albina</h1>
                            <h1 className='second'>Cholak</h1>
                        </div>
                        <img className='portrait' src={portrait} alt='Picture of Albina Cholak'/>
                        <div className='shadow'>
                            <p>Lead product designer at Octopus Labs, London.</p>
                        </div>
                    </div>
                    <div className='left flex column center'>
                        <div className='container'>
                            <p className='hello bold'><strong>Hello</strong></p>
                            <p className='brown'>After 6 years in love with design, I:</p>
                            <div className='list flex column'>
                                <div className='left-border'><p>Design products & services</p></div>
                                <div className='left-border'><p>Facilitate workshops</p></div>
                                <div className='left-border'><p>Gives talks, my next one's in <a href='https://prjctr.com.ua/krupa-en' target='_blank' rel='noopener'>Krupa</a></p></div>
                                <div className='left-border'><p>Mentor designers</p></div>
                            </div>
                            <div className='contact flex column'>
                                <a href='mailto:hello@albinacholak.com'>hello@albinacholak.com</a>
                                <p>or see my resume</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Homepage