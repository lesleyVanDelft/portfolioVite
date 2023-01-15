const About = ({ refProps, scrollToProjects }) => {
	return (
		<section className="About" ref={refProps} id={'About'}>
			<h3 className="About__title pageTitle">
				<span className="number">01.</span>
				<p>About Me</p>
			</h3>
			<div className="About__content">
				<p>
					After working several jobs in the transport and logistics industry, I
					realized I wanted to work somewhere a bit more mentally stimulating.
					Something that allowed creativity as well as critical thinking and
					problem solving.{' '}
				</p>
				<p>
					After reading a post on Reddit about someone becoming a self-taught
					developer, I suddenly remembered that in my teenage years I used to
					make small websites for fun and I really enjoyed doing that. And so
					after doing a lot of research, I came to the conclusion that I really
					wanted to become a front end developer.
				</p>
				<p>
					I enjoy working with React especially. Learning new languages or
					frameworks is something I really enjoy. I finally found my true
					passion; making beautiful interactive, animated, responsive websites.
				</p>
				<button
					className="Landing__content--button btnPrimary"
					onClick={() => scrollToProjects()}>
					Projects &#8595;
				</button>
			</div>
		</section>
	);
};

export default About;
