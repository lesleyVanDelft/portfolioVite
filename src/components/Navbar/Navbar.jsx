import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	// const scrollRef = useRef(null);

	// const scrollToAbout = () => {
	// 	scrollRef.current.scrollIntoView({ behavior: 'smooth' });
	// };
	const list = {
		visible: {
			opacity: 1,
			height: 624,
			width: 624,
			translateY: -130,
			translateX: 100,
			// transition: {
			// 	duration: 0.1,
			// 	type: 'spring',
			// 	stiffness: 70,
			// },
			transition: {
				staggerChildren: 0.25,
				type: 'intertia',
				// stiffness: 1000,
				velocity: 150,
			},
		},
		hidden: {
			opacity: 0,
			height: 0,
			width: 0,
			transition: {
				duration: 0.5,
				// staggerChildren: 0.01,
			},
		},
	};

	const item = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
		transition: {
			duration: 1,
		},
	};
	return (
		<nav className="Navbar">
			<div className="Navbar__logo">
				<h1>
					<span className="accentWhite">{`<`}</span>
					{`LesleyVanDelft`}
					<span className="accentWhite">{`/>`}</span>
				</h1>
			</div>
			<div className="Navbar__menu">
				<div
					className={`Navbar__menu--toggle ${menuActive ? 'active' : ''}`}
					onClick={() => setMenuActive(!menuActive)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<AnimatePresence>
					{menuActive && (
						<motion.nav
							className={`Navbar__menu--mobile ${menuActive ? 'active' : ''}`}
							initial="hidden"
							animate="visible"
							exit={'hidden'}
							variants={list}>
							<motion.ul>
								<motion.li variants={item}>
									<a href="#About">
										<span className="number inverted">01.</span> About Me
									</a>
								</motion.li>
								<motion.li variants={item}>
									<a href="#projects">
										<span className="number inverted">02.</span>Projects
									</a>
								</motion.li>
								<motion.li variants={item}>
									<a href="#about">
										{' '}
										<span className="number inverted">03.</span>Contact
									</a>
								</motion.li>
							</motion.ul>
							<div className="craters">
								<div className="crater crater1"></div>
								<div className="crater crater2"></div>
								<div className="crater crater3"></div>
								<div className="crater crater4"></div>
								<div className="crater crater5"></div>
							</div>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
