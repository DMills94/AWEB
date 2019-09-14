import React from 'react'

// Components
import IconBoxes from '../../components/icon-boxes/IconBoxes'

// Assets
import hands from '../../assets/icons/sign-language.svg'
import workshop1 from '../../assets/images/workshop1.png'
import workshop2 from '../../assets/images/workshop2.png'
import workshop3 from '../../assets/images/workshop3.png'
import workshop4 from '../../assets/images/workshop4.png'
import workshop5 from '../../assets/images/workshop5.png'

import './Workshop.scss'

const items = [
	{
		icon: '👀',
		title: 'Identify the right problem and align everyone on a clear vision'
	},
	{
		icon: '🙋‍♀️',
		title: 'Understand who are your customers and what they really want'
	},
	{
		icon: '🍟',
		title: 'Generate lots of amazing ideas together with a team'
	},
	{
		icon: '🎯',
		title: 'Validate ideas to find the best for your customer, your team and your business'
	}
]

const Workshop = props => {
    return (
		<section className='workshop'>
			<div className='intro'>
				<div className='container'>
					<img src={hands} alt='👋'/>
					<h3>Discovery workshop</h3>
					<h2 className='peach'>How to collaboratively create product<br />
					& services that customers love.</h2>
					<div className='btn white' onClick={props.toggleContact}>
						Request a workshop
					</div>
					<div className='info flex jc-sb'>
						<div className='box flex column'>
							<p className='bold'>£1000</p>
							<p>pounds</p>
						</div>
						<div className='box flex column'>
							<p className='bold'>3-5</p>
							<p>hours coaching</p>
						</div>
						<div className='box flex column'>
							<p className='bold'>6-12</p>
							<p>participants</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<h2 className='mb-8'>Stop spending money on solutions nobody wants.</h2>
				<p>
					Without providing a real value to your customers, even the best{' '}
					looking product is really nothing. A discovery process provides a clear{' '}
					framework that will help you to make your product or service invaluable:
				</p>
				<IconBoxes
					boxes={items}
				/>

				<h2 className='mb-8'>Creating products & services together</h2>
				<p>
					is often the tonic to a more productive, happier and more focused team.
				</p>

				<div className='grid parent'>
					<img className='image image--1' src={workshop1} alt=''/>
					<img className='image image--4' src={workshop4} alt=''/>
					<div className='grid sub'>
						<img className='image image--2' src={workshop2} alt=''/>
						<img className='image image--3' src={workshop3} alt=''/>
						<img className='image image--5' src={workshop5} alt=''/>
					</div>
				</div>
			</div>
			<div className='footer flex column centre'>
				<h1 className='txt-white'>Stop pushing pixels & start solving real problems</h1>
				<div className='btn white' onClick={props.toggleContact}>
					Request a workshop
				</div>
			</div>
		</section>
	)
}

export default Workshop
