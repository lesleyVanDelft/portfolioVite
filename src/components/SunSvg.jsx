import { useEffect, useState } from 'react';

const SunSvg = () => {
	const [duration, setDuration] = useState(1);
	const [radius, setRadius] = useState('0');

	useEffect(() => {
		const timeout = setTimeout(() => {
			duration < 10 && setDuration(duration + 1);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [duration]);

	return (
		<>
			{/* <p style={{ color: 'red' }}>{duration}</p> */}
			<svg
				width="437"
				height="437"
				viewBox="0 0 443 441"
				fill="rgba(56, 56, 56, 0.01)"
				xmlns="http://www.w3.org/2000/svg"
				id="SunSvg">
				{duration}
				<g id="Sun">
					<g id="centerCircle" filter="url(#filter0_d_6_17)">
						<circle
							cx="221.5"
							cy="220.5"
							r="77.5"
							stroke="#FFE600"
							strokeWidth="5"
						/>
					</g>
					<g id="mainBeams">
						<path
							id="Polygon 1"
							d="M222 0L228.928 143.25H215.072L222 0Z"
							fill="rgba(255, 236, 66, 0.7)"
						/>
						<path
							id="Polygon 2"
							d="M222 440L215.072 296.75L228.928 296.75L222 440Z"
							fill="rgba(255, 236, 66, 0.7)"
						/>
						<path
							id="Polygon 3"
							d="M443 221L299.75 227.928L299.75 214.072L443 221Z"
							fill="rgba(255, 236, 66, 0.7)"
						/>
						<path
							id="Polygon 4"
							d="M-3.49691e-07 221L143.25 214.072L143.25 227.928L-3.49691e-07 221Z"
							fill="rgba(255, 236, 66, 0.7)"
						/>
					</g>
					<g id="smallBeams">
						<path
							id="Polygon 1_2"
							className="1"
							d="M341.645 101.664L272.616 163.82L278.937 170.192L341.645 101.664Z"
							fill="rgba(255, 236, 66, 0.3)"
						/>
						<path
							id="Polygon 3_2"
							className="2"
							d="M99.6759 99.81L162.611 168.13L168.911 161.737L99.6759 99.81Z"
							fill="rgba(255, 236, 66, 0.3)"
						/>
						<path
							id="Polygon 2_2"
							className="3"
							d="M102.412 339.371L172.023 277.868L165.763 271.437L102.412 339.371Z"
							fill="rgba(255, 236, 66, 0.3)"
						/>
						<path
							id="Polygon 4_2"
							className="4"
							d="M342.673 342.596L280.24 273.817L273.894 280.163L342.673 342.596Z"
							fill="rgba(255, 236, 66, 0.3)"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_d_6_17"
						x="0"
						y="0"
						width="441"
						height="441"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>

						{/* Radius change needed */}
						<feMorphology
							radius="16"
							operator="dilate"
							in="SourceAlpha"
							result="effect1_dropShadow_6_17"
						/>
						<feOffset />

						{/* stdDeviation change needed */}
						<feGaussianBlur stdDeviation="62.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 0.925833 0 0 0 0 0.258333 0 0 0 1 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_6_17"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_6_17"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

export default SunSvg;
