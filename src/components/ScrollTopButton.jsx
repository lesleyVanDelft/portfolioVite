import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollTopButton = ({ scrollTo }) => {
	const transition = {
		duration: 0.4,
	};
	const buttonVariant = {
		initial: {
			opacity: 0,
			scale: 0,
			transition,
		},
		animate: {
			opacity: 1,
			scale: 0.9,
			rotate: 360,
			transition,
		},
		exit: {
			opacity: 0,
			scale: 0,
			rotate: -360,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.button
			className={`ScrollTopButton btnTop `}
			onClick={scrollTo}
			variants={buttonVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<FaArrowUp className="arrowTop" />
		</motion.button>
	);
};

export default ScrollTopButton;
