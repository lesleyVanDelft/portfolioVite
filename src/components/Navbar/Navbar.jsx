import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const list = {
		visible: {
			opacity: 1,
			height: 500,
			width: 500,
			// transition: {
			// 	duration: 0.1,
			// 	type: 'spring',
			// 	stiffness: 70,
			// },
		},
		hidden: { opacity: 0, height: 0, width: 0 },
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
						<motion.ul
							className="NavbarMenu"
							initial="hidden"
							animate="visible"
							exit={'hidden'}
							variants={list}>
							<motion.li variants={item}>1</motion.li>
							<motion.li variants={item}>2</motion.li>
							<motion.li variants={item}>3</motion.li>
						</motion.ul>
					)}
				</AnimatePresence>
				{/* {menuActive && (
					<motion.ul className="NavbarMenu">
						<motion.li>1</motion.li>
						<motion.li>2</motion.li>
						<motion.li>3</motion.li>
					</motion.ul>
				)} */}
			</div>
		</nav>
	);
};

export default Navbar;
