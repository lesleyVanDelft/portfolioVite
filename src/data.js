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
		description: 'A simple static site using React number 4.  ',
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
	},
];
