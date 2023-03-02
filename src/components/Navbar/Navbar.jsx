import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMenuMobile from './NavbarMenuMobile';
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
					{menuActive && <NavbarMenuMobile />}
				</AnimatePresence>
			</motion.div>
			{/* <AnimatePresence mode="wait">
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
				)} */}
			{/* </AnimatePresence> */}
			{menuActive && <Overlay />}
		</nav>
	);
};

export default Navbar;
