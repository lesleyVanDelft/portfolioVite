import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useMediaQuery } from 'react-responsive';
import './styles/css/index.css';

function App() {
	const isMobile = useMediaQuery({
		query: '(max-width: 768px)',
	});

	return (
		<div className="App">
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
