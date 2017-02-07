var parallax = document.querySelector('.circle'), speed = 0.1;


// Scroll functionality
window.onscroll = function() {
	var windowYOffset = window.pageYOffset,
	  elBackgroundPos = (windowYOffset * speed) + 'px';

	parallax.style.backgroundPosition = elBackgroundPos;
};

const downBtn = document.querySelector('#downBtn');
const upBtn = document.querySelector('#upBtn');

downBtn.addEventListener('click', function() {
	$('#aboutMe').scrollintoview({
		duration: 1000,
		direction: 'vertical'
	});
});

upBtn.addEventListener('click', function() {
	$('body').scrollintoview({
		duration: 1000,
		direction: 'vertical'
	});
});

// Skills
const skillsArea = document.querySelectorAll('.skills-area');
const topBars = document.querySelector('#topBars');
const bottomBars = document.querySelector('#bottomBars');

skillsArea.forEach((item) => item.addEventListener('click', () => {
	let bar;
	const area = item.children[0].id;

	if (item.parentElement.className === 'row') {
		bar = topBars;
	} else {
		bar = bottomBars;
	}
	showSkills(bar, area);
}));

function showSkills(bar, area) {
	let i;
	const array = Array.from(bar.children);

	switch(area) {
		case 'html':		i = 10; break;
		case 'css':			i = 8; 	break;
		case 'javascript': 	i = 8; 	break;
		case 'jquery':		i = 8; 	break;
		case 'php': 		i = 6; 	break;
		case 'react': 		i = 5; 	break;
		case 'bootstrap': 	i = 7; 	break;
		case 'wordpress': 	i = 1; 	break;
		case 'sass': 		i = 1; 	break;
		case 'scrum': 		i = 10; break;
		default: 			i = 10;
	}

	array.forEach((child, idx) => {
		if (idx >= i) {
			child.className = "";
		} else {
			child.className = area;
		}
	});
}