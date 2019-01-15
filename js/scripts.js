/* Scroll */

var sections = document.querySelectorAll("header, section");

window.onscroll = function() {
	var scrollPos = window.scrollY + 300;
	for (var i = 0; i < sections.length; i++) {
		if (sections[i].offsetTop <= scrollPos && sections[i].offsetTop + sections[i].clientHeight > scrollPos) {
			navActive(i);
		}
	}
}

/* Menu */

function navActive(navItem) {
	var menuNavLinks = document.querySelectorAll(".main-menu li");

	for (i = 0; i < menuNavLinks.length; i++)
		menuNavLinks[i].className = "";
	menuNavLinks[navItem].className = "current-nav";
}

var navMobile = document.getElementById('nav-icon');
navMobile.addEventListener("click", toggleNav);

function toggleNav() {
	var menu = document.querySelector('.main-menu');
	menu.classList.toggle('nav-mobile');
}

/* Slider */

var sliderBgHolder = document.querySelectorAll('.slider-bg-holder');
var sliderImg = document.querySelectorAll('.slider-img');

for (var i = 0; i < sliderImg.length; i++) {
	sliderBgHolder[i].style.backgroundImage = "url(" + sliderImg[i].src + ")";
}

var indexSlide = 1;

var loading = document.querySelector("#loader.animationLoad");
loading.addEventListener("animationiteration", function() {
	displaySlide(indexSlide += 1);
});
var previousSlide = document.getElementById("previous");
previousSlide.addEventListener("click", function() {
	displaySlide(indexSlide -= 1);
});
var nextSlide = document.getElementById("next");
nextSlide.addEventListener("click", function() {
	displaySlide(indexSlide += 1);
});

function init_animationLoad() {
	var loader = document.querySelector('#loader.animationLoad');
	loader.classList.remove('animationLoad');
	loader.offsetWidth;
	loader.classList.add("animationLoad");
}

function initSlide(slides) {
	for (var i = 0; i < slides.length; i++) {
		if (slides[i].className == 'slider-item is-active')
			slides[i].classList.toggle('is-active');
	}
}

function displaySlide(n) {
	init_animationLoad();
	var slides = document.querySelectorAll('.slider-item');
	initSlide(slides);
	if (n > slides.length)
		indexSlide = 1;
	if (n < 1)
		indexSlide = slides.length;
	slides[indexSlide - 1].classList.toggle('is-active');
}

/* Portfolio */ 

var items = document.querySelectorAll('#ok li');
items[0].addEventListener("click", function() {
	toggleNavPortfolio(items, 0);
});
items[1].addEventListener("click", function() {
	toggleNavPortfolio(items, 1);
});
items[2].addEventListener("click", function() {
	toggleNavPortfolio(items, 2);
});
items[3].addEventListener("click", function() {
	toggleNavPortfolio(items, 3);
});

function toggleNavPortfolio(items, elem) {
	var current = document.querySelector('.item.current-item').classList.toggle('current-item');
	items[elem].classList.toggle('current-item');
	toggleListPortfolio(elem);
}

function toggleListPortfolio(elem) {
	var current = document.querySelector('#items-portfolio li.is-active').classList.toggle('is-active');
	var items = document.querySelectorAll('#items-portfolio li');
	items[elem].classList.toggle('is-active');
}

/* API Google map */

function initMap() {
	var myLatLng = {lat: 48.8731628, lng: 2.349824300000023};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: myLatLng,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
}