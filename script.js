/* Flickity */
const portfolioInfo = document.querySelector('#portfolioInfo');

const portfolioText = {
	init: `
		<h3>past work</h3>
        <p>Here are some of the things I've worked on in the past. Click on one to open it in a new tab.</p>
	`,
	tile: `
    	<h3><a href="http://krokben.se" target="_blank">tile game</a></h3>
        <p>A simple little game I made where you click tiles until they form 3 vertical lines.</p>
    `,
    memory: `
    	<h3><a href="http://krokben.se" target="_blank">memory game</a></h3>
        <p>A simple memory game made with vanilla js. Focus is on good, intuitive design.</p>
    `,
	geten: `
		<h3><a href="http://krokben.se" target="_blank">den glada geten</a></h3>
        <p>A team project at KYH. Together we made a website for a fictional bed & breakfast.</p>
    `,
    hangman: `
		<h3><a href="http://krokben.se" target="_blank">hangman</a></h3>
        <p>A silly litte Hangman game with rudimentary pictures drawn in Paint.</p>
    `
}

const flkty = new Flickity( '.carousel', {
	// options
	cellAlign: 'left',
	contain: true,
	freeScroll: true,
	wrapAround: true,
	pageDots: false
});

flkty.on('select', function() {
	switch(flkty.selectedIndex) {
		case 1:
			portfolioInfo.innerHTML = portfolioText.tile;
			break;
		case 2:
			portfolioInfo.innerHTML = portfolioText.memory;
			break;
		case 3:
			portfolioInfo.innerHTML = portfolioText.geten;
			break;
		case 4:
			portfolioInfo.innerHTML = portfolioText.hangman;
			break;
		default:
			portfolioInfo.innerHTML = portfolioText.init;
	}
});

const Sidenav = (function() {
	/* Sidenav */
	const body = document.querySelector('body');
	const trigram = document.querySelector('#trigram');
	const trigramExit = document.querySelector('.trigram');
	const container = document.querySelector('#container');
	const sidenav = document.querySelector('#sidenav');

	trigram.addEventListener('click', toggleSidenav);
	trigramExit.addEventListener('click', toggleSidenav);

	function toggleSidenav() {
		if (sidenav.className !== 'active') {
			container.className = 'active';
			sidenav.className = 'active';
	    	body.style.overflow = 'hidden';
	    	trigram.className = 'hidden';
	    	trigramExit.id = 'show';
		} else {
			container.className = '';
			sidenav.className = '';
	    	body.style.overflow = 'initial';
	    	trigram.className = '';
	    	trigramExit.id = '';
		}
	}

	return {
		trigram,
		trigramExit
	}
})();

/* Scroll functionality */
const parallax = document.querySelector('.circle'), speed = 0.1;
const body = document.querySelector('body');
const sidenav = document.querySelector('#sidenav');
const container = document.querySelector('#container');

window.onscroll = function() {
	var windowYOffset = window.pageYOffset,
	  elBackgroundPos = (windowYOffset * speed) + 'px';

	parallax.style.backgroundPosition = elBackgroundPos;
};

// Links
const downBtn = document.querySelector('#downBtn');

const homeLink = document.querySelectorAll('.home');
const aboutLink = document.querySelectorAll('.about');
const skillsLink = document.querySelectorAll('.skills');
const portfolioLink = document.querySelectorAll('.portfolio');
const contactLink = document.querySelectorAll('.contact');

// Locations
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');

// Event listeners
downBtn.addEventListener('click', () => scrollTo(about));
homeLink.forEach((x) => x.addEventListener('click', () => scrollTo(home)));
aboutLink.forEach((x) => x.addEventListener('click', () => scrollTo(about)));
skillsLink.forEach((x) => x.addEventListener('click', () => scrollTo(skills)));
portfolioLink.forEach((x) => x.addEventListener('click', () => scrollTo(portfolio)));
contactLink.forEach((x) => x.addEventListener('click', () => scrollTo(contact)));

function scrollTo(location) {
	if (sidenav.className === 'active') {
		sidenav.className = 'inactive';
		container.className = 'inactive'; // turn off transition
		body.style.overflow = 'initial';
		Sidenav.trigram.className = '';
		Sidenav.trigramExit.id = '';
		window.smoothScroll(location);
	} else {
		window.smoothScroll(location, 1000); // 1 sec scroll
	}
	container.className = 'pre-active'; // turn on transition
}

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
		case 'javascript': 	i = 7; 	break;
		case 'jquery':		i = 7; 	break;
		case 'php': 		i = 4; 	break;
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

/* Contact form */
const contactForm = document.querySelector('#contactForm');
const submitBtn = document.querySelector('#submitBtn');

contactForm.addEventListener('submit', submitForm, false);

function submitForm(evt) {
	evt.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

    $.ajax({
            url: 'api/message.php',
            type: 'POST',
            data: {name, email, message},
            success: function(data) {
            	if (submitBtn.className === 'error') {
            		submitBtn.className = '';
            	}
                submitBtn.value = data;
        		submitBtn.disabled = true;
            },
            error: function (req, status, err) {
                submitBtn.value = 'sorry, there was an error';
                submitBtn.className = 'error';
            }
        });
}