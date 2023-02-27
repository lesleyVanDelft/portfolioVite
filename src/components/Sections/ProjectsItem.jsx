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
				<button className="btnPrimary">Live Site</button>
				<button className="btnPrimary">View Code</button>
			</div>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 500 500"
				width="100%"
				id="blobSvg"
				style={{ opacity: 1 }}
				transform="rotate(82)"
				filter="blur(0px)">
				{' '}
				<defs>
					{' '}
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						{' '}
						<stop offset="0%" style={{ stopColor: '#ffff00 ' }}></stop>{' '}
						<stop offset="100%" style={{ stopColor: '#d400ff' }}></stop>{' '}
					</linearGradient>{' '}
				</defs>{' '}
				<path id="blob" fill="url(#gradient)" style={{ opacity: 0.267 }}>
					<animate
						attributeName="d"
						dur="25s"
						repeatCount="indefinite"
						values="M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z"></animate>
				</path>
			</svg>
		</article>
	);
};

export default ProjectsItem;
