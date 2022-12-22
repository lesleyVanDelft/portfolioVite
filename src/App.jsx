import { useState } from 'react';
import Landing from './components/Sections/Landing';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Sections/Projects';
import Test from './pages/Test';
import './dist/css/index.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Landing />
			<Projects />
			<Test />
		</div>
	);
}

export default App;
