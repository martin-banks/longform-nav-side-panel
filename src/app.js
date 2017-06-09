import CONFIG from './config.json'
import CONTENT from './content/content'
import Styles from './app.sass'

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
	},
}


function partTemplate(part) {
	const { id: link, intro, title } = part.value
	const { value } = part
	return `<a 
		href="${link}"
		target="_self"
		class="${Styles.part_linkWrapper}" 
		data-type="${part.type}"
	>
		${Object.keys(value).map(key => key !== 'id' ? TEMPLATES.chapter[key](value[key]) : '').join('')}
	</a>`
}


function chapterTemplate(chapter) {
	return `<div 
		class="${Styles.sectionContainer}" 
		data-type="${chapter.type}"
		data-active="${chapter.type === navSettings.chapter}"
	>
		${chapter.parts.map(part => partTemplate(part)).join('')}
	</div>`
}


function NavContainer(content) {
	const { chapters, header } = content
	return `<section 
			class="${Styles.navContainer}"
			data-type="navcontainer"
			data-state="closed"
		>
			${chapters.map(chapter => chapterTemplate(chapter)).join('')}
	</section>`
}


APP.setAttribute('data-mobile', isMobileDevice())
APP.innerHTML = NavContainer(CONTENT)
