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
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition,
		},
		exit: {
			opacity: 0,
			scale: 0,
		},
	};
	return (
		<motion.button
			className="ScrollTopButton btnTop"
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
