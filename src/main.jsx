import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<form name="contact" method="post" netlify="true" hidden>
			<input type="hidden" name="form-name" value="contact" />
			<p>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message"></textarea>
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
		<App />
	</React.StrictMode>
);
