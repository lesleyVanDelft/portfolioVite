import { useState } from 'react';
import Landing from './components/Sections/Landing';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Sections/Projects';
import './dist/css/index.css';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Landing />
			<Projects />
		</div>
	);
}

export default App;
