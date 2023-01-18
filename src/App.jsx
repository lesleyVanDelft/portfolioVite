import { useRef, useState } from 'react';
import Landing from './components/Sections/Landing';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Sections/Projects';
import Test from './pages/Test';
import './styles/css/index.css';
import About from './components/Sections/About';
import Container from './components/Container';
import Contact from './components/Sections/Contact';

function App() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);

	const scrollToAbout = () => {
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToProjects = () => {
		projectsRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="App">
			{/* <!-- A little help for the Netlify bots if you're not using a SSG -->
			// <form name="contactForm" netlify netlify-honeypot="bot-field" hidden>
			// 	<input type="text" name="name" />
			// 	<input type="email" name="email" />
			// 	<textarea name="message"></textarea>
			// </form> */}

			<Container>
				<Navbar />
				<Landing scrollToAbout={scrollToAbout} />
				<About refProps={aboutRef} scrollToProjects={scrollToProjects} />
				<Projects refProps={projectsRef} />
				<Contact />
			</Container>
		</div>
	);
}

export default App;
