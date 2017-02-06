var parallax = document.querySelector('.circle'), speed = 0.1;

window.onscroll = function() {
	var windowYOffset = window.pageYOffset,
	  elBackgroundPos = (windowYOffset * speed) + 'px';

	parallax.style.backgroundPosition = elBackgroundPos;
};

const downBtn = document.getElementById('downBtn');
const upBtn = document.getElementById('upBtn');

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