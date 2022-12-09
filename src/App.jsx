import { useState } from 'react';
import Landing from './components/Sections/Landing';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test';
import './dist/css/index.css';
import Projects from './components/Sections/Projects';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Navbar />

			<Landing />
			<Projects />
		</div>
	);
}

export default App;
