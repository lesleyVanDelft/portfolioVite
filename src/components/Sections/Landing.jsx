import blobSvg from '../../assets/img/blobanimation.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import YellowAccent from '../YellowAccent';
import pageTransitionImg from '../../assets/img/pageTransition.png';
import sunSvg from '../../assets/sunSvg.svg';
import blob from '../../assets/blobanimation.svg';
// import mountainSvg from '../../assets/moonMountain.svg';
// import mountainLandscapeSvg from '../../assets/svg/mountainLandscape.svg';
import mountainLandscapeSvg from '../../assets/svg/mountainSvg.svg';
import planetSvg from '../../assets/svg/planetSvg.svg';
import SunSvg from '../SunSvg';
import BlobSvg from '../BlobSvg';
import Content from '../SectionComponents/Content';
import Planet from '../SvgImages/PlanetSvg';

const variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
};

const Landing = ({ scrollToAbout }) => {
	const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({ target: ref });
	// const y = useParallax(scrollYProgress, 300);

	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll(ref);
	return (
		<motion.section
			className="Landing"
			variants={variants}
			initial="hidden"
			animate="show">
			{/* <motion.div className="Landing__content">
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<YellowAccent> front end developer</YellowAccent> and I love making
					beautiful websites.
				</p>

				<div className="Landing__images"></div>
			</motion.div> */}
			<Content name={'Landing'}>
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<YellowAccent> front end developer</YellowAccent> and I love making
					beautiful websites.
				</p>
				<div className="Landing__planet">
					<Planet />
					{/* <button className="btnCta landing">about</button> */}
				</div>
				{/* <button className="btnCta landing">About me</button> */}
			</Content>
			{/* <img src={mountainLandscapeSvg} className="mountain" alt="aa" /> */}
		</motion.section>
	);
};

export default Landing;
