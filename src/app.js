import CONFIG from './config.json'
import CONTENT from './content/content'
import Styles from './app.sass'
import * as Icons from './icons/icons'

import delegate from './functions/delegate'
import closest from './functions/closest'

function isMobileDevice() {
	const isMobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream
	// console.info({ isMobile })
	return isMobile
}

const navSettings = {
	chapter: 'princess',
	part: 'photoessay',
}

const defaultState = 'open'


const TEMPLATES = {
	header: {
		title: value => `<h3 class="${Styles.title_header}">${value}</h3>`,
		intro: value => `<h4 class="${Styles.intro_header}">${value}</h4>`,
		kicker: value => `<h6 class="${Styles.kicker_header}">${value}</h6>`,
	},
	chapter: {
		title: value => `<h3 class="${Styles.title_chapter}">${value}</h3>`,
		intro: value => `<h4 class="${Styles.intro_chapter}">${value}</h4>`,
		kicker: value => `<h6 class="${Styles.kicker_chapter}">${value}</h6>`,
		image: value => `<!--<img class="${Styles.image_chapter}" src="${value.src}" />-->`,
	},
	part: {
		title: value => `<h3 class="${Styles.title_part}">${value}</h3>`,
		intro: value => `<h4 class="${Styles.intro_part}">${value}</h4>`,
		kicker: value => `<h6 class="${Styles.kicker_part}">${value}</h6>`,
		image: value => ``,
	},
	closed: {
		title: value => `<h3 class="${Styles.title_closed}">${value}</h3>`,
		intro: value => `<h4 class="${Styles.intro_closed}">${value}</h4>`,
		kicker: value => `<h6 class="${Styles.kicker_closed}">${value}</h6>`,
		releaseDate: value => `<p class="${Styles.releaseDate_closed}">${value}</p>`,
		openButton: chapter => `<button class="${Styles.moreButton}" data-type="toggleButton" data-chapter="${chapter}">
			Show parts <img class="${Styles.moreIcon}" src="${Icons.angle_down_light}" alt="" />
		</button>`,
	},
}



function chapterFactory(chapter) {
	const STATE = {
		active: chapter.active,
		open: navSettings.chapter === chapter.type,
	}

	const SET_OPEN = value => { STATE.open = value }

	const PARTS = () => chapter.parts.map(part => {
		if (part.type === navSettings.part && chapter.type === navSettings.chapter) return ''
		const { id: link, intro, title, kicker, image } = part.value
		return `<a 
			href="${link}"
			target="_self"
			class="${Styles.part_linkWrapper}" 
			data-type="${part.type}"
		>
			${TEMPLATES.part.image(image)}
			<div class="${Styles.chapter_text_wrapper}">
				${TEMPLATES.part.kicker(kicker)}
				${TEMPLATES.part.title(title)}
				${TEMPLATES.part.intro(intro)}
				<div class="${Styles.part_linkIcon}">
					<img class="${Styles.icon_link}" src="${Icons.angle_right_dark}" alt="" />
				</div>
			</div>
		</a>`
	})

	const CHAPTER = () => `<div 
		class="${Styles.chapter_container}" 
		data-chapter="${chapter.type}"
		data-type="chapter"
		data-current="${navSettings.chapter === chapter.type}"
		data-active="${chapter.active}"
	>
		${[
			TEMPLATES.chapter.kicker(chapter.kicker),
			TEMPLATES.chapter.title(chapter.title),
			TEMPLATES.chapter.intro(chapter.intro),
		].join('')}
		${STATE.open ? PARTS() : ''}
		${!STATE.active ? TEMPLATES.closed.releaseDate(chapter.releaseDate) : ''}
		${STATE.active && !STATE.open ? TEMPLATES.closed.openButton(chapter.type) : ''}
	</div>`

	const RENDER = () => CHAPTER()

	return {
		SET_OPEN,
		RENDER,
	}
}


// const CHAPTER_FACTORIES = CONTENT.chapters.map(chapter => chapterFactory(chapter))

const CHAPTER_FACTORIES = CONTENT.chapters.reduce((prev, chapter) => {
	let UPDATE = prev
	UPDATE[chapter.type] = chapterFactory(chapter)
	return UPDATE
}, {})


console.log({ CHAPTER_FACTORIES })













// function partTemplate(part) {
// 	const { id: link, intro, title, kicker, image } = part.value
// 	const { value, type } = part
// 	return type === navSettings.part ? '' : `<a 
// 		href="${link}"
// 		target="_self"
// 		class="${Styles.part_linkWrapper}" 
// 		data-type="${part.type}"
// 	>
// 		${TEMPLATES.part.image(image)}
// 		<div class="${Styles.chapter_text_wrapper}">
// 			${TEMPLATES.part.kicker(kicker)}
// 			${TEMPLATES.part.title(title)}
// 			${TEMPLATES.part.intro(intro)}
// 			<div class="${Styles.part_linkIcon}">
// 				<img class="${Styles.icon_link}" src="${Icons.angle_right_dark}" alt="" />
// 			</div>
// 		</div>
// 	</a>`
// }

// function closedChapter(chapter) {
// 	const { title, intro, kicker, releaseDate, active } = chapter
// 	// const KEYS = Object.keys(closed)
// 	return `<div class="${Styles.closedChapter}">
// 		${TEMPLATES.closed.kicker(kicker)}
// 		${TEMPLATES.closed.title(title)}
// 		${TEMPLATES.closed.intro(intro)}
// 		${!active ? TEMPLATES.closed.releaseDate(releaseDate) : TEMPLATES.closed.openButton(chapter.type)}
// 	</div>`

// 	// return template(KEYS.map(key => TEMPLATES.closed[key](closed[key])).join(''))
// }

// function activeChapter(chapter) {
// 	const { title, intro, kicker } = chapter
// 	return [
// 		TEMPLATES.chapter.kicker(kicker),
// 		TEMPLATES.chapter.title(title),
// 		TEMPLATES.chapter.intro(intro),
// 		chapter.parts.map(part => partTemplate(part)).join(''),
// 	].join('')
// }


// function chapterTemplate(chapter) {
// 	const current = chapter.type === navSettings.chapter
// 	return `<div 
// 		class="${Styles.chapter_container}" 
// 		data-chapter="${chapter.type}"
// 		data-type="chapter"
// 		data-current="${current}"
// 		data-active="${chapter.active}"
// 	>
// 		${current ? activeChapter(chapter) : closedChapter(chapter)}
// 	</div>`
// }


function NavContainer(content) {
	// const { chapters, header } = content
	return `<section 
			class="${Styles.navContainer}"
			data-type="navcontainer"
			data-state="${defaultState}"
			data-theme="${CONFIG.theme}"
		>
			<div class="${Styles.nav_icon}" data-type="navbutton">
				<img src="${CONFIG.theme === 'light' ? Icons.angle_right_dark : Icons.angle_right_light}" alt="" />
			</div>
			<div class="${Styles.nav_content}">${content}</div>
	</section>`
}

function renderNav(into) {
	const content = Object.keys(CHAPTER_FACTORIES).map(key => CHAPTER_FACTORIES[key].RENDER()).join('')
	into.innerHTML = NavContainer(content)
}

window.onload = function() {
	// const APP = document.querySelector('.w_header-fixed')
	const APP = document.querySelector(`#${CONFIG.projectName}`)

	APP.setAttribute('data-mobile', isMobileDevice())
	// APP.innerHTML = NavContainer(CONTENT)
	renderNav(APP)

	delegate(`#${CONFIG.projectName}`, 'click', '[data-type="toggleButton"]', toggleChapters)
	delegate(`#${CONFIG.projectName}`, 'click', '[data-type="navbutton"]', toggleMenu)

	// const BUTTON = NAV.querySelector('[data-type="navbutton"]')
	const article = document.querySelector('#content-wrapper')
	if (article) {
		article.style.transition = 'transform 500ms'
		article.style.background = '#fff'
		article.style.transformOrigin = 'left'
	}

	function toggleMenu(e) {
		const NAV = APP.querySelector('[data-type="navcontainer"]')
		const state = NAV.getAttribute('data-state')
		document.body.style.overflow = state !== 'open' ? 'hidden' : 'scroll'
		NAV.setAttribute('data-state', state === 'open' ? 'closed' : 'open')
		if (article) {
			document.body.style.background = state !== 'open' ? '#222' : '#fff'
			article.style.transform = state !== 'open' ? 'translateX(-400px) scale(0.95)' : ''
			article.style.filter = state !== 'open' ? 'blur(5px)' : ''
			article.style.opacity = state !== 'open' ? '0.8' : '1'
		}
	}

	function toggleChapters(e) {
		const C = closest(e.target, '[data-type="chapter"]')
		Object.keys(CHAPTER_FACTORIES).forEach(key => CHAPTER_FACTORIES[key].SET_OPEN(key === C.dataset.chapter))
		// CHAPTER_FACTORIES[this.dataset.chapter].SET_OPEN(true)
		console.log('update', CHAPTER_FACTORIES)
		renderNav(APP)
	}

	document.querySelectorAll('[data-type="toggleButton"]').forEach(button => {
		button.addEventListener('click', toggleChapters)
	})
	// BUTTON.addEventListener('click', toggleMenu)
}



