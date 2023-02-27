import Blob1 from '../SvgImages/Blob1';
import Blob2 from '../SvgImages/Blob2';

const ProjectsItem = ({ project }) => {
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
				<button className="btnPrimary">Live Site</button>
				<button className="btnPrimary">View Code</button>
			</div>

			<Blob1 />
			<Blob2 />
		</article>
	);
};

export default ProjectsItem;
