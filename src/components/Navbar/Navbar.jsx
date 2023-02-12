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
	const menuVariant = {
		visible: {
			opacity: 1,
			translateY: 72,
			translateX: -25,
		},
		hidden: {
			opacity: 0,
			translateY: -92,
			translateX: 120,
		},
	};

	const item = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
		transition: {
			duration: 1,
		},
	};

	const orbitVariant = {
		initial: {
			rotate: -170,
		},

		visible: {
			rotate: 120,
			transition: {
				duration: 10,
				repeat: Infinity,
				ease: 'linear',
			},
		},
	};
	const rocketVariant = {
		initial: {
			rotate: 36,
		},

		// visible: {
		// 	rotate: 120,
		// 	transition: {
		// 		duration: 9,
		// 		repeat: Infinity,
		// 		ease: 'linear',
		// 	},
		// },
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
			<div
				className="Navbar__menu"
				ref={menuRef}
				onClick={() => setMenuActive(!menuActive)}>
				<div className={`Navbar__menu--toggle ${menuActive ? 'active' : ''}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<AnimatePresence>
					{menuActive && (
						<motion.nav
							data-isopen={menuActive}
							className={`Navbar__menu--mobile ${menuActive ? 'active' : ''}`}
							initial="hidden"
							animate="visible"
							exit={'hidden'}
							variants={menuVariant}>
							<motion.ul>
								<motion.li variants={item}>
									<motion.a href="#About">
										<motion.span className="number inverted">01.</motion.span>{' '}
										About Me
									</motion.a>
								</motion.li>
								<motion.li variants={item}>
									<motion.a href="#projects">
										<motion.span className="number inverted">02.</motion.span>
										Projects
									</motion.a>
								</motion.li>
								<motion.li variants={item}>
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
			</div>
			{menuActive && (
				<AnimatePresence>
					<motion.div
						className="orbit"
						// variants={orbitVariant}
						// initial="initial"
						// animate="visible"
					>
						<motion.div
							className="rocket"
							// variants={rocketVariant}
							// initial={'initial'}
						>
							<motion.div className="window"></motion.div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
			{menuActive && <Overlay />}
		</nav>
	);
};

export default Navbar;
