import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMenu from './NavbarMenu';
import Overlay from '../Overlay';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const menuRef = useRef(null);

	// useOutsideClick(menuRef, () => {
	// 	if (menuActive) {
	// 		setMenuActive(false);
	// 	}
	// });
	// const scrollRef = useRef(null);

	// const scrollToAbout = () => {
	// 	scrollRef.current.scrollIntoView({ behavior: 'smooth' });
	// };
	const list = {
		visible: {
			opacity: 1,
			height: 624,
			width: 624,
			// translateY: -130,
			// translateX: 100,
			// transition: {
			// 	duration: 0.1,
			// 	type: 'spring',
			// 	stiffness: 70,
			// },
			transition: {
				// duration: 0.2,
				staggerChildren: 0.25,
				// type: 'inertia',/
				// stiffness: 180,
				// bounce: 555.2,
				// damping: 15,
				// velocity: 2,
			},
		},
		hidden: {
			opacity: 0,
			height: 10,
			width: 10,
			// translateY: 130,
			// translateX: 0,
			transition: {
				// duration: 0.25,
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
					<span>LesleyVanDelft</span>
					<span className="accentWhite">{`/>`}</span>
				</h1>
			</div>
			<div className="Navbar__menu" onClick={() => setMenuActive(!menuActive)}>
				<div className={`Navbar__menu--toggle ${menuActive ? 'active' : ''}`}>
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
										<span className="number inverted">03.</span>Contact
									</a>
								</motion.li>
							</motion.ul>
							<motion.div className="craters">
								<motion.div className="crater crater1"></motion.div>
								<motion.div className="crater crater2"></motion.div>
								<motion.div className="crater crater3"></motion.div>
								<motion.div className="crater crater4"></motion.div>
								<motion.div className="crater crater5"></motion.div>
							</motion.div>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
			{menuActive && (
				<div className="orbit">
					<div className="rocket">
						<div className="window"></div>
					</div>
				</div>
			)}
			{menuActive && <Overlay />}
		</nav>
	);
};

export default Navbar;
