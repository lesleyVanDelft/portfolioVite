import { useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
	const handleClick = e => {
		if (!ref.current?.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		document.addEventListener('touchstart', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('touchstart', handleClick);
		};
	});
};
