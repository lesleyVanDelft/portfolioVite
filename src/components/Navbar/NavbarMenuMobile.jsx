import { motion } from 'framer-motion';

const NavbarMenuMobile = () => {
	const transition = { duration: 0.5, type: 'spring' };

	const menuListVariant = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
				when: 'beforeChildren', //use this instead of delay
				staggerChildren: 0.05, //apply stagger on the parent tag
			},
		},
	};

	const listItemVariant = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition,
			// y: -100,
		},
		exit: {
			opacity: 0,
		},
	};

	const mobileMenuVariant = {
		hidden: {
			opacity: 0,
			x: 75,
			y: -150,
			transition,
		},
		animate: {
			opacity: 1,
			x: -25,
			y: 82,
			transition,
		},
		exit: {
			x: 150,
			y: -75,
			opacity: 0,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.nav
			className={`Navbar__menu--mobile`}
			initial="hidden"
			animate="animate"
			exit="exit"
			variants={mobileMenuVariant}>
			<motion.ul variants={menuListVariant} initial="hidden" animate="animate">
				<motion.li variants={listItemVariant}>
					<motion.a href="#About">
						<motion.span className="number inverted">01.</motion.span> About Me
					</motion.a>
				</motion.li>
				<motion.li variants={listItemVariant}>
					<motion.a href="#projects">
						<motion.span className="number inverted">02.</motion.span>
						Projects
					</motion.a>
				</motion.li>
				<motion.li variants={listItemVariant}>
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
			<motion.div
				className="orbit"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1.1 }}
				exit={{
					opacity: 0,
					transition: { duration: 0.4 },
				}}>
				<motion.div className="rocket">
					<motion.div className="window"></motion.div>
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};

export default NavbarMenuMobile;
