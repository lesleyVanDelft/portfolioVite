import { useRef, useState } from 'react';
import Landing from './components/Sections/Landing';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Sections/Projects';
import Test from './pages/Test';
import './dist/css/index.css';
import About from './components/Sections/About';

function App() {
	const aboutRef = useRef(null);

	const scrollToAbout = () => {
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="App">
			<Navbar />
			<Landing scrollToAbout={scrollToAbout} />
			<About refProps={aboutRef} />
			<Projects />
			<Test />
		</div>
	);
}

export default App;
