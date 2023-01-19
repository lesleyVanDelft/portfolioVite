import Test from '../pages/Test';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Container = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const loadVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1,
			},
		},
	};

	// useEffect(() => {
	// 	setLoading(false);
	// }, []);
	return (
		<motion.div
			className="Container"
			variants={loadVariant}
			initial="hidden"
			animate="visible">
			{children}
			<Test />
		</motion.div>
	);
};

export default Container;
