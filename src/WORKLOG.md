# Worklog

## Implement factory functions

Create each chapter as a factory.

for Content
	for each chapter
		NEW FACTORY
			save template innactive state
			save template active - closed state
			for each part
				save template content

Create initial render state
	for each chapter
		check if active || current
		call appropriate tempalte from chapter factory
		join

get app container
	render to dom

get open/close button
	Add event listener - toggle nav

get nav container
	add event delegate - toggle chapter
		get parent chapter
			if !active - return
			if active && closed
				get parts template from factory and render
				remove button
			else 
				remove parts content
				get button template
				render buton to chpater
		
