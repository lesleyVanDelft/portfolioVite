const Contact = () => {
	return (
		<section className="Contact">
			<h3 className="Contact__title pageTitle">
				<span className="number">01.</span>
				<p>Contact Me</p>
			</h3>
			<form
				className="Contact"
				name="contactForm"
				method="POST"
				data-netlify="true"
				onSubmit="submit">
				<input type="hidden" name="form-name" value="contactForm" />
				<div className="Contact__container">
					<label htmlFor="name">Your name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Please enter your name"
					/>
				</div>
				<div className="Contact__container">
					<label htmlFor="message">Message</label>
					<textarea
						cols="10"
						rows="5"
						maxLength={1000}
						required={true}
						autoComplete="off"
						name="message"
						id="message"
						placeholder="Please share your thoughts..."
					/>
				</div>
				<button type="submit" className="btnCta">
					Send message
				</button>
			</form>
		</section>
	);
};

export default Contact;
