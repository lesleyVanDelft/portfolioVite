const ProjectsItem = ({ project, index }) => {
	return (
		<article className="Projects__item">
			<h4 className="Projects__item--title">{project.title}</h4>
			<div className="Projects__item--technologies">
				{project.tech?.map((el, i) => {
					return <p key={i}>{el}</p>;
				})}
			</div>
			<figure className="Projects__item--image">
				<img src={project.image} alt="" />
			</figure>
			<p className="Projects__item--description">{project.description}</p>
		</article>
	);
};

export default ProjectsItem;
