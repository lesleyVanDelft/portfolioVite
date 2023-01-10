import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'https://cdn.jsdelivr.net/npm/tsparticles/+esm';
// import '../particlesSettings.json'

const Test = () => {
	const particlesInit = useCallback(engine => {
		loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(container => {
		// console.log(container);
	}, []);
	return (
		<div className="TestPage">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					particles: {
						number: {
							value: 1560,
							density: {
								enable: true,
								value_area: 2500,
							},
						},
						line_linked: {
							enable: false,
							opacity: 0.02,
						},
						move: {
							direction: 'random',
							speed: 0.05,
						},
						size: {
							value: 1.2,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1.3,
								opacity_min: 0.05,
							},
						},
						shape: {
							type: 'circle',
						},
					},
					style: {
						width: '100%',
						// height: '65%',
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
							// onhover: {
							// 	enable: true,
							// 	mode: 'connect',
							// },
						},
						modes: {
							push: {
								particles_nb: 50,
							},
							connect: {
								opacity: 0.1,
							},
						},
					},
					retina_detect: true,
				}}
			/>
			{/* <Particles
				id="tsparticles"
				// url={'particlesSettings.json'}
				init={particlesInit}
				loaded={particlesLoaded}
			/> */}
		</div>
	);
};

export default Test;
