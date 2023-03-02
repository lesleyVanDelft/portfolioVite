import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
// import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// import { FaAngleUp } from 'react-icons/fa';
import './styles/css/index.css';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
	// const isMobile = useMediaQuery({
	// 	query: '(max-width: 768px)',
	// });
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div className="App">
			{/* {showTopBtn && <FaAngleUp className="btnTop" />} */}
			<AnimatePresence>
				{showTopBtn && <ScrollTopButton scrollTo={goToTop} />}
			</AnimatePresence>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
