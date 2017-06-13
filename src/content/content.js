import Image from './images/16_9.jpg'

const CONTENT = {
	header: {
		kicker: 'Nav title',
		title: 'Nav title',
		intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sapiente suscipit quasi molestiae sit error',
	},

	chapters: [
		{
			active: true,
			type: 'motherhood',
			kicker: 'Part 1',
			title: 'Motherhood',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Sunday 23 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter




		{
			active: true,
			type: 'princess',
			kicker: 'Part 2',
			title: 'People\'s princess',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Monday 24 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#photoessay',
						kicker: 'Anrew Article',
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
						id: '#comment',
						kicker: 'Anrew Morton',
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
						id: '#gallery',
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			active: false,
			type: 'family',
			kicker: 'Part 3',
			title: 'Family, friends and confidantes',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Tuesday 25 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Anrew Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			active: false,
			type: 'fashion',
			kicker: 'Part 4',
			title: 'Style icon',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Wednesday 26 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Anrew Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			active: false,
			type: 'fashion',
			kicker: 'Part 5',
			title: 'Philanthropist',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Thursday 27 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Anrew Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			active: false,
			type: 'fashion',
			kicker: 'Part 6',
			title: 'The firm',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Friday 28 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Anrew Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter

		{
			active: false,
			type: 'fashion',
			kicker: 'Part 7',
			title: 'Romance',
			intro: 'Closed chapter intro',
			releaseDate: 'Available on Saturday 29 July',
			parts: [
				{
					type: 'photoessay',
					value: {
						image: {
							src: Image,
							alt: 'alt text here',
						},
						id: '#',
						kicker: 'Anrew Article',
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
						kicker: 'Anrew Morton',
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
						kicker: 'In Pictures',
						title: 'Title of the article',
						intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda impedit.',
					},
				},
			],
		}, // end of chapter
	],

}

export default CONTENT
