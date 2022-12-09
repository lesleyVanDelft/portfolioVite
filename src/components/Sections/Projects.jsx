import { useEffect, useState } from 'react';
import { projectList } from '../../data';
import ProjectsItem from './ProjectsItem';
const Projects = () => {
	const [projects, setProjects] = useState(projectList);

	useEffect(() => {
		setProjects(projectList);
	}, [projectList]);

	return (
		<section className="Projects">
			<h3 className="Projects__title">
				<span className="number">02.</span>projects
			</h3>
			<div className="Projects__content">
				{projects.map((el, i) => {
					return <ProjectsItem project={el} index={i} key={i} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
