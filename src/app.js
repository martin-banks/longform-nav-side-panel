import CONFIG from './config.json'
import CONTENT from './content/content'
import Styles from './app.sass'
import * as ICONS from './icons/icons'

function isMobileDevice() {
	const isMobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream
	// console.info({ isMobile })
	return isMobile
}

const navSettings = {
	chapter: 'princess',
	part: 'photoessay',
}


const APP = document.querySelector(`#${CONFIG.projectName}`)

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
		image: value => `<img class="${Styles.image_chapter}" src="${value.src}" />`,
	},
	closed: {
		title: value => `<h3 class="${Styles.title_closed}">${value}</h3>`,
		intro: value => `<h4 class="${Styles.intro_closed}">${value}</h4>`,
		kicker: value => `<h6 class="${Styles.kicker_closed}">${value}</h6>`,
	},
}


function partTemplate(part) {
	const { id: link, intro, title, image } = part.value
	const { value, type } = part
	return type === navSettings.part ? '' : `<a 
		href="${link}"
		target="_self"
		class="${Styles.part_linkWrapper}" 
		data-type="${part.type}"
	>
		${TEMPLATES.chapter.image(image)}
		<div class="${Styles.chapter_text_wrapper}">
			${TEMPLATES.chapter.title(title)}
			${TEMPLATES.chapter.intro(intro)}
			<div class="${Styles.part_linkIcon}"></div>
		</div>

	</a>`
}

function closedChapter(closed) {
	const KEYS = Object.keys(closed)
	const template = value => `<div class="${Styles.closedChapter}">
		${value}
	</div>`

	return template(KEYS.map(key => TEMPLATES.closed[key](closed[key])).join(''))
}


function chapterTemplate(chapter) {
	const active = chapter.type === navSettings.chapter
	return `<div 
		class="${Styles.chapter_container}" 
		data-type="${chapter.type}"
		data-active="${active}"
	>
		${active ? chapter.parts.map(part => partTemplate(part)).join('') : closedChapter(chapter.closed)}
	</div>`
}


function NavContainer(content) {
	const { chapters, header } = content
	return `<section 
			class="${Styles.navContainer}"
			data-type="navcontainer"
			data-state="open"
		>
			<div class="${Styles.nav_icon}" data-type="navbutton">
				<img src="${ICONS.angle_right_dark}" alt="" />
			</div>
			<div class="${Styles.nav_content}">${chapters.map(chapter => chapterTemplate(chapter)).join('')}</div>
	</section>`
}


APP.setAttribute('data-mobile', isMobileDevice())
APP.innerHTML = NavContainer(CONTENT)

const NAV = APP.querySelector('[data-type="navcontainer"]')
const BUTTON = NAV.querySelector('[data-type="navbutton"]')

function toggleMenu(e) {
	const nav = this.parentNode
	const state = nav.getAttribute('data-state')
	nav.setAttribute('data-state', state === 'open' ? 'closed' : 'open')
}

BUTTON.addEventListener('click', toggleMenu)
