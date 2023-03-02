import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/css/index.css';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
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
