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
		description: 'A simple static site using React number 2. ',
	},
	{
		title: 'Designo',
		tech: ['React', 'Sass'],
		image: imageDesigno,
		description:
			'A simple static site using React. This was my first time implementing Google Maps into a website. ',
	},
	{
		title: 'PhotoSnap',
		tech: ['React', 'Sass'],
		image: mockupPhotosnap,
		description: 'A simple static site using React number 3.  ',
		linkGithub: 'https://github.com/lesleyVanDelft/PhotoSnap',
		linkLive: '',
	},
];
