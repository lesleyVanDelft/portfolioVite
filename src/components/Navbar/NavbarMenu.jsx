import { motion } from 'framer-motion';

const NavbarMenu = () => {
	const list = {
		visible: {
			opacity: 1,
			height: 650,
			width: 650,
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
				staggerChildren: 0.01,
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
		<motion.ul
			className="Navbar__menu--mobile"
			initial="hidden"
			animate="visible"
			exit={'hidden'}
			variants={list}>
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
	);
};

export default NavbarMenu;
