import Image from './images/16_9.jpg'

const CONTENT = {
	header: {
		kicker: 'Nav title',
		title: 'Nav title',
		intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sapiente suscipit quasi molestiae sit error',
	},

	chapters: [
		{
			type: 'motherhood',
			closed: {
				title: 'This is the closed chapter title',
				intro: 'Closed chapter intro',
			},
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'comment',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'gallery',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			type: 'princess',
			closed: {
				title: 'This is the closed chapter title',
				intro: 'Closed chapter intro',
			},
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'comment',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'gallery',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			type: 'family',
			closed: {
				title: 'This is the closed chapter title',
				intro: 'Closed chapter intro',
			},
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'comment',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'gallery',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			type: 'fashion',
			closed: {
				title: 'This is the closed chapter title',
				intro: 'Closed chapter intro',
			},
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'comment',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
				{
					type: 'gallery',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter
	],

}

export default CONTENT
