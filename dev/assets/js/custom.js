const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
	body.classList.toggle("overflow-hidden");
}

burger.addEventListener("click", addClass);

const swiper = new Swiper(".banner-slider", {
	loop: true,
	spaceBetween: 20,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		enabled: false,
	},

	breakpoints: {
		// При разрешении >= 1025
		1025: {
			navigation: {
				enabled: true,
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		},
	},
});
