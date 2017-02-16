var parallax = document.querySelector('.circle'), speed = 0.1;


// Scroll functionality
window.onscroll = function() {
	var windowYOffset = window.pageYOffset,
	  elBackgroundPos = (windowYOffset * speed) + 'px';

	parallax.style.backgroundPosition = elBackgroundPos;
};

const downBtn = document.querySelector('#downBtn');
// const upBtn = document.querySelector('#upBtn');

downBtn.addEventListener('click', function() {
	$('#aboutMe').scrollintoview({
		duration: 1000,
		direction: 'vertical'
	});
});

// upBtn.addEventListener('click', function() {
// 	$('body').scrollintoview({
// 		duration: 1000,
// 		direction: 'vertical'
// 	});
// });

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
			child.className = '';
		} else {
			child.className = area;
		}
	});
}

// Portfolio
let portfolioLarge = document.querySelector('.portfolio-large');
let portfolioSmallLeft = document.getElementById('leftmost');
let portfolioSmallRight = document.getElementById('rightmost');

cacheAndBind();

function cacheAndBind() {
	portfolioLarge = document.querySelector('.portfolio-large');
	portfolioSmallLeft = document.getElementById('leftmost');
	portfolioSmallRight = document.getElementById('rightmost');
	portfolioSmallLeft.addEventListener('click', rotateLeft);
	portfolioSmallRight.addEventListener('click', rotateRight);
}

function rotateLeft() {
	portfolioSmallLeft.removeEventListener('click', rotateLeft);
	portfolioSmallRight.removeEventListener('click', rotateRight);
	const that = this;
	const clsList = this.classList;
	const thisPastWork = Number(clsList[clsList.length - 1].match(/\d+/)[0]); // get the number of pastwork class of clicked element
	portfolioLarge.classList.add('small');
	portfolioSmallLeft.classList.add('gone');
	portfolioSmallRight.classList.add('large');
	setTimeout(function() {
		// This becomes itself with img index -1
		if (thisPastWork !== 1) {
			that.className = 'portfolio-small pastwork' + (thisPastWork - 1);
			that.id = 'leftmost';
		} else {
			that.className = 'portfolio-small pastwork' + (thisPastWork + 2);
			that.id = 'leftmost';
		}
		// The next element becomes the rightmost with this img index
		portfolioLarge.className = 'portfolio-small pastwork' + thisPastWork;
		portfolioLarge.id = 'rightmost';
		// The next next element becomes the large one with this img index +1
		if (thisPastWork !== 3) {
			portfolioSmallRight.className = 'portfolio-large pastwork' + (thisPastWork + 1);
			portfolioSmallRight.id = '';
		} else {
			portfolioSmallRight.className = 'portfolio-large pastwork' + (thisPastWork - 2);
			portfolioSmallRight.id = '';
		}

		cacheAndBind();
	}, 400);
}

function rotateRight() {
	portfolioSmallLeft.removeEventListener('click', rotateLeft);
	portfolioSmallRight.removeEventListener('click', rotateRight);
	const that = this;
	const clsList = this.classList;
	const thisPastWork = Number(clsList[clsList.length - 1].match(/\d+/)[0]); // get the number of pastwork class of clicked element
	portfolioLarge.classList.add('small2');
	portfolioSmallLeft.classList.add('large');
	portfolioSmallRight.classList.add('gone');
	setTimeout(function() {
		// This becomes itself with img index -1
		if (thisPastWork !== 1) {
			that.className = 'portfolio-small pastwork' + (thisPastWork - 1);
		} else {
			that.className = 'portfolio-small pastwork' + (thisPastWork + 2);
		}
		that.id = 'rightmost';
		// The previous element becomes the leftmost with this img index
		portfolioLarge.className = 'portfolio-small pastwork' + thisPastWork;
		portfolioLarge.id = 'leftmost';
		// The previous previous element becomes the large one with this img index +1
		if (thisPastWork !== 3) {
			portfolioSmallLeft.className = 'portfolio-large pastwork' + (thisPastWork + 1);
			portfolioSmallLeft.id = '';
		} else {
			portfolioSmallLeft.className = 'portfolio-large pastwork' + (thisPastWork - 2);
			portfolioSmallLeft.id = '';
		}

		cacheAndBind();
	}, 400);
}