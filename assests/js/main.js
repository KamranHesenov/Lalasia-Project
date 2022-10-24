// Our popular product Swipper JS
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 29,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		// el: ".swipers-pagination",  //radio
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			slidesPerView: 'auto',
		},
	},
});

// Testimonials Swipper JS
var swiper = new Swiper(".mySwiper1", {
	slidesPerView: 'auto',
	spaceBetween: 0,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		//   el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next1",
		prevEl: ".swiper-button-prev1",
	},
	breakpoints: {
		0: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 0,
			slidesPerView: 'auto',
		},
	},
});


var swiper = new Swiper(".mySwiper1", {
	speed: 600,
	parallax: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});