import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMenu from './NavbarMenu';
import Overlay from '../Overlay';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const menuRef = useRef(null);

	useOutsideClick(menuRef, () => {
		if (menuActive) {
			setMenuActive(false);
		}
	});
	// const scrollRef = useRef(null);

	// const scrollToAbout = () => {
	// 	scrollRef.current.scrollIntoView({ behavior: 'smooth' });
	// };

	const transition = { duration: 0.7, type: 'spring' };

	const menuListVariant = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const listItemVariant = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};

	const mobileMenuVariant = {
		hidden: {
			opacity: 0,
			x: 75,
			y: -150,
			scale: 0,
			transition,
		},
		animate: {
			opacity: 1,
			scale: 1,
			x: -25,
			y: 82,
			transition,
		},
		exit: {
			scale: 0,
			x: 105,
			y: -75,
			opacity: 0,
			transition: {
				duration: 0.5,
			},
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
			<motion.div
				className="Navbar__menu"
				ref={menuRef}
				onClick={() => setMenuActive(!menuActive)}>
				<div className={`Navbar__menu--toggle ${menuActive ? 'active' : ''}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<AnimatePresence mode="wait">
					{menuActive && (
						<motion.nav
							// data-isopen={menuActive}
							className={`Navbar__menu--mobile ${menuActive ? 'active' : ''}`}
							initial="hidden"
							animate="animate"
							exit="exit"
							variants={mobileMenuVariant}>
							<motion.ul
								variants={menuListVariant}
								initial="hidden"
								animate="animate">
								<motion.li
									variants={listItemVariant}
									initial="hidden"
									animate="animate">
									<motion.a href="#About">
										<motion.span className="number inverted">01.</motion.span>{' '}
										About Me
									</motion.a>
								</motion.li>
								<motion.li
									variants={listItemVariant}
									initial="hidden"
									animate="animate">
									<motion.a href="#projects">
										<motion.span className="number inverted">02.</motion.span>
										Projects
									</motion.a>
								</motion.li>
								<motion.li
									variants={listItemVariant}
									initial="hidden"
									animate="animate">
									<motion.a href="#about">
										<motion.span className="number inverted">03.</motion.span>
										Contact
									</motion.a>
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
			</motion.div>
			<AnimatePresence mode="wait">
				{menuActive && (
					<div className="orbit">
						<motion.div
							className="rocket"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{
								opacity: 0,
								transition: { duration: 0.4 },
							}}>
							<motion.div className="window"></motion.div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			{menuActive && <Overlay />}
		</nav>
	);
};

export default Navbar;
