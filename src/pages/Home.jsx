import { useRef } from 'react';
import Container from '../components/Container';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Landing from '../components/Sections/Landing';
import Projects from '../components/Sections/Projects';
import Test from './Test';

const Home = () => {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);

	const scrollToAbout = () => {
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToProjects = () => {
		projectsRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Container>
			<Navbar />
			<Landing scrollToAbout={scrollToAbout} />
			<About refProps={aboutRef} scrollToProjects={scrollToProjects} />
			<Projects refProps={projectsRef} />
			<Contact />
		</Container>
	);
};

export default Home;
