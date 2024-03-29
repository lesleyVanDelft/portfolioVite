import { useEffect, useState } from 'react';
import { redirect } from 'react-router';

const Contact = () => {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [formData, setFormData] = useState({});

	const encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encodeURI({ 'form-name': 'contactForm', ...formData }),
		})
			.then(() => alert('/thanks/'))
			.catch(error => alert(error));

		e.preventDefault();
	};

	// const handleChange = e => {
	// 	setFormData({ [e.target.name]: e.target.value });
	// };

	// useEffect(() => {
	// 	setFormData()
	// },[])
	return (
		<section className="Contact">
			<h3 className="Contact__title pageTitle">
				<span className="number">01.</span>
				<p>Contact Me</p>
			</h3>
			<form
				name="contactForm"
				method="post"
				action="/"
				data-netlify="true"
				onSubmit={handleSubmit}>
				<input type="hidden" name="form-name" value="contactForm" />
				<div className="Contact__container">
					<label htmlFor="name">Your name</label>
					<input
						type="text"
						// action="/pages/FormSuccess"
						name="name"
						id="name"
						placeholder="Please enter your name"
						// onChange={handleChange}
						onChange={e => setName(e.target.value)}
						value={name}
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
						// onChange={handleChange}
						onChange={e => setMessage(e.target.value)}
						value={message}
					/>
				</div>
				<button type="submit" className="btnCta">
					Submit
				</button>
				{/* <button type="submit" className="btnCta">
					Send message
				</button> */}
			</form>
		</section>
	);
};

export default Contact;
