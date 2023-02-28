import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Blob1 from '../SvgImages/Blob1';
import Blob2 from '../SvgImages/Blob2';

const ProjectsItem = ({ project }) => {
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.article
			className="Projects__item"
			initial={{ x: -200, opacity: 0 }}
			whileInView={() => {
				setIsInView(true);
				return {};
			}}
			animate={
				isInView && {
					x: 0,
					opacity: 1,
					transition: {
						type: 'spring',
						duration: 1,
						bounce: 0.2,
						delay: 0.2,
					},
				}
			}>
			<h4 className="Projects__item--title">{project.title}</h4>
			<div className="Projects__item--technologies">
				{project.tech?.map((el, i) => {
					return (
						<span key={i} className={`tech`}>
							{el}
						</span>
					);
				})}
			</div>
			<figure className="Projects__item--image">
				<img src={project.image} alt="" />
			</figure>
			<p className="Projects__item--description">{project.description}</p>

			<div className="Projects__item--buttons">
				<button className="btnPrimary">Live Site</button>
				<button className="btnPrimary">View Code</button>
			</div>

			<Blob1 />
			<Blob2 />
		</motion.article>
	);
};

export default ProjectsItem;
