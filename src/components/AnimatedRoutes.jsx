import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
