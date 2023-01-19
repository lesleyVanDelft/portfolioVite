import { useEffect, useState } from 'react';
import './styles/css/index.css';
import Home from './pages/Home';
import Tester from './pages/Tester';

function App() {
	const [loading, setLoading] = useState(true);

	// const asyncLoading = () => {
	// 	return new Promise(resolve => setTimeout(() => resolve(), 2500));
	// };

	useEffect(() => {
		const onPageLoad = () => {
			setLoading(false);
		};
		// console.log(document.readyState);

		// document.readyState === 'complete' ? setLoading(false) :
		// if (document.readyState === 'interactive') {
		// 	setLoading(true);
		// 	console.log('readyState interact');
		// } else {
		// 	window.addEventListener('load', setLoading(false));
		// 	console.log('loaded');
		// }
		// window.addEventListener('load', onPageLoad());
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
