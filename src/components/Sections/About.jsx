import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const About = ({ refProps, scrollToProjects }) => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef);

	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: i => {
			const delay = 1 + i * 0.3;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: 'spring',
						duration: 1.5,
						bounce: 0,
						ease: 'easeIn',
					},
					opacity: { delay, duration: 0.01 },
				},
			};
		},
	};

	return (
		<section className="About" ref={refProps} id={'About'}>
			<h3 className="About__title pageTitle">
				<span className="number">01.</span>
				<p>About Me</p>
			</h3>
			<div className="About__content" ref={viewRef}>
				<p>
					After working several jobs in the transport and logistics industry, I
					realized I wanted to work somewhere a bit more mentally stimulating.
					Something that allowed creativity as well as critical thinking and
					problem solving.{' '}
				</p>
				<p>
					After succesfully teaching myself everything needed, I could start
					doing what I love most; making fast, beautiful websites.
				</p>
				{/* <p>
					After reading a post on Reddit about someone becoming a self-taught
					developer, I suddenly remembered that in my teenage years I used to
					make small websites for fun and I really enjoyed doing that. And so
					after doing a lot of research, I came to the conclusion that I really
					wanted to become a front end developer.
				</p> */}
				<p>
					{/* I enjoy working with React especially.  */}
					Below are some examples of some of the projects I created, please
					check them out!
					{/* Learning new languages or
					frameworks is something I really enjoy. */}
					{/* I finally found my true
					passion; making beautiful interactive, animated, responsive websites. */}
				</p>

				<motion.svg
					width="250px"
					height="250px"
					viewBox="0 0 500 600"
					initial="hidden"
					animate={`${isInView ? 'visible' : ''}`}>
					<motion.circle
						cx="65%"
						cy="50%"
						r="40%"
						stroke="var(--color-main-1)"
						strokeWidth={8}
						fill={'none'}
						variants={draw}
						custom={1}
					/>
					<foreignObject width={'100%'} height={'50%'} x={'17%'} y={'23%'}>
						<button
							className="About__content--button btnCta"
							onClick={() => scrollToProjects()}>
							Projects &#8595;
						</button>
					</foreignObject>
				</motion.svg>
			</div>
		</section>
	);
};

export default About;
