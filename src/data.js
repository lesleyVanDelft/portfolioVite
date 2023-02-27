import imageDesigno from './assets/img/officialThumbnail2.png';
// import imageDesigno from './assets/img/type1designo.png';
import mockupSpaceTourism from './assets/img/spacetourism.png';
import mockupPhotosnap from './assets/img/mockupPhotoSnap.png';
import mockupFeedback from './assets/img/mockupFeedback.png';

export const projectList = [
	{
		title: 'Feedback Board',
		tech: ['React', 'Sass', 'Node', 'Express'],
		image: mockupFeedback,
		description:
			'A full stack website made with the MERN stack. I learned a lot about the basics of Node and Express. I also learned a lot about how to properly use Redux and localStorage. It seemed daunting at first, and it was really confusing at the start, but then it became something I could not work without.',
	},
	{
		title: 'Space Tourism',
		tech: ['React', 'Sass'],
		image: mockupSpaceTourism,
		description:
			'A fun static website using React and React Router. Making the sliders and carousels increased my understanding of JavaScript quite a bit. I was surprised by how the simple things are often the hardest to execute properly.',
	},
	{
		title: 'Designo',
		tech: ['React', 'Sass'],
		image: imageDesigno,
		description:
			'A static website using React. I learned to work with Framer Motion to create fast and smooth animations. Making this project I also learned how to implement and work with the Google Maps API.',
	},
	{
		title: 'PhotoSnap',
		tech: ['React', 'Sass'],
		image: mockupPhotosnap,
		description:
			'Another fun static website made with React. This project made me fall in love with animations. Good usage of animations can make or break a website. I also learned about the checkbox toggle trick, where you hide the actual checkbox but style the label instead. which was more complex than I thought. It was a very useful CSS learning experience.',
		linkGithub: 'https://github.com/lesleyVanDelft/PhotoSnap',
		linkLive: '',
	},
];
