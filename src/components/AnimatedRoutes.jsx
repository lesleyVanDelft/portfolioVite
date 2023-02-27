import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

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
