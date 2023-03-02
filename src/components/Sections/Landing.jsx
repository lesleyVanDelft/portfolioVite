import { motion, useScroll, useTransform } from 'framer-motion';
import YellowAccent from '../YellowAccent';
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
	return (
		<motion.section
			className="Landing"
			variants={variants}
			initial="hidden"
			animate="show">
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
