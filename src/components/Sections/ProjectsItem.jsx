const ProjectsItem = ({ project, index }) => {
	return (
		<article className="Projects__item">
			<h4 className="Projects__item--title">{project.title}</h4>
			<div className="Projects__item--technologies">
				{project.tech?.map((el, i) => {
					return (
						<p key={i} className={`tech`}>
							{el}
						</p>
					);
				})}
			</div>
			<figure className="Projects__item--image">
				<img src={project.image} alt="" />
			</figure>
			<p className="Projects__item--description">{project.description}</p>

			<div className="Projects__item--buttons">
				<button className="btnCta">Live Site</button>
				<button className="btnCta">View Code</button>
			</div>
		</article>
	);
};

export default ProjectsItem;
