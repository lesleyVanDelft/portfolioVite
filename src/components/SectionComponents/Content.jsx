import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import mountainLandscapeSvg from '../../assets/svg/mountainLandscape.svg';
import { useRef } from 'react';

const Content = ({ children, name }) => {
	// const useParallax = (value, distance) => {
	// 	return useTransform(value, [0, 1], [-distance, distance]);
	// };
	const ref = useRef(null);
	const { scrollYProgress } = useScroll(ref);
	// const y = useParallax(scrollYProgress, 100);
	return (
		<motion.main className={`Content ${name}__content`} ref={ref}>
			{children}
			<figure className="mountain">
				<img src={mountainLandscapeSvg} alt="aa" />
			</figure>
		</motion.main>
	);
};

export default Content;
