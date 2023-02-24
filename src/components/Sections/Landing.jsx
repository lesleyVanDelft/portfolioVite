import blobSvg from '../../assets/img/blobanimation.svg';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import YellowAccent from '../YellowAccent';
import pageTransitionImg from '../../assets/img/pageTransition.png';
import sunSvg from '../../assets/sunSvg.svg';
import blob from '../../assets/blobanimation.svg';
import SunSvg from '../SunSvg';
import BlobSvg from '../BlobSvg';
const variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
};

const sunVariant = {
	initial: {
		opacity: 0,
		transition: {
			scale: { delay: 1, duration: 1, type: 'linear' },
			opacity: { duration: 2, ease: 'easeIn' },
		},
	},
	animate: {
		opacity: 1,

		transition: {
			scale: {
				duration: 1,
			},
			opacity: { duration: 2, ease: 'easeIn' },

			type: 'spring',
		},
	},
};

const Landing = ({ scrollToAbout }) => {
	const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<motion.section
			className="Landing"
			variants={variants}
			initial="hidden"
			animate="show">
			<div className="Landing__content">
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<YellowAccent> front end developer</YellowAccent> and I love making
					beautiful websites.
				</p>

				<motion.button
					className="Landing__content--button btnPrimary"
					onClick={() => scrollToAbout()}>
					<span>About me</span>
					{/* <div className="ray_box">
						{test.map((el, i) => {
							return <span className={`ray ray${i + 1}`} key={i}></span>;
						})}
					</div> */}
					<SunSvg />
				</motion.button>
				<BlobSvg />
			</div>
		</motion.section>
	);
};

export default Landing;
