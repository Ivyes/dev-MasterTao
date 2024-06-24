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
	// Optional parameters
	loop: true,
	spaceBetween: 50,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
