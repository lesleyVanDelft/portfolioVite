import blobSvg from '../../assets/img/blobanimation.svg';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
	transition: {
		duration: 600,
	},
};

const Landing = ({ scrollToAbout }) => {
	// const scrollRef = useRef(null);

	// const handleScroll = () => scrollRef.current.scrollIntoView();

	return (
		<motion.section
			className="Landing"
			// animate={{ opacity: 1 }}
			// hidden={{ opacity: 0 }}
			// transition={{ duration: 0.3 }}
		>
			<div className="Landing__content">
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<span className="accentYellow"> front end developer</span> and I love
					making beautiful websites.
				</p>

				<button
					className="Landing__content--button btnPrimary"
					onClick={() => scrollToAbout()}>
					About me &#8595;
				</button>
			</div>
		</motion.section>
	);
};

export default Landing;
