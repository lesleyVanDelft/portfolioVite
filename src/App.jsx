import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './styles/css/index.css';

function App() {
	const isMobile = useMediaQuery({
		query: '(max-width: 768px)',
	});
	// const [showTopBtn, setShowTopBtn] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 400) {
	// 			setShowTopBtn(true);
	// 			console.log('fuck you');
	// 		} else {
	// 			setShowTopBtn(false);
	// 		}
	// 	});
	// }, []);
	// const goToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	});
	// };
	return (
		<div className="App">
			{/* {showTopBtn && <FaAngleUp className="arrow" />} */}
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
