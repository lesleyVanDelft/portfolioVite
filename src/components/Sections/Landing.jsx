import blobSvg from '../../assets/img/blobanimation.svg';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import YellowAccent from '../YellowAccent';

const variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
};

const Landing = ({ scrollToAbout }) => {
	const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<motion.section className="Landing">
			<div className="Landing__content">
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<YellowAccent> front end developer</YellowAccent> and I love making
					beautiful websites.
				</p>

				<button
					className="Landing__content--button btnPrimary"
					onClick={() => scrollToAbout()}>
					<span>About me &#8595;</span>
					<div className="ray_box">
						{test.map((el, i) => {
							return <span className={`ray ray${i + 1}`} key={i}></span>;
						})}
					</div>
				</button>
			</div>
		</motion.section>
	);
};

export default Landing;
