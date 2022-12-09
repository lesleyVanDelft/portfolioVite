const Landing = () => {
	return (
		<div className="Landing">
			{/* <h2>landing page</h2> */}

			<div className="Landing__content">
				<h3 className="Landing__content--welcome">Hi there!</h3>
				<h2 className="Landing__content--name">My name is Lesley.</h2>
				<p className="Landing__content--description">
					I am a junior
					<span className="accentYellow"> front end developer</span> and I love
					making beautiful websites.
				</p>

				<button className="Landing__content--button btnPrimary">
					About me &#8595;
				</button>
			</div>
		</div>
	);
};

export default Landing;
