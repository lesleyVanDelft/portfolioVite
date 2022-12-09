const ProjectsItem = ({ project, index }) => {
	return (
		<article className="Projects__item">
			<h4 className="Projects__item--title">{project.title}</h4>
			<figure className="Projects__item--image">
				<img src={project.image} alt="" />
				<p className="Projects__item--description">{project.description}</p>
			</figure>
		</article>
	);
};

export default ProjectsItem;
